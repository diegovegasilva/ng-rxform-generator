import { Observable } from 'rxjs';

import { InputType } from '../models/types';
import { RxFormGeneratorSelectOptions } from '../models/form.selectOptions.model';
import { RxFormGeneratorOptions } from '../models/form.options.model';
import { RxFormGeneratorField } from './form.field.class';

export class RxFormGeneratorSelect extends RxFormGeneratorField<string> {
  inputType: InputType = 'select';
  options: Observable<any>;
  optionKeys: RxFormGeneratorSelectOptions;

  constructor(options: RxFormGeneratorOptions<string>) {
    super(options);
    this.options = options['options'] || undefined;
    this.optionKeys = options['optionKeys'] || undefined;
  }
}
