import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgRxFormGeneratorModule } from 'ng-rxform-generator';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgRxFormGeneratorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
