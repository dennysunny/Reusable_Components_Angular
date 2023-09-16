import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalExampleComponent } from './modal-example/modal-example.component';

const routes: Routes = [
  {path:"",component:ModalExampleComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModalRoutingModule { }
