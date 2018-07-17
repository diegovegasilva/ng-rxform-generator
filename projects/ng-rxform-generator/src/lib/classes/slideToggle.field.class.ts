import { InputType } from '../models/types';
import { RxFormGeneratorCheckboxConfig } from '../models/form.options.model';
import { RxFormGeneratorValidation } from '../models/form.validation.model';

export class RxFormGeneratorSlideToggle<T> {
  inputType: InputType = 'slideToggle';
  value?: T;
  key: string;
  label?: string;
  validators?: RxFormGeneratorValidation[];
  disabled?: boolean;
  readonly?: boolean;


  constructor(options: RxFormGeneratorCheckboxConfig<T>) {
    this.value = options.value;
    this.key = options.key;
    this.label = options.label;
    this.validators = options.validators || undefined;
    this.disabled = !!options.disabled;
    this.readonly = !!options.readonly;
  }
}
