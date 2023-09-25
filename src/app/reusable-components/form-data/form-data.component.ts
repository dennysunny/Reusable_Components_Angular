import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent implements OnInit {

  commonForm! :FormGroup;
  openCalendar :boolean = false;
  startDate = new Date();
  endDate! :Date;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {

    this.commonForm = this.formBuilder.group({

      id : ['', {validators : [Validators.required]}],
      AdmitDate : [this.startDate],
      DischsrgeDate : [this.endDate]
      

    })
  }

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
