import { InputType } from '../models/types';
import { RxFormGeneratorRadioConfig } from '../models/form.options.model';
import { RxFormGeneratorValidation } from '../models/form.validation.model';
import { RxFormGeneratorRadioOptions } from '../models/form.radioOptions.model';

export class RxFormGeneratorRadio {
  inputType: InputType = 'radio';
  value?: string;
  options: RxFormGeneratorRadioOptions[];
  key: string;
  useMaterial?: boolean;
  legend?: string;
  validators?: RxFormGeneratorValidation[];
  disabled?: boolean;

  constructor(options: RxFormGeneratorRadioConfig) {
    this.value = options.value;
    this.options = options.options;
    this.key = options.key;
    this.useMaterial = options.useMaterial || false;
    this.legend = options.legend;
    this.validators = options.validators || undefined;
    this.disabled = !!options.disabled;
  }
}
