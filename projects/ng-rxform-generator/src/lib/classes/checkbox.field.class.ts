import { InputType, LabelPosition } from '../models/types';
import { RxFormGeneratorCheckboxConfig } from '../models/form.options.model';
import { RxFormGeneratorValidation } from '../models/form.validation.model';

export class RxFormGeneratorCheckbox {
  inputType: InputType = 'checkbox';
  value?: boolean;
  key: string;
  useMaterial?: boolean;
  label?: string;
  labelPosition?: LabelPosition;
  validators?: RxFormGeneratorValidation[];
  disabled?: boolean;

  constructor(options: RxFormGeneratorCheckboxConfig) {
    this.value = options.value;
    this.key = options.key;
    this.useMaterial = options.useMaterial || false;
    this.label = options.label;
    this.labelPosition = options.labelPosition;
    this.validators = options.validators || undefined;
    this.disabled = !!options.disabled;
  }
}
