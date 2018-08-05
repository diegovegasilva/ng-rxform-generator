import { RxFormGeneratorCheckbox } from './checkbox.field.class';
import { InputType } from '../models/types';
import { RxFormGeneratorCheckboxConfig } from '../models/form.options.model';

export class RxFormGeneratorSlideToggle extends RxFormGeneratorCheckbox {
  inputType: InputType = 'slideToggle';

  constructor(options: RxFormGeneratorCheckboxConfig) {
    super(options);
  }
}
