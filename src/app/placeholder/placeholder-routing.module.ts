import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceholderExampleComponent } from './placeholder-example/placeholder-example.component';

const routes: Routes = [
  {path:"",component:PlaceholderExampleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaceholderRoutingModule { }
