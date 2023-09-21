import { Injectable } from "@angular/core";
import { NativeDateAdapter } from "@angular/material/core";

@Injectable()
export class CustomDateAdapter extends NativeDateAdapter {
    
    override getDayOfWeekNames(style: any): string[] {

    const SHORT_NAMES = ['Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return SHORT_NAMES;
  }
}