import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsExampleComponent } from './tabs-example/tabs-example.component';
import { ReusableComponentsModule } from '../reusable-components/reusable-components.module';
import { TabsRoutingModule } from './tabs-example-routing-module.module copy';



@NgModule({
  declarations: [
    TabsExampleComponent
  ],
  imports: [
    CommonModule,
    TabsRoutingModule,
    ReusableComponentsModule
  ]
})
export class TabsExampleModuleModule { }
