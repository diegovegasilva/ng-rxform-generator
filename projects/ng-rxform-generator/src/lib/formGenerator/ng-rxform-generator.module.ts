import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgRxFormGeneratorComponent } from './ng-rxform-generator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatInputModule, BrowserAnimationsModule],
  declarations: [NgRxFormGeneratorComponent],
  exports: [NgRxFormGeneratorComponent]
})
export class NgRxFormGeneratorModule {}
