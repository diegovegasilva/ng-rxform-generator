import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  RxFormInput,
  RxFormTextarea,
  RxFormSelect,
  RxFormCheckbox,
  RxFormDate,
  RxFormNumber,
  RxFormField
} from 'ng-rxform-generator';
import { RxFormRadio } from 'projects/ng-rxform-generator/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  formSettings: RxFormField[];
  selectOptions: Observable<object>;

  constructor() {}

  ngOnInit() {
    this.selectOptions = of([
      { id: 1, name: 'option1' },
      { id: 2, name: 'option2' }
    ]);
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
      new RxFormTextarea({
        key: 'comments'
      }),
      new RxFormSelect({
        key: 'dropdown',
        optionKeys: { key: 'id', value: 'name' },
        options: this.selectOptions,
        placeholder: 'select one option',
        validators: [{ type: 'required' }],
      }),
      new RxFormCheckbox({
        key: 'legal',
        label: 'legal',
        value: false
      }),
      new RxFormDate({
        key: 'date',
        max: '2018-08-20'
      }),
      new RxFormNumber({
        key: 'qty',
        max: 10,
        min: 2,
        step: 0.5,
        placeholder: 'qty'
      }),
      new RxFormRadio({
        key: 'types',
        legend: 'types',
        options: [
          { value: 'sms2', label: 'sms' },
          { value: 'mail', label: 'email' },
          { value: 'call' }
        ],
        value: 'call'
      })
    ];
  }
}
