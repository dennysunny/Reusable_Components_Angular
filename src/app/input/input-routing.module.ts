import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputExampleComponent } from './input-example/input-example.component';

const routes: Routes = [{
  path : "", component : InputExampleComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputRoutingModule { }
