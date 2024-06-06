<template>
  <div>
    <CustomForm :config="loginConfig"
                :formData="formData"
                :submit-btn="'Log In'"
                @onSubmit="logIn"
    />

    <van-button round
                block
                type="info"
                @click="register">
      Register
    </van-button>
  </div>
</template>

<script>
import { loginConfig } from '@/forms/loginForm'

export default {
  name: 'login',
  data() {
    return {
      loginConfig: loginConfig,
      formData: loginConfig.reduce((acc, cur) => {
        if(cur.type === 'checkboxGroup' || cur.type === 'uploader') {
          acc[cur.prop]  = []
        } else {
          acc[cur.prop]  = ''
        }

        return acc
      }, {})
    }
  },
  methods: {
    // 登录
    logIn(data) {
      this.$store.dispatch('user/Login', data)
    },
    // 注册
    register() {
      this.$router.push({name: 'register'})
    }
  }
}

</script>

<style scoped lang="scss">

</style>
