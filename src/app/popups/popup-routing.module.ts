import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PopupExampleComponent } from './popup-example/popup-example.component';


const routes: Routes = [{ path: '', component: PopupExampleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PopupRoutingModule { }
