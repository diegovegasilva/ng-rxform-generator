import { Observable } from 'rxjs';

import { InputType } from '../models/types';
import { RxFormGeneratorSelectOptions } from '../models/form.selectOptions.model';
import { RxFormGeneratorSelectConfig } from '../models/form.options.model';
import { RxFormGeneratorValidation } from '../models/form.validation.model';

export class RxFormGeneratorSelect<T> {
  value?: T;
  key: string;
  inputType: InputType = 'select';
  useMaterial?: boolean;
  placeholder?: string;
  validators?: RxFormGeneratorValidation[];
  disabled?: boolean;
  readonly?: boolean;
  multiple?: boolean;
  options?: Observable<any>;
  optionKeys?: RxFormGeneratorSelectOptions;

  constructor(options: RxFormGeneratorSelectConfig<T>) {
    this.value = options.value;
    this.key = options.key;
    this.useMaterial = options.useMaterial || false;
    this.placeholder = options.placeholder || '';
    this.validators = options.validators || undefined;
    this.disabled = !!options.disabled;
    this.readonly = !!options.readonly;
    this.multiple = !!options.multiple;
    this.options = options.options;
    this.optionKeys = options.optionKeys;
  }
}
