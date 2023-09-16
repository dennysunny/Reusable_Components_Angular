import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadsExampleComponent } from './uploads-example/uploads-example.component';

const routes: Routes = [
  {path:"",component:UploadsExampleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadsRoutingModule { }
