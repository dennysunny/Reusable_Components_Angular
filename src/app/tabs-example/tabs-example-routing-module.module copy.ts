import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsExampleComponent } from './tabs-example/tabs-example.component';
import { ReusableComponentsModule } from '../reusable-components/reusable-components.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path : "", component : TabsExampleComponent
}];

@NgModule({

  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule { }
