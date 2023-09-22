import { Component } from '@angular/core';

@Component({
  selector: 'app-calender-example',
  templateUrl: './calender-example.component.html',
  styleUrls: ['./calender-example.component.css'],
})
export class CalenderExampleComponent {
  // startDate = new Date();
  // lastDate = new Date();
  // endDate = new Date(this.lastDate.setDate(this.startDate.getDate() + 1));
  
  startDate = new Date()
  endDate! :Date;

  openCalendar :boolean = false;

  selectedDateRange(event: any) {
    console.log('Date Range Start', event.start);
    console.log('Date Range End', event.end);

    this.startDate = event.start;
    this.endDate = event.end;
  }

  closeCalendar(event: boolean) {
    this.openCalendar = event;
    console.log('Calender Closed');
  }
}
