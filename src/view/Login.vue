<template>
  <div>
    <CustomForm :config="loginConfig"
                :formData="formData"
    />
  </div>
</template>

<script>
import { loginConfig } from '@/forms/loginForm';

export default {
  name: 'login',
  data() {
    return {
      loginConfig: loginConfig,
      formData: loginConfig.reduce((acc, cur) => {
        if(cur.type === 'checkboxGroup' || cur.type === 'uploader') {
          acc[cur.prop]  = [];
        } else {
          acc[cur.prop]  = '';
        }

        return acc;
      }, {})
    };
  }
};

</script>

<style scoped lang="scss">

</style>
