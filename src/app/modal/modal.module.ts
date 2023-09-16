import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalRoutingModule } from './modal-routing.module';
import { ModalComponent } from '../reusable-components/modal/modal.component';
import { ModalExampleComponent } from './modal-example/modal-example.component';
import { ReusableComponentsModule } from '../reusable-components/reusable-components.module';


@NgModule({
  declarations: [
    ModalExampleComponent
  ],
  imports: [
    CommonModule,
    ModalRoutingModule,
    ReusableComponentsModule
  ]
})
export class ModalModule { }
