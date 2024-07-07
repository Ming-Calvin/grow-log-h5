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
    prop: 'username',
    type: 'field',
    label: 'username',
    require: true
  },
  {
    prop: 'code',
    type: 'field',
    label: 'code',
    require: true,
    button: 'sendCode'
  }
]

export const newJournalConfig = [
  {
    prop: 'title',
    type: 'field',
    label: 'Journal Title',
    require: true
  },
  {
    prop: 'mood',
    type: 'slot',
    label: 'Select Your Emotion',
    slot: 'emotion',
    require: true
  },
  {
    prop: 'content',
    type: 'textarea',
    label: 'Write Your Entry',
    require: true
  }
]