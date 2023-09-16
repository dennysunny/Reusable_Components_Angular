import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion/accordion.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { ModalComponent } from './modal/modal.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { InputComponent } from './input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabsComponent } from './tabs/tabs.component';
import { TableNormalComponent } from './table-normal/table-normal.component';



@NgModule({
  declarations: [
    AccordionComponent,
    StatisticsComponent,
    PlaceholderComponent,
    ModalComponent,
    ItemsListComponent,
    InputComponent,
    TabsComponent,
    TableNormalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    AccordionComponent,
    StatisticsComponent,
    PlaceholderComponent,
    ModalComponent,
    ItemsListComponent,
    InputComponent,
    TabsComponent,
    TableNormalComponent
  ]
})
export class ReusableComponentsModule { }
