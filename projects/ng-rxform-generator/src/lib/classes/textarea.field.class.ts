import { InputType } from '../models/types';
import { RxFormGeneratorOptions } from '../models/form.options.model';
import { RxFormGeneratorField } from './form.field.class';


export class RxFormGeneratorTextarea extends RxFormGeneratorField<string> {
  inputType: InputType = 'textarea';

  constructor(options: RxFormGeneratorOptions<string>) {
    super(options);
  }
}
