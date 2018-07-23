import { InputType, DateFieldType } from '../models/types';
import { RxFormGeneratorDateConfig } from '../models/form.options.model';
import { RxFormGeneratorValidation } from '../models/form.validation.model';


export class RxFormGeneratorDate {
  inputType: InputType = 'date';
  value?: any;
  key: string;
  useMaterial?: boolean;
  fieldType?: DateFieldType;
  validators?: RxFormGeneratorValidation[];
  disabled?: boolean;
  readonly?: boolean;
  min?: any;
  max?: any;

  constructor(options: RxFormGeneratorDateConfig) {
    this.fieldType = options['fieldType'] || 'date';
    this.value = options.value;
    this.key = options.key;
    this.useMaterial = options.useMaterial || false;
    this.validators = options.validators || undefined;
    this.disabled = !!options.disabled;
    this.readonly = !!options.readonly;
    this.min = options['min'] !== undefined ? options['min'] : '';
    this.max = options['max'] !== undefined ? options['max'] : '';
  }
}
