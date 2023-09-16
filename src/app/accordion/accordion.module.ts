import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionRoutingModule } from './accordion-routing.module';
import { AccordionExampleComponent } from './accordion-test/accordion-example.component';
import { ReusableComponentsModule } from '../reusable-components/reusable-components.module';


@NgModule({
    declarations: [
        AccordionExampleComponent,
    ],
    imports: [
        CommonModule,
        AccordionRoutingModule,
        ReusableComponentsModule
    ]
})
export class AccordionModule { }
