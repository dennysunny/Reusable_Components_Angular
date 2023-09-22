import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { DateRange } from '@angular/material/datepicker';
import { CustomHeader } from './custom-header-component';
import { CustomDateAdapter } from './custom-date-adapter';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: CustomDateAdapter,
    },
  ],
})
export class CalenderComponent {
  customHeader = CustomHeader;

  @Input() startDate!: Date;
  @Input() endDate!: Date;
  @Input() weekendFilter: boolean | undefined;

  @Output() selectedRangeValueChange = new EventEmitter<DateRange<Date>>();
  @Output() closeCalendar = new EventEmitter<boolean>();

  // defaultStartDate: Date | null = new Date('2023-09-11');
  // defaultEndDate: Date | null = new Date('2023-09-14');
  selectedRangeValue = new DateRange<Date>(this.startDate, this.endDate);

  ngOnChanges(changes: SimpleChanges): void {
    if ('startDate' in changes || 'endDate' in changes) {
      // console.log("Changes");
      // console.log("Start date",this.startDate );
      // console.log("End date:", this.endDate);

      this.selectedRangeValue = new DateRange<Date>(
        this.startDate,
        this.endDate
      );
    }
  }

  disableWeekendsFilter = (d: Date): boolean => {
    return this.weekendFilter ? d.getDay() !== 0 && d.getDay() !== 6 : true;
  };

  selectedChange(m: any) {
    if (!this.selectedRangeValue?.start || this.selectedRangeValue?.end) {
      this.selectedRangeValue = new DateRange<Date>(m, null);
    } else {
      const start = this.selectedRangeValue.start;
      const end = m;
      if (end < start) {
        this.selectedRangeValue = new DateRange<Date>(end, start);
      } else {
        this.selectedRangeValue = new DateRange<Date>(start, end);
      }
    }
    this.selectedRangeValueChange.emit(this.selectedRangeValue);
  }

  outputDateRanges() {
    this.selectedRangeValueChange.emit(this.selectedRangeValue);
  }

  closeCalender() {
    this.closeCalendar.emit(false);
  }
}
