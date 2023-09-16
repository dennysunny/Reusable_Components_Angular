import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { TableNormalComponent } from '../reusable-components/table-normal/table-normal.component';
import { TableExampleComponent } from './table-example/table-example.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReusableComponentsModule } from '../reusable-components/reusable-components.module';


@NgModule({
  declarations: [
    TableExampleComponent,
  ],
  imports: [
    CommonModule,
    TableRoutingModule,
    ReusableComponentsModule
  ]
})
export class TableModule { }
