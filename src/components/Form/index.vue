<template>
  <div>
    <van-form @submit="onSubmit">
      <template v-for="(item, index) in formConfig">
        <!--输入框-->
        <van-field :key="index"
                   v-if="item.type === 'field'"
                   :name="item.prop"
                   :label="item.label"
                   :placeholder="item.placeholder ? item.placeholder : '请输入' + item.prop"
                   :rules="item.rules"/>

        <!-- 开关 -->
        <van-field name="switch"
                   :label="item.label"
                   :key="index"
                   v-if="item.type === 'switch'">
          <template #input>
            <van-switch v-model="data[item.prop]"
                        size="20" />
          </template>
        </van-field>

        <!-- 复选框 -->
        <van-field name="checkbox"
                   :label="item.label"
                   :key="index"
                   v-if="item.type === 'checkbox'">
          <template #input>
            <van-checkbox v-model="data[item.prop]"
                          shape="square" />
          </template>
        </van-field>

        <!-- 复选框组 -->
        <van-field name="checkboxGroup"
                   :label="item.label"
                   :key="index"
                   v-if="item.type === 'checkboxGroup'">
          <template #input>
            <van-checkbox-group v-model="data[item.prop]"
                                direction="horizontal">
              <van-checkbox v-for="opt in item.options"
                            :key="opt.value"
                            :name="opt.label"
                            shape="square">
                {{ opt.label }}
              </van-checkbox>
            </van-checkbox-group>
          </template>
        </van-field>

        <!-- 单选框 -->
        <van-field name="radio"
                   :label="item.label"
                   :key="index"
                   v-if="item.type === 'radio'">
          <template #input>
            <van-radio-group v-model="data[item.prop]"
                             direction="horizontal">
              <van-radio v-for="opt in item.options"
                         :key="opt.value"
                         :name="opt.value">
                {{ opt.label }}
              </van-radio>
            </van-radio-group>
          </template>
        </van-field>

        <!-- 文件上传 -->
        <van-field name="uploader"
                   :label="item.label"
                   :key="index"
                   v-if="item.type === 'uploader'">
          <template #input>
            <van-uploader v-model="data[item.prop]" />
          </template>
        </van-field>

        <!-- 选择器 -->
        <van-field readonly
                   clickable
                   name="picker"
                   :key="index"
                   v-if="item.type === 'picker'"
                   :value="data[item.prop]"
                   :label="item.label"
                   :placeholder="item.placeholder ? item.placeholder : '请选择' + item.label"
                   @click="item.showPicker = true"
        />
        <van-popup v-model="item.showPicker"
                   :key="'picker' + item.prop"
                   v-if="item.type === 'picker'"
                   position="bottom">
          <van-picker show-toolbar
                      :columns="item.options"
                      value-key="label"
                      @confirm="onConfirm(item.prop, $event)"
                      @cancel="item.showPicker = false"
          />
        </van-popup>

        <!-- 时间选择 -->
        <van-field readonly
                   clickable
                   name="datetimePicker"
                   :key="index"
                   v-if="item.type === 'datetimePicker'"
                   :value="data[item.prop]"
                   :label="item.label"
                   :placeholder="item.placeholder ? item.placeholder : '请选择' + item.prop"
                   @click="item.showPicker = true"
        />
        <van-popup v-model="item.showPicker"
                   :key="'datetimePicker' + item.prop"
                   v-if="item.type === 'datetimePicker'"
                   position="bottom">
          <van-datetime-picker type="time"
                               @confirm="onConfirm(item.prop, $event)"
                               @cancel="item.showPicker = false"
          />
        </van-popup>

        <!-- 地区选择 -->
        <van-field readonly
                   clickable
                   name="area"
                   :key="index"
                   v-if="item.type === 'area'"
                   :value="data[item.prop]"
                   :label="item.label"
                   :placeholder="item.placeholder ? item.placeholder : '请选择' + item.prop"
                   @click="item.showPicker = true"
        />
        <van-popup v-model="item.showPicker"
                   :key="'area' + item.prop"
                   v-if="item.type === 'area'"
                   position="bottom">
          <van-area :area-list="item.areaList"
                    @confirm="onConfirm(item.prop, $event)"
                    @cancel="item.showPicker = true"
          />
        </van-popup>

        <!-- 日历选择 -->
        <van-field readonly
                   clickable
                   name="calendar"
                   :key="index"
                   v-if="item.type === 'calendar'"
                   :value="data[item.prop]"
                   :label="item.label"
                   :placeholder="item.placeholder ? item.placeholder : '请选择' + item.prop"
                   @click="showPicker(true)"
        />
        <van-calendar v-model="item.showPicker"
                      :key="'calendar' + item.prop"
                      v-if="item.type === 'calendar'"
                      @confirm="calendarConfirm(item, $event)" />
      </template>

      <van-button round
                  block
                  type="info"
                  native-type="submit">
        提交
      </van-button>
    </van-form>
  </div>
</template>

<script>
import {deepClone} from '@/utils';
import moment from 'moment/moment';

export default {
  name: 'CustomForm',
  props: {
    // 表单配置
    config: {
      type: Array,
      require: true,
      default: () => []
    },
    // 表单数据
    formData: {
      type: Object,
      require: true,
      default: () => {}
    }
  },
  computed: {
    data: {
      get: function() {
        return this.formData;
      },
      set: function(val) {
        this.$emit('update:formData', val);
      }
    },
    showPicker() {
      return (boolean) => {
        return boolean;
      };
    }
  },
  watch: {
    config: {
      handler(value) {
        this.formConfig = deepClone(value);
      },
      deep: true,
      immediate: true
    }
  },
  data() {
    return {
      // 表单配置
      formConfig: []
    };
  },
  methods:{
    // 提交方法
    onSubmit(val) {
      console.log(val, 'val');
    },
    // 日历确定
    calendarConfirm(item, date) {
      item.showPicker = false;
      const e = moment(date).format('YYYY-MM-DD');
      this.onConfirm(item.prop, e);
    },
    // 确认选项
    onConfirm(prop, e) {
      let value = '';

      if(typeof e == 'object') {
        value = e.value;
      } else {
        value = e;
      }

      this.data[prop] = value;
    }
  }
};

</script>

<style scoped lang="scss">

</style>
