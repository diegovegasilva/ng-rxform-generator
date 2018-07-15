import { FieldType, InputType } from '../models/types';
import { RxFormGeneratorOptions } from '../models/form.options.model';
import { RxFormGeneratorField } from './form.field.class';

export class RxFormGeneratorInput extends RxFormGeneratorField<
  string | number
> {
  inputType: InputType = 'text';
  type: FieldType;

  constructor(options: RxFormGeneratorOptions<string | number> = {}) {
    super(options);
    this.type = options['type'] || 'text';
  }
}
