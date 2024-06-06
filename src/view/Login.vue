<template>
  <div>
    <CustomForm :config="loginConfig"
                :formData="formData"
                :submit-btn="'Login'"
                @onSubmit="onSubmit"
    />
  </div>
</template>

<script>
import { loginConfig } from '@/forms/loginForm';
import {login} from '@/api/login';

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
  },
  methods: {
    async onSubmit(data) {
      try {
        const res = await login(data);
        console.log(res);
      } catch (e) {
        console.log(e);
      }
    }
  }
};

</script>

<style scoped lang="scss">

</style>
