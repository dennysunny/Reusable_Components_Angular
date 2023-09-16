import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputExampleComponent } from './input-example/input-example.component';
import { ReusableComponentsModule } from '../reusable-components/reusable-components.module';
import { InputRoutingModule } from './input-routing.module';


@NgModule({
  declarations: [
    InputExampleComponent
  ],
  imports: [
    CommonModule,
    InputRoutingModule,
    ReusableComponentsModule
  ]
})
export class InputModule { }
