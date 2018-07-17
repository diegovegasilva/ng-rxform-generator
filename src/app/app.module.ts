import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgRxFormGeneratorModule } from 'ng-rxform-generator';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgRxFormGeneratorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
