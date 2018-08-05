import { Observable, of } from 'rxjs';

import { InputType } from '../models/types';
import { RxFormGeneratorSelectConfig } from '../models/form.options.model';
import { RxFormGeneratorValidation } from '../models/form.validation.model';

export class RxFormGeneratorSelect {
  value?: any;
  key: string;
  inputType: InputType = 'select';
  placeholder?: string;
  validators?: RxFormGeneratorValidation[];
  disabled?: boolean;
  readonly?: boolean;
  multiple?: boolean;
  options: Observable<object> | object[];
  optionKeys: {
    key: any;
    value: any;
  };

  constructor(options: RxFormGeneratorSelectConfig) {
    this.value = options.value;
    this.key = options.key;
    this.placeholder = options.placeholder || '';
    this.validators = options.validators || undefined;
    this.disabled = !!options.disabled;
    this.readonly = !!options.readonly;
    this.multiple = !!options.multiple;
    this.options = options.options;
    if (!(this.options instanceof Observable)) {
      this.options = of(this.options);
    }
    this.optionKeys = options.optionKeys;
    if (!this.value && this.placeholder) {
      this.value = this.placeholder;
    }
  }
}
