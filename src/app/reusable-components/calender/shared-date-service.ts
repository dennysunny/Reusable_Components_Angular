import { Injectable } from '@angular/core';
import { DateRange } from '@angular/material/datepicker';

@Injectable({
  providedIn: 'root',
})
export class SharedDateService {
  private dates!: DateRange<Date>;

  setDate(data: DateRange<Date>) {
    this.dates = data;

  }

  getDate(): DateRange<Date> {
    return this.dates;
  }
}
