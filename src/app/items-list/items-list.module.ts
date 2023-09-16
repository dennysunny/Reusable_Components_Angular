import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsListRoutingModule } from './items-list-routing.module';
import { ItemsListComponent } from '../reusable-components/items-list/items-list.component';
import { ItemsListExampleComponent } from './items-list-example/items-list-example.component';
import { ReusableComponentsModule } from '../reusable-components/reusable-components.module';


@NgModule({
  declarations: [
    ItemsListExampleComponent
  ],
  imports: [
    CommonModule,
    ItemsListRoutingModule,
    ReusableComponentsModule
  ]
})
export class ItemsListModule { }
