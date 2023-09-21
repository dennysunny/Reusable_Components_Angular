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
import { CalendarModule } from 'primeng/calendar';
import { CalendarIcon } from 'primeng/icons/calendar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {
  MatDateRangeSelectionStrategy,
  DateRange,
  MAT_DATE_RANGE_SELECTION_STRATEGY,
} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
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
    FormsModule,
    CalendarModule,
    CalendarIcon,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule
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
