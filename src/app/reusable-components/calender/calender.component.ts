import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Inject, Input, OnDestroy, Output} from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MatDateFormats } from '@angular/material/core';
import { DateRange, MatCalendar } from '@angular/material/datepicker';
import  moment from 'moment';
import { Subject, takeUntil } from 'rxjs';


@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})

export class CalenderComponent {


  @Input() weekendFilter :boolean | undefined
  selectedRangeValue: DateRange<Date> = new DateRange<Date>(null,null)
  @Output() selectedRangeValueChange = new EventEmitter<DateRange<Date>>();

  disableWeekendsFilter = (d: Date): boolean => {
    return this.weekendFilter ? (d.getDay() !== 0 && d.getDay() !== 6) : false
}
  

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
        console.log("Selected Events:", m);
        console.log("Selected Dates :", this.selectedRangeValue);
        
        
    }

   

  }

 