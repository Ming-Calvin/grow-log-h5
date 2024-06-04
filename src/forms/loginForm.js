import {validEmail} from '@/utils/validate';

export const loginConfig = [
  {
    prop: 'email',
    type: 'field',
    label: 'email',
    require: true,
    rules: { validator: validEmail, message: 'please enter your vaild email' }
  },
  {
    prop: 'password',
    type: 'field',
    label: 'password',
    require: true
  }
];
