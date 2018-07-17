import { InputType, DateFieldType } from '../models/types';
import { RxFormGeneratorDateConfig } from '../models/form.options.model';
import { RxFormGeneratorValidation } from '../models/form.validation.model';


export class RxFormGeneratorDate<T> {
  inputType: InputType = 'date';
  value?: T;
  key: string;
  useMaterial?: boolean;
  fieldType?: DateFieldType;
  placeholder?: string;
  validators?: RxFormGeneratorValidation[];
  disabled?: boolean;
  readonly?: boolean;
  min?: any;
  max?: any;
  step?: number;

  constructor(options: RxFormGeneratorDateConfig<T>) {
    this.fieldType = options['fieldType'] || 'date';
    this.value = options.value;
    this.key = options.key;
    this.useMaterial = options.useMaterial || false;
    this.placeholder = options.placeholder || '';
    this.validators = options.validators || undefined;
    this.disabled = !!options.disabled;
    this.readonly = !!options.readonly;
    this.min = options['min'] !== undefined ? options['min'] : '';
    this.max = options['max'] !== undefined ? options['max'] : '';
    this.step = options['step'] !== undefined ? options['max'] : 1;
  }
}
