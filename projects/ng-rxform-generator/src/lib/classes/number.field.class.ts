import { InputType } from '../models/types';
import { RxFormGeneratorOptions } from '../models/form.options.model';
import { RxFormGeneratorField } from './form.field.class';


export class RxFormGeneratorInputNumber extends RxFormGeneratorField<string | number> {
  inputType: InputType = 'number';
  min;
  max;
  step: number;

  constructor(options: RxFormGeneratorOptions<string | number>) {
    super(options);
    this.min = options['min'] !== undefined ?  options['min'] : '';
    this.max = options['max'] !== undefined ?  options['max'] : '';
    this.step = options['step'] !== undefined ?  options['max'] : 0.1;
  }
}
