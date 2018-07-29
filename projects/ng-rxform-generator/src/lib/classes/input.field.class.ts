import { TextFieldType, InputType } from '../models/types';
import { RxFormGeneratorInputConfig } from '../models/form.options.model';
import { RxFormGeneratorValidation } from '../models/form.validation.model';

export class RxFormGeneratorInput {
  inputType: InputType = 'text';
  value?: any;
  key: string;
  useMaterial?: boolean;
  fieldType?: TextFieldType;
  placeholder?: string;
  validators?: RxFormGeneratorValidation[];
  disabled?: boolean;
  readonly?: boolean;

  constructor(options: RxFormGeneratorInputConfig) {
    this.fieldType = options['fieldType'] || 'text';
    this.value = options.value;
    this.key = options.key;
    this.useMaterial = options.useMaterial || false;
    this.placeholder = options.placeholder || '';
    this.validators = options.validators || undefined;
    this.disabled = !!options.disabled;
    this.readonly = !!options.readonly;
  }
}
