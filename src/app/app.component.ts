import { Component, OnInit } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { RxFormInput, RxFormTextarea, RxFormSelect } from 'ng-rxform-generator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  formSettings;
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
        optionKeys: {key: 'id', value : 'name'},
        options: this.selectOptions
      })
    ];
  }
}
