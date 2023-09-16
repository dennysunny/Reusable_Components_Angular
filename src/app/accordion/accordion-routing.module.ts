import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionExampleComponent } from './accordion-test/accordion-example.component';

const routes: Routes = [
  {path:"",component:AccordionExampleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccordionRoutingModule { }
