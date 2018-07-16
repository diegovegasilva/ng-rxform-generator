import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgRxformGeneratorComponent } from './ng-rxform-generator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [NgRxformGeneratorComponent],
  exports: [NgRxformGeneratorComponent]
})
export class NgRxformGeneratorModule {}
