import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatisticsComponent } from '../reusable-components/statistics/statistics.component';
import { StatisticsExampleComponent } from './statistics-example/statistics-example.component';
import { ReusableComponentsModule } from '../reusable-components/reusable-components.module';


@NgModule({
  declarations: [
    StatisticsExampleComponent
  ],
  imports: [
    CommonModule,
    StatisticsRoutingModule,
    ReusableComponentsModule
  ]
})
export class StatisticsModule { }
