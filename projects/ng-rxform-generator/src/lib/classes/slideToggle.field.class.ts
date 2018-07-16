import { InputType } from '../models/types';
import { RxFormGeneratorOptions } from '../models/form.options.model';
import { RxFormGeneratorField } from './form.field.class';

export class RxFormGeneratorSlideToggle extends RxFormGeneratorField<boolean> {
  inputType: InputType = 'slideToggle';

  constructor(options: RxFormGeneratorOptions<boolean>) {
    super(options);
  }
}
