import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusableComponentsModule } from '../reusable-components/reusable-components.module';
import { PopupRoutingModule } from './popup-routing.module';
import { PopupExampleComponent } from './popup-example/popup-example.component';



@NgModule({
  declarations: [
    PopupExampleComponent
  ],
  imports: [
    CommonModule,
    PopupRoutingModule,
    ReusableComponentsModule
  ]
})
export class PopupModule { }
