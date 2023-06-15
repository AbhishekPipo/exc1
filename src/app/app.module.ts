import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExcPuttingBasicsTogethreComponent } from './exc-putting-basics-togethre/exc-putting-basics-togethre.component';

@NgModule({
  declarations: [
    AppComponent,
    ExcPuttingBasicsTogethreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
