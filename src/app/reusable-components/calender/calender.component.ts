import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MatDateFormats,
} from '@angular/material/core';
import { DateRange, MatCalendar } from '@angular/material/datepicker';
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

  @Input() weekendFilter: boolean | undefined;
  @Output() selectedRangeValueChange = new EventEmitter<DateRange<Date>>();

  selectedRangeValue: DateRange<Date> = new DateRange<Date>(null, null);

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
    console.log('Selected Events:', m);
  }

  outputDateRanges() {
    console.log('Event', this.selectedRangeValue);
    this.selectedRangeValueChange.emit(this.selectedRangeValue);
  }

  headerData = {
    headerTemplate: `
        <div class="custom-header">
          <ng-container *ngFor="let day of days">
            {{ day | slice:0:3 }}
          </ng-container>
        </div>
      `,
    days: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
  };
}
