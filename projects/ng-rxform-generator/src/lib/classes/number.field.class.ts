import { InputType } from '../models/types';
import { RxFormGeneratorNumberConfig } from '../models/form.options.model';
import { RxFormGeneratorValidation } from '../models/form.validation.model';


export class RxFormGeneratorInputNumber {
  inputType: InputType = 'number';
  value?: number;
  key: string;
  useMaterial?: boolean;
  fieldType = 'number';
  placeholder?: string;
  validators?: RxFormGeneratorValidation[];
  disabled?: boolean;
  readonly?: boolean;
  min?: number;
  max?: number;
  step?: number;

  constructor(options: RxFormGeneratorNumberConfig) {
    this.value = options.value;
    this.key = options.key;
    this.useMaterial = options.useMaterial || false;
    this.placeholder = options.placeholder || '';
    this.validators = options.validators || undefined;
    this.disabled = !!options.disabled;
    this.readonly = !!options.readonly;
    this.min = options['min'] !== undefined ?  options['min'] : undefined;
    this.max = options['max'] !== undefined ?  options['max'] : undefined;
    this.step = options['step'] !== undefined ?  options['step'] : undefined;
  }
}
