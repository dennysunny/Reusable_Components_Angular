import { Injectable } from '@angular/core';
import { NativeDateAdapter } from '@angular/material/core';

@Injectable()
export class CustomDateAdapter extends NativeDateAdapter {

  /*  This method is used to customize the names of the days 
  of the week that will be displayed in datepicker components.  */
  
  override getDayOfWeekNames(style: 'long' | 'short' | 'narrow'): string[] {
    const SHORT_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return SHORT_NAMES;
  }
}

//NativeDateAdapter - base class for date formatting and localization.
