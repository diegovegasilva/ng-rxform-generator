import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgRxFormGeneratorComponent } from './ng-rxform-generator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [NgRxFormGeneratorComponent],
  exports: [NgRxFormGeneratorComponent]
})
export class NgRxFormGeneratorModule {}
