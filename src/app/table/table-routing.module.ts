import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableExampleComponent } from './table-example/table-example.component';

const routes: Routes = [
  {path:"",component:TableExampleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule { }
