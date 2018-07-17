import { InputType } from '../models/types';
import { RxFormGeneratorOptions } from '../models/form.options.model';
import { RxFormGeneratorNumberConfig } from '../models/form.options.model';
import { RxFormGeneratorValidation } from '../models/form.validation.model';


export class RxFormGeneratorInputNumber<T> {
  inputType: InputType = 'number';
  value?: T;
  key: string;
  useMaterial?: boolean;
  fieldType = 'number';
  placeholder?: string;
  validators?: RxFormGeneratorValidation[];
  disabled?: boolean;
  readonly?: boolean;
  min?: any;
  max?: any;
  step?: number;

  constructor(options: RxFormGeneratorOptions<T>) {
    this.value = options.value;
    this.key = options.key;
    this.useMaterial = options.useMaterial || false;
    this.placeholder = options.placeholder || '';
    this.validators = options.validators || undefined;
    this.disabled = !!options.disabled;
    this.readonly = !!options.readonly;
    this.min = options['min'] !== undefined ?  options['min'] : '';
    this.max = options['max'] !== undefined ?  options['max'] : '';
    this.step = options['step'] !== undefined ?  options['max'] : 0.1;
  }
}
