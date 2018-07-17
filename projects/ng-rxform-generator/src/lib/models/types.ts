export type InputType =
  | 'text'
  | 'select'
  | 'radio'
  | 'checkbox'
  | 'textarea'
  | 'date'
  | 'number'
  | 'slideToggle';

export type FieldType =
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
