export const loginConfig = [
  {
    prop: 'field',
    type: 'field',
    label: '输入框'
  },
  {
    prop: 'switch',
    type: 'switch',
    label: '开关'
  },
  {
    prop: 'checkbox',
    type: 'checkbox',
    label: '复选框'
  },
  {
    prop: 'checkboxGroup',
    type: 'checkboxGroup',
    label: '复选框组',
    options: [{
      label: 'asd1',
      value: '1'
    }, {
      label: 'asd2',
      value: '2'
    }]
  },
  {
    prop: 'radio',
    type: 'radio',
    label: '单选框',
    options: [{
      label: 'asd1',
      value: '1'
    }, {
      label: 'asd2',
      value: '2'
    }]
  },
  {
    prop: 'uploader',
    type: 'uploader',
    label: '文件上传'
  },
  {
    prop: 'picker',
    type: 'picker',
    label: '选择器',
    showPicker: false,
    options: [{
      label: 'asd1',
      value: '1'
    }, {
      label: 'asd2',
      value: '2'
    }],
    fun: 'picker'
  },
  {
    prop: 'datetimePicker',
    type: 'datetimePicker',
    label: '时间选择',
    showPicker: false
  },
  {
    prop: 'area',
    type: 'area',
    label: '地区选择',
    showPicker: false
  },
  {
    prop: 'calendar',
    type: 'calendar',
    label: '日历选择',
    showPicker: false
  }
];
