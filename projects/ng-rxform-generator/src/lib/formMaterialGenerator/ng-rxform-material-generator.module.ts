import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgRxFormMaterialGeneratorComponent } from './ng-rxform-material-generator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatSelectModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSlideToggleModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSlideToggleModule
  ],
  declarations: [NgRxFormMaterialGeneratorComponent],
  exports: [NgRxFormMaterialGeneratorComponent]
})
export class NgRxFormMaterialGeneratorModule {}
