import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent implements OnInit {

  commonForm! :FormGroup;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {

    this.commonForm = this.formBuilder.group({

      id : ['', {validators : [Validators.required]}]
      

    })
  }

}
