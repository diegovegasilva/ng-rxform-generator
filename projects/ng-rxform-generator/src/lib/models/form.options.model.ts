import { Observable } from 'rxjs';

import { InputType, FieldType, DateFieldType } from './types';
import { RxFormGeneratorValidation } from './form.validation.model';
import { RxFormGeneratorAttributes } from './form.attributes.model';
import { RxFormGeneratorSelectOptions } from './form.selectOptions.model';

export interface RxFormGeneratorOptions<T> {
  value?: T;
  key: string;
  inputType?: InputType;
  useMaterial?: boolean;
  fieldType?: FieldType;
  placeholder?: string;
  validators?: RxFormGeneratorValidation[];
  attributes?: RxFormGeneratorAttributes[];
  disabled?: boolean;
  readonly?: boolean;
  multiple?: boolean;
  min?: any;
  max?: any;
  step?: number;
  options?: Observable<any>;
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

export interface RxFormGeneratorSelectConfig<T> {
  value?: T;
  key: string;
  inputType?: InputType;
  useMaterial?: boolean;
  placeholder?: string;
  validators?: RxFormGeneratorValidation[];
  disabled?: boolean;
  readonly?: boolean;
  multiple?: boolean;
  options: Observable<any>;
  optionKeys: RxFormGeneratorSelectOptions;
}

export interface RxFormGeneratorCheckboxConfig<T> {
  value?: T;
  key: string;
  inputType?: InputType;
  useMaterial?: boolean;
  label?: string;
  validators?: RxFormGeneratorValidation[];
  disabled?: boolean;
  readonly?: boolean;
}

export interface RxFormGeneratorDateConfig<T> {
  value?: T;
  key: string;
  inputType?: InputType;
  useMaterial?: boolean;
  fieldType?: DateFieldType;
  placeholder?: string;
  validators?: RxFormGeneratorValidation[];
  disabled?: boolean;
  readonly?: boolean;
  min?: any;
  max?: any;
  step?: number;
}

export interface RxFormGeneratorNumberConfig<T> {
  value?: T;
  key: string;
  inputType?: InputType;
  useMaterial?: boolean;
  placeholder?: string;
  validators?: RxFormGeneratorValidation[];
  disabled?: boolean;
  readonly?: boolean;
  min?: any;
  max?: any;
  step?: number;
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
