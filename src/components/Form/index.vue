<template>
  <div>
    <van-form @submit="onSubmit">
      <template v-for="(item, index) in formConfig">
        <!--输入框-->
        <van-field
          :key="index"
          v-if="item.type === 'field'"
          v-model="data[item.prop]"
          :name="item.value"
          :label="item.label"
          :placeholder="item.placeholder ? item.placeholder : '请输入' + item.name"
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
                            :name="opt.value"
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
                         :name="opt.value"
                         shape="square">
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
                   :placeholder="item.placeholder ? item.placeholder : '请选择' + item.name"
                   @click="item.showPicker = true"
        />
        <van-popup v-model="item.showPicker"
                   :key="'picker' + item.prop"
                   v-if="item.type === 'picker'"
                   position="bottom">
          <van-picker show-toolbar
                      :columns="item.options"
                      @confirm="item.onConfirm()"
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
                   :placeholder="item.placeholder ? item.placeholder : '请选择' + item.name"
                   @click="item.showPicker = true"
        />
        <van-popup v-model="item.showPicker"
                   :key="'datetimePicker' + item.prop"
                   v-if="item.type === 'datetimePicker'"
                   position="bottom">
          <van-datetime-picker type="time"
                               @confirm="item.onConfirm()"
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
                   :placeholder="item.placeholder ? item.placeholder : '请选择' + item.name"
                   @click="item.showPicker = true"
        />
        <van-popup v-model="item.showPicker"
                   :key="'area' + item.prop"
                   v-if="item.type === 'area'"
                   position="bottom">
          <van-area :area-list="item.areaList"
                    @confirm="item.onConfirm()"
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
                   :placeholder="item.placeholder ? item.placeholder : '请选择' + item.name"
                   @click="item.showPicker = true"
        />
        <van-calendar v-model="item.showPicker"
                      :key="'calendar' + item.prop"
                      v-if="item.type === 'calendar'"
                      @confirm="item.onConfirm()" />
      </template>
    </van-form>
  </div>
</template>

<script>
import {deepClone} from '@/utils';

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
    onSubmit() {}
  }
};

</script>

<style scoped lang="scss">

</style>
