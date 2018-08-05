import { Observable } from 'rxjs';

import { InputType, TextFieldType, DateFieldType, LabelPosition, Orientation, TickInterval } from './types';
import { RxFormGeneratorValidation } from './form.validation.model';
import { RxFormGeneratorRadioOptions } from './form.radioOptions.model';

export interface RxFormGeneratorInputConfig {
  value?: any;
  key: string;
  inputType?: InputType;
  fieldType?: TextFieldType;
  placeholder?: string;
  validators?: RxFormGeneratorValidation[];
  disabled?: boolean;
  readonly?: boolean;
}

export interface RxFormGeneratorTextareaConfig {
  value?: any;
  key: string;
  inputType?: InputType;
  placeholder?: string;
  validators?: RxFormGeneratorValidation[];
  disabled?: boolean;
  readonly?: boolean;
}

export interface RxFormGeneratorSelectConfig {
  value?: any;
  key: string;
  inputType?: InputType;
  placeholder?: string;
  validators?: RxFormGeneratorValidation[];
  disabled?: boolean;
  readonly?: boolean;
  multiple?: boolean;
  options: Observable<object>;
  optionKeys: {
    key: any;
    value: any;
  };
}

export interface RxFormGeneratorCheckboxConfig {
  value?: boolean;
  key: string;
  inputType?: InputType;
  label?: string;
  labelPosition?: LabelPosition;
  validators?: RxFormGeneratorValidation[];
  disabled?: boolean;
}

export interface RxFormGeneratorDateConfig {
  value?: any;
  key: string;
  inputType?: InputType;
  fieldType?: DateFieldType;
  validators?: RxFormGeneratorValidation[];
  disabled?: boolean;
  readonly?: boolean;
  min?: any;
  max?: any;
}

export interface RxFormGeneratorNumberConfig {
  value?: number;
  key: string;
  inputType?: InputType;
  placeholder?: string;
  validators?: RxFormGeneratorValidation[];
  disabled?: boolean;
  readonly?: boolean;
  min?: number;
  max?: number;
  step?: number;
}

export interface RxFormGeneratorSliderConfig {
  value?: number;
  key: string;
  inputType?: InputType;
  label?: string;
  thumbLabel?: boolean;
  tickInterval: TickInterval;
  validators?: RxFormGeneratorValidation[];
  disabled?: boolean;
  readonly?: boolean;
  min?: number;
  max?: number;
  step?: number;
  orientation?: Orientation;
  invert: boolean;
}

export interface RxFormGeneratorRadioConfig {
  options: RxFormGeneratorRadioOptions[];
  value?: any;
  key: string;
  inputType?: InputType;
  legend?: string;
  labelPosition?: LabelPosition;
  validators?: RxFormGeneratorValidation[];
  disabled?: boolean;
}

export interface RxFormGeneratorSlideToggleConfig {
  value?: any;
  key: string;
  inputType?: InputType;
  label?: string;
  validators?: RxFormGeneratorValidation[];
  disabled?: boolean;
  readonly?: boolean;
}
