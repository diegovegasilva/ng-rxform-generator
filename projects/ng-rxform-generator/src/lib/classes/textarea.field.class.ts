import { InputType } from '../models/types';
import { RxFormGeneratorTextareaConfig } from '../models/form.options.model';
import { RxFormGeneratorValidation } from '../models/form.validation.model';


export class RxFormGeneratorTextarea<T> {
  inputType: InputType = 'textarea';
  value?: T;
  key: string;
  useMaterial?: boolean;
  placeholder?: string;
  validators?: RxFormGeneratorValidation[];
  disabled?: boolean;
  readonly?: boolean;

  constructor(options: RxFormGeneratorTextareaConfig<T>) {
    this.value = options.value;
    this.key = options.key;
    this.useMaterial = options.useMaterial || false;
    this.placeholder = options.placeholder || '';
    this.validators = options.validators || undefined;
    this.disabled = !!options.disabled;
    this.readonly = !!options.readonly;
  }
}
