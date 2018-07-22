import { InputType } from '../models/types';
import { RxFormGeneratorCheckboxConfig } from '../models/form.options.model';
import { RxFormGeneratorValidation } from '../models/form.validation.model';

export class RxFormGeneratorSlideToggle {
  inputType: InputType = 'slideToggle';
  value?: boolean;
  key: string;
  label?: string;
  validators?: RxFormGeneratorValidation[];
  disabled?: boolean;


  constructor(options: RxFormGeneratorCheckboxConfig) {
    this.value = options.value;
    this.key = options.key;
    this.label = options.label;
    this.validators = options.validators || undefined;
    this.disabled = !!options.disabled;
  }
}
