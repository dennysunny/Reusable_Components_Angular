import { TimesDirective } from './times.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceholderRoutingModule } from './placeholder-routing.module';
import { PlaceholderComponent } from '../reusable-components/placeholder/placeholder.component';
import { PlaceholderExampleComponent } from './placeholder-example/placeholder-example.component';
import { ReusableComponentsModule } from '../reusable-components/reusable-components.module';


@NgModule({
  declarations: [
    PlaceholderExampleComponent,
  ],
  imports: [
    CommonModule,
    PlaceholderRoutingModule,
    ReusableComponentsModule
  ]
})
export class PlaceholderModule { }
