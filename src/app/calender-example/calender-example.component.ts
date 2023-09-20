import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calender-example',
  templateUrl: './calender-example.component.html',
  styleUrls: ['./calender-example.component.css']
})

export class CalenderExampleComponent implements OnInit {

  date :any;

  constructor() { }

  ngOnInit(): void {
  }


}
