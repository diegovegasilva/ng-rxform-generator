import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgRxFormMaterialGeneratorComponent } from './ng-rxform-material-generator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  declarations: [NgRxFormMaterialGeneratorComponent],
  exports: [NgRxFormMaterialGeneratorComponent]
})
export class NgRxFormMaterialGeneratorModule {}
