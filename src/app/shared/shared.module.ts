import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from './divider/divider.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';



@NgModule({
  declarations: [
    DividerComponent,
    SplashScreenComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DividerComponent
  ]
})
export class SharedModule { }
