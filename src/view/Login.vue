<template>
  <div class="login">
    <div class="header">
      <div class="logo"/>
    </div>

    <div class="container">
      <div class="title"> Sign In To SoulLog</div>

      <CustomForm :config="loginConfig"
                  :formData="formData"
                  :submit-btn="'Log In'"
                  @onSubmit="logIn"
      />

      <van-button round
                  block
                  type="info"
                  class="infoBTn"
                  color="#fe814b"
                  @click="register">
        Register
      </van-button>
    </div>

  </div>
</template>

<script>
import { loginConfig } from '@/forms/loginForm'
import {sendCode} from '@/api/login'

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
  },
  async created() {
    try {
      console.log('begin')
      await sendCode({ email: '2431165604@qq.com' })
      console.log('end')
    } catch (e) {
      console.log(e)
    }

  }
}

</script>

<style scoped lang="scss">
.login {
  height: 100vh;
  background-image: url("@/assets/picture/login.png");
  background-repeat: no-repeat;
  background-position: center center;
  font-family: Urbanist;
}

.header {
  height: 20vh;
  border-radius: 50%;
  position: relative;

  .logo {
    position: absolute;
    width: 100px;
    height: 100px;
    background-image: url("@/assets/picture/logo.png");
    background-repeat: no-repeat;
    background-size: 100px 100px;
    background-position: center center;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 50%);
    border-radius: 50%;
  }
}

.container {
  background-color: #f7f4f2;
  padding: 80px 20px 20px 20px;
  height: 80vh;
  border-radius: 40px 40px 0 0;
  overflow: auto;

  .title {
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 48px;
  }

  .infoBTn {
    margin-top: 20px;
  }
}

</style>
