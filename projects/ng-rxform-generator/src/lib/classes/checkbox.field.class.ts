import { InputType } from '../models/types';
import { RxFormGeneratorCheckboxConfig } from '../models/form.options.model';
import { RxFormGeneratorValidation } from '../models/form.validation.model';

export class RxFormGeneratorCheckbox<T> {
  inputType: InputType = 'checkbox';
  value?: T;
  key: string;
  useMaterial?: boolean;
  label?: string;
  validators?: RxFormGeneratorValidation[];
  disabled?: boolean;
  readonly?: boolean;


  constructor(options: RxFormGeneratorCheckboxConfig<T>) {
    this.value = options.value;
    this.key = options.key;
    this.useMaterial = options.useMaterial || false;
    this.label = options.label;
    this.validators = options.validators || undefined;
    this.disabled = !!options.disabled;
    this.readonly = !!options.readonly;
  }
}
