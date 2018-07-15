import { InputType } from '../models/types';
import { RxFormGeneratorOptions } from '../models/form.options.model';
import { RxFormGeneratorField } from './form.field.class';

export class RxFormGeneratorCheckbox extends RxFormGeneratorField<boolean> {
  inputType: InputType = 'checkbox';

  constructor(options: RxFormGeneratorOptions<boolean> = {}) {
    super(options);
  }
}
