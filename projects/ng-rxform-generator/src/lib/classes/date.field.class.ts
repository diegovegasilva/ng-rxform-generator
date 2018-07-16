import { InputType, FieldType } from '../models/types';
import { RxFormGeneratorOptions } from '../models/form.options.model';
import { RxFormGeneratorField } from './form.field.class';

export class RxFormGeneratorDate extends RxFormGeneratorField<string> {
  inputType: InputType = 'date';
  fieldType: FieldType;
  min;
  max;
  step: number;

  constructor(options: RxFormGeneratorOptions<string> = {}) {
    super(options);
    this.fieldType = options['fieldType'] || 'date';
    this.min = options['min'] !== undefined ? options['min'] : '';
    this.max = options['max'] !== undefined ? options['max'] : '';
    this.step = options['step'] !== undefined ? options['max'] : 1;
  }
}
