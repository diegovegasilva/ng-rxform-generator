import { Observable } from 'rxjs';

import { InputType, FieldType, DateFieldType } from './types';
import { RxFormGeneratorValidation } from './form.validation.model';
import { RxFormGeneratorAttributes } from './form.attributes.model';
import { RxFormGeneratorSelectOptions } from './form.selectOptions.model';
import { RxFormGeneratorRadioOptions } from './form.radioOptions.model';

export interface RxFormGeneratorOptions<T> {
  value?: T;
  key: string;
  inputType?: InputType;
  useMaterial?: boolean;
  fieldType?: FieldType;
  placeholder?: string;
  label?: string;
  legend?: string;
  validators?: RxFormGeneratorValidation[];
  attributes?: RxFormGeneratorAttributes[];
  disabled?: boolean;
  readonly?: boolean;
  multiple?: boolean;
  min?: any;
  max?: any;
  step?: number;
  options?: Observable<any> | RxFormGeneratorRadioOptions[];
  optionKeys?: RxFormGeneratorSelectOptions;
}

export interface RxFormGeneratorInputConfig<T> {
  value?: T;
  key: string;
  inputType?: InputType;
  useMaterial?: boolean;
  fieldType?: FieldType;
  placeholder?: string;
  validators?: RxFormGeneratorValidation[];
  disabled?: boolean;
  readonly?: boolean;
}

export interface RxFormGeneratorTextareaConfig<T> {
  value?: T;
  key: string;
  inputType?: InputType;
  useMaterial?: boolean;
  placeholder?: string;
  validators?: RxFormGeneratorValidation[];
  disabled?: boolean;
  readonly?: boolean;
}

export interface RxFormGeneratorSelectConfig {
  value?: any;
  key: string;
  inputType?: InputType;
  useMaterial?: boolean;
  placeholder?: string;
  validators?: RxFormGeneratorValidation[];
  disabled?: boolean;
  readonly?: boolean;
  multiple?: boolean;
  options: Observable<object>;
  optionKeys: {
    key: any;
    value: any;
  };
}

export interface RxFormGeneratorCheckboxConfig {
  value?: boolean;
  key: string;
  inputType?: InputType;
  useMaterial?: boolean;
  label?: string;
  validators?: RxFormGeneratorValidation[];
  disabled?: boolean;
}

export interface RxFormGeneratorDateConfig {
  value?: any;
  key: string;
  inputType?: InputType;
  useMaterial?: boolean;
  fieldType?: DateFieldType;
  validators?: RxFormGeneratorValidation[];
  disabled?: boolean;
  readonly?: boolean;
  min?: any;
  max?: any;
}

export interface RxFormGeneratorNumberConfig {
  value?: number;
  key: string;
  inputType?: InputType;
  useMaterial?: boolean;
  placeholder?: string;
  validators?: RxFormGeneratorValidation[];
  disabled?: boolean;
  readonly?: boolean;
  min?: number;
  max?: number;
  step?: number;
}

export interface RxFormGeneratorRadioConfig {
  options: RxFormGeneratorRadioOptions[];
  value?: any;
  key: string;
  inputType?: InputType;
  useMaterial?: boolean;
  legend?: string;
  validators?: RxFormGeneratorValidation[];
  disabled?: boolean;
}

export interface RxFormGeneratorSlideToggleConfig<T> {
  value?: T;
  key: string;
  inputType?: InputType;
  label?: string;
  validators?: RxFormGeneratorValidation[];
  disabled?: boolean;
  readonly?: boolean;
}
