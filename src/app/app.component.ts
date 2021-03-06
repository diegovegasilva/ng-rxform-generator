import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  RxFormInput,
  RxFormTextarea,
  RxFormSelect,
  RxFormCheckbox,
  RxFormDate,
  RxFormNumber,
  RxFormField,
  RxFormSlideToggle,
  RxFormRadio,
  RxFormSlider
} from 'ng-rxform-generator';
import { timeInterval } from '../../node_modules/rxjs/operators';

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
        value : 2
      }),
      new RxFormCheckbox({
        key: 'legal',
        label: 'legal',
        labelPosition: 'before',
        value: false,
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
        labelPosition: 'before',
        value: 'call'
      }),
      new RxFormSlideToggle({
        key: 'legal2',
        label: 'legal2',
        labelPosition: 'after',
        value: true
      }),
      new RxFormSlider({
        key: 'qty2',
        max: 10,
        min: 2,
        step: 0.5,
        value: 5,
        thumbLabel: true,
      }),
    ];
  }
}
