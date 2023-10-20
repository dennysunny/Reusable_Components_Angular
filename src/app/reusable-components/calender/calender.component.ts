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
import { SharedDateService } from './shared-date-service'

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

/*
This class can be called from other components and accepts below inputs
<app-calender *ngIf="openCalendar"
 [startDate]="startDate"
 [endDate]="endDate"
 [weekendFilter]="false"
 (selectedRangeValueChange) = "selectedDateRange($event)"
 (closeCalendar)="closeCalendar($event)"
></app-calender>
*/

export class CalenderComponent {
  customHeader = CustomHeader;

  @Input() startDate!: Date;
  @Input() endDate!: Date;
  @Input() weekendFilter: boolean | undefined;

  @Output() selectedRangeValueChange = new EventEmitter<DateRange<Date>>();
  @Output() closeCalendar = new EventEmitter<boolean>();

  // dates :any;

  // constructor(private dateService: SharedDateService) {
  //   this.dates = this.dateService.getDate();
  //   console.log("Datessss",this.dates);
    
  //   if(this.dates){
  //     this.selectedRangeValue = new DateRange<Date>(this.dates.start, this.dates.end);
  //   }
  //  }

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
    //this.dateService.setDate(this.selectedRangeValue)
    
  }

  outputDateRanges() {
    this.selectedRangeValueChange.emit(this.selectedRangeValue);
  }

  closeCalender() {
    this.closeCalendar.emit(false);
  }
}
