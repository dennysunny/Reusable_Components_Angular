import {
  Component,
  ChangeDetectionStrategy,
  OnDestroy,
  Inject,
  ChangeDetectorRef,
} from '@angular/core';
import { MatCalendar } from '@angular/material/datepicker';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MatDateFormats,
} from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Subject, takeUntil } from 'rxjs';

/* 
The purpose of this code is to ensure that 
when the MatCalendar's state changes, 
Angular's change detection mechanism is triggered. 
This is important because changes in the calendar state may affect 
the rendering of the calendar or its related  components. 
*/

/* Custom header component for datepicker. */
@Component({
  selector: 'custom-header',
  styles: [
    `
      .custom-header {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding: 0px 0px 16px 0px;
      }

      .month-header {
        color: #223484;
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
        font-size: 14px;
        color: grey;
        cursor: pointer;
      }
    `,
  ],
  template: `
    <div class="custom-header">
      <div class="month-header">
        <div class="month">
          <span>{{ monthLabel }}</span>
          <div class="icons">
            <button mat-icon-button (click)="previousButton('month')">
              <mat-icon class="small-icon">keyboard_arrow_up</mat-icon>
            </button>
            <button mat-icon-button (click)="nextButton('month')">
              <mat-icon class="small-icon">keyboard_arrow_down</mat-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
})
export class CustomHeader<D> implements OnDestroy {
  private _destroyed = new Subject<void>();

  constructor(
    private _calendar: MatCalendar<D>,
    private _dateAdapter: DateAdapter<D>,
    @Inject(MAT_DATE_FORMATS) private _dateFormats: MatDateFormats,
    private cdr: ChangeDetectorRef /* 
      The ChangeDetectorRef allows to manually trigger change detection 
      within the component. 
      It has methods -> markForCheck() and detectChanges(), 
      which are used to notify Angular that changes have occurred 
      and the view should be updated.*/
  ) {
    _calendar.stateChanges
      .pipe(takeUntil(this._destroyed))
      /* takeUntil(this._destroyed) is used to ensure that 
              the subscription is automatically unsubscribed 
              when the component is destroyed */
      .subscribe(() => this.cdr.markForCheck());
  }

  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }

  get monthLabel() {
    return this._dateAdapter.format(
      this._calendar.activeDate,
      this._dateFormats.display.monthYearLabel
    );
  }

  previousButton(mode: 'month' | 'year') {
    this._calendar.activeDate =
      mode === 'month'
        ? this._dateAdapter.addCalendarMonths(this._calendar.activeDate, -1)
        : this._dateAdapter.addCalendarYears(this._calendar.activeDate, -1);
  }

  nextButton(mode: 'month' | 'year') {
    this._calendar.activeDate =
      mode === 'month'
        ? this._dateAdapter.addCalendarMonths(this._calendar.activeDate, 1)
        : this._dateAdapter.addCalendarYears(this._calendar.activeDate, 1);
  }
}
