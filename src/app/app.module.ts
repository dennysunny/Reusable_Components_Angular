
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReusableComponentsModule } from './reusable-components/reusable-components.module';
import { FormsComponent } from './forms/forms.component';
import { CalenderExampleComponent } from './calender-example/calender-example.component';
import { FormsModule } from '@angular/forms';

 
 @NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    FormsComponent,
    CalenderExampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReusableComponentsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
