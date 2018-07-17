import { Component, OnInit } from '@angular/core';
import {RxFormInput, RxFormTextarea} from 'ng-rxform-generator';

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
      new RxFormInput({
        key: 'ter',
        fieldType: 'text',
        placeholder: 'Nombre',
        value: 'errete',
        validators: [{ type: 'required' }]
      }),
      new RxFormInput({
        key: 'email',
        fieldType: 'email',
        placeholder: 'Email',
        value: 'sdfs123@as.as',
        validators: [{ type: 'required' }, { type: 'email' }]
      }),
      new RxFormTextarea<string>({
        key: 'comments',
      })
    ];
  }
}
