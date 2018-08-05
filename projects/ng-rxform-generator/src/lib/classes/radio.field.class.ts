import { InputType, LabelPosition } from '../models/types';
import { RxFormGeneratorRadioConfig } from '../models/form.options.model';
import { RxFormGeneratorValidation } from '../models/form.validation.model';
import { RxFormGeneratorRadioOptions } from '../models/form.radioOptions.model';

export class RxFormGeneratorRadio {
  inputType: InputType = 'radio';
  value?: string;
  options: RxFormGeneratorRadioOptions[];
  key: string;
  legend?: string;
  labelPosition: LabelPosition;
  validators?: RxFormGeneratorValidation[];
  disabled?: boolean;

  constructor(options: RxFormGeneratorRadioConfig) {
    this.value = options.value;
    this.options = options.options;
    this.key = options.key;
    this.legend = options.legend;
    this.labelPosition = options.labelPosition;
    this.validators = options.validators || undefined;
    this.disabled = !!options.disabled;
  }
}
