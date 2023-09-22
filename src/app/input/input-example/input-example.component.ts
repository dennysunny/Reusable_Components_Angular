import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-example',
  templateUrl: './input-example.component.html',
  styleUrls: ['./input-example.component.css']
})
export class InputExampleComponent  {

  data :string = "ebneiubieubfi"
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
