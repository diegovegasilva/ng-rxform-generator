import { Observable } from 'rxjs';

import { InputType, FieldType } from './types';
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
