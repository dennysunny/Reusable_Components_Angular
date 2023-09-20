import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion/accordion.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { InputComponent } from './input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabsComponent } from './tabs/tabs.component';
import { TableNormalComponent } from './table-normal/table-normal.component';
import { PopupComponent } from './popup/popup.component';
import { FormDataComponent } from './form-data/form-data.component';
import { CalenderComponent } from './calender/calender.component';



@NgModule({
  declarations: [
    AccordionComponent,
    StatisticsComponent,
    PlaceholderComponent,
    ItemsListComponent,
    InputComponent,
    TabsComponent,
    TableNormalComponent,
    PopupComponent,
    FormDataComponent,
    CalenderComponent
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
    ItemsListComponent,
    InputComponent,
    TabsComponent,
    TableNormalComponent,
    PopupComponent,
    FormDataComponent,
    CalenderComponent
  ]
})
export class ReusableComponentsModule { }
