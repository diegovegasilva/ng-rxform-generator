import { InputType, TickInterval, Orientation } from '../models/types';
import { RxFormGeneratorSliderConfig } from '../models/form.options.model';
import { RxFormGeneratorValidation } from '../models/form.validation.model';


export class RxFormGeneratorSlider {
  inputType: InputType = 'slider';
  value?: number;
  key: string;
  label?: string;
  thumbLabel?: boolean;
  tickInterval?: TickInterval;
  validators?: RxFormGeneratorValidation[];
  disabled?: boolean;
  min?: number;
  max?: number;
  step?: number;
  orientation?: Orientation;
  invert?: boolean;


  constructor(options: RxFormGeneratorSliderConfig) {
    this.value = options.value;
    this.key = options.key;
    this.label = options.label || '';
    this.thumbLabel = options.thumbLabel;
    this.tickInterval = options.tickInterval;
    this.validators = options.validators || undefined;
    this.disabled = !!options.disabled;
    this.min = options['min'] !== undefined ?  options['min'] : undefined;
    this.max = options['max'] !== undefined ?  options['max'] : undefined;
    this.step = options['step'] !== undefined ?  options['step'] : undefined;
    this.orientation = options.orientation;
    this.invert = options.invert;
  }
}
