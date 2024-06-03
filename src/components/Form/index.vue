<template>
  <div>
    
  </div>
</template>

<script>
export default {
  name: 'CustomForm',
  prop: {
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
  data() {
    return {

    };
  }
};

</script>

<style scoped lang="scss">

</style>
