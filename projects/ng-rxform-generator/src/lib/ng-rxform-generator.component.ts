import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

import { distinctUntilChanged, debounceTime } from 'rxjs/operators';

import { RxFormGeneratorField } from './classes/form.field.class';
import { errorMsg } from './errors/error.enum';
import { Subscription } from 'rxjs';
import { isEqual } from './utils/utils';

@Component({
  selector: 'rxf-generator',
  templateUrl: './ng-rxform-generator.component.html',
  styles: []
})
export class NgRxFormGeneratorComponent implements OnInit, OnDestroy {
  @Input() fields: RxFormGeneratorField<any>[];
  @Output() formChanges = new EventEmitter<any>();
  @Output() saveForm = new EventEmitter<any>();
  form: FormGroup;
  formSub: Subscription;
  formModified = false;
  originalValues = {};
  errorMsg;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.errorMsg = errorMsg;
    this.createForm();
    this.getOriginalValues();
    this.formSub = this.form.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe(value => {
        this.formChanges.emit(value);
        this.formModified = !isEqual(value, this.originalValues);
      });
  }

  getOriginalValues() {
    this.fields.forEach(field => {
      this.originalValues[field.key] = field.value;
    });
  }

  createForm() {
    this.form = this.fb.group(this.createFormObject());
  }

  createFormObject() {
    const formObject = {};
    this.fields.forEach(field => {
      formObject[field.key] = new FormControl(
        { value: field.value || '', disabled: field.disabled },
        this.addValidators(field.validators)
      );
    });

    return formObject;
  }

  addValidators(validationData: any[]): any[] {
    const validatiors = [];
    if (validationData && validationData.length > 0) {
      validationData.forEach(val => {
        validatiors.push(Validators[val.type]);
      });
    }
    return validatiors;
  }

  save() {
    this.saveForm.emit(this.form.value);
  }

  reset() {
    this.form.reset();
    this.form.patchValue(this.originalValues);
  }

  ngOnDestroy() {
    this.formSub.unsubscribe();
  }
}
