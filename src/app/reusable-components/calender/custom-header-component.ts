import { Component, ChangeDetectionStrategy, OnDestroy, Inject, ChangeDetectorRef } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { DateAdapter, MAT_DATE_FORMATS, MatDateFormats, MatNativeDateModule } from "@angular/material/core";
import { MatCalendar, MatDatepicker, MatDatepickerModule } from "@angular/material/datepicker";
import { MatIconModule } from "@angular/material/icon";
import { Subject, takeUntil } from "rxjs";

/** Custom header component for datepicker. */
@Component({
  selector: 'example-header',
  styles: [
    `
      .custom-header {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding: 10px;
      }

      .month-header {
        color: rgb(30 6 166);
        border: 2px solid rgb(212, 212, 212);
        padding: 5px;
        border-radius: 5px;
      }

      .month {
        display: flex;
        flex-direction: row;
        font-weight: 600;
        justify-content: center;
        align-items: center;
      }

      .icons {
        display: flex;
        flex-direction: column;
      }

      .small-icon {
        font-size: 18px;
        color : grey;
        }

        .mat-calendar-table-header th:nth-child(1) span {
  color: red;
}

        .mat-icon-button {
  margin: 42px; /* Adjust the margin as needed */
}

    `,
  ],
  template: `
    <div class="custom-header">
      <div class="month-header">
        <div class="month">
          <span>{{ periodLabel }}</span>
          <div class="icons">
            <button mat-icon-button (click)="previousClicked('month')">
              <mat-icon class="small-icon">keyboard_arrow_up</mat-icon>
            </button>

            <button  mat-icon-button (click)="nextClicked('month')">
              <mat-icon class="small-icon" >keyboard_arrow_down</mat-icon>
            </button>
          </div>
        </div>
      </div>
      <button mat-icon-button (click)="closeCalendar()" >
        <mat-icon class="small-icon">close</mat-icon>
      </button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatButtonModule, MatIconModule]
})

export class CustomHeader<D> implements OnDestroy {
  private _destroyed = new Subject<void>();
  

  constructor(
    private _calendar: MatCalendar<D>,
    private _dateAdapter: DateAdapter<D>,

    @Inject(MAT_DATE_FORMATS) private _dateFormats: MatDateFormats,
    cdr: ChangeDetectorRef
  ) {
    _calendar.stateChanges
      .pipe(takeUntil(this._destroyed))
      .subscribe(() => cdr.markForCheck());
  }

  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }

  get periodLabel() {
    return this._dateAdapter
      .format(
        this._calendar.activeDate,
        this._dateFormats.display.monthYearLabel
      )
      .toLocaleUpperCase();
  }

  previousClicked(mode: 'month' | 'year') {
    this._calendar.activeDate =
      mode === 'month'
        ? this._dateAdapter.addCalendarMonths(this._calendar.activeDate, -1)
        : this._dateAdapter.addCalendarYears(this._calendar.activeDate, -1);
  }

  nextClicked(mode: 'month' | 'year') {
    this._calendar.activeDate =
      mode === 'month'
        ? this._dateAdapter.addCalendarMonths(this._calendar.activeDate, 1)
        : this._dateAdapter.addCalendarYears(this._calendar.activeDate, 1);
  }

  closeCalendar() {
    console.log("close");
    
  }
}