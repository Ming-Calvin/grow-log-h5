import {validEmail} from '@/utils/validate'

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
    fieldType: 'password',
    require: true
  }
]

export const registerConfig = [
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
    fieldType: 'password',
    require: true
  },
  {
    prop: 'userName',
    type: 'field',
    label: 'userName',
    require: true
  },
  {
    prop: 'registrationCode',
    type: 'field',
    label: 'registrationCode',
    require: true,
    button: 'sendCode'
  }
]
