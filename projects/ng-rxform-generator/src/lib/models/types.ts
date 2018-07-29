import { RxFormGeneratorCheckbox } from '../classes/checkbox.field.class';
import { RxFormGeneratorDate } from '../classes/date.field.class';
import { RxFormGeneratorInput } from '../classes/input.field.class';
import { RxFormGeneratorInputNumber } from '../classes/number.field.class';
import { RxFormGeneratorSelect } from '../classes/select.field.class';
import { RxFormGeneratorSlideToggle } from '../classes/slideToggle.field.class';
import { RxFormGeneratorTextarea } from '../classes/textarea.field.class';
import { RxFormGeneratorRadio } from '../classes/radio.field.class';

export type InputType =
  | 'text'
  | 'select'
  | 'radio'
  | 'checkbox'
  | 'textarea'
  | 'date'
  | 'number'
  | 'slideToggle';

export type TextFieldType =
  | 'text'
  | 'password'
  | 'tel'
  | 'email'
  | 'hidden'
  | 'range'
  | 'file'
  | 'color';

  export type DateFieldType =
  | 'date'
  | 'datetime'
  | 'datetime-local'
  | 'month'
  | 'week'
  | 'time';

export type FieldValidation =
  | 'required'
  | 'requiredTrue'
  | 'email'
  | 'pattern'
  | 'min'
  | 'max'
  | 'minLength'
  | 'maxLength';


  export type RxFormField =
  | RxFormGeneratorCheckbox
  | RxFormGeneratorDate
  | RxFormGeneratorInput
  | RxFormGeneratorInputNumber
  | RxFormGeneratorSelect
  | RxFormGeneratorSelect
  | RxFormGeneratorSlideToggle
  | RxFormGeneratorTextarea
  | RxFormGeneratorRadio;
