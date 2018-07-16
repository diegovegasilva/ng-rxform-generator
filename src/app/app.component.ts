import { Component, OnInit } from '@angular/core';
import * as FormGenerator from 'ng-rxform-generator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  formSettings;
  constructor() {}

  ngOnInit() {
    this.formSettings = [
      new FormGenerator.RxFormGeneratorInput({
        key: 'name',
        fieldType: 'text',
        placeholder: 'Nombre',
        value: 'errete',
        validators: [{ type: 'required' }]
      }),
      new FormGenerator.RxFormGeneratorInput({
        key: 'email',
        fieldType: 'email',
        placeholder: 'Email',
        value: 'sdfs123@as.as',
        validators: [{ type: 'required' }, { type: 'email' }]
      })
    ];
  }
}
