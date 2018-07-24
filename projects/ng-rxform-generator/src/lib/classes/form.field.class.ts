import { Observable } from 'rxjs';

import { FieldType } from '../models/types';
import { RxFormGeneratorAttributes } from '../models/form.attributes.model';
import { RxFormGeneratorSelectOptions } from '../models/form.selectOptions.model';
import { RxFormGeneratorRadioOptions } from '../models/form.radioOptions.model';
import { RxFormGeneratorOptions } from '../models/form.options.model';

export class RxFormGeneratorField<T> {
  value: T;
  key: string;
  inputType: string;
  fieldType: FieldType;
  useMaterial: boolean;
  placeholder: string;
  label: string;
  legend: string;
  validators: any[];
  attributes: RxFormGeneratorAttributes[];
  disabled: boolean;
  readonly: boolean;
  multiple: boolean;
  max: any;
  min: any;
  step: number;
  options: Observable<any> | RxFormGeneratorRadioOptions[];
  optionKeys: RxFormGeneratorSelectOptions;

  constructor(options: RxFormGeneratorOptions<T>) {
    this.value = options.value;

    this.key = options.key;
    this.inputType = options.inputType;
    this.fieldType = options.fieldType;
    this.useMaterial = options.useMaterial || false;
    this.placeholder = options.placeholder;
    this.label = options.label;
    this.legend = options.legend;
    this.validators = options.validators || undefined;
    this.attributes = options.attributes || undefined;
    this.disabled = !!options.disabled;
    this.readonly = !!options.readonly;
    this.multiple = !!options.multiple;
    this.max = options.max;
    this.min = options.min;
    this.step = options.step;
    this.options = options.options;
    this.optionKeys = options.optionKeys;
  }
}
