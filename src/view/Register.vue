<template>
  <div class="login">
    <div class="header">
      <div class="logo"/>
    </div>

    <div class="container">
      <div class="title"> Register To SoulLog</div>

      <CustomForm :config="registerConfig"
                  :formData="formData"
                  :submit-btn="'Register'"
                  @onSubmit="register"
      >
        <template #sendCode>
          <van-button size="small"
                      type="primary"
                      native-type="button"
                      @click="sendCode">
            {{ buttonText }}
          </van-button>
        </template>
      </CustomForm>

      <van-button round
                  block
                  type="info"
                  class="infoBTn"
                  color="#fe814b"
                  @click="logIn">
        Log In
      </van-button>
    </div>

    <Loading/>
  </div>
</template>

<script>
import {registerConfig} from '@/forms/loginForm'
import {validEmail} from '@/utils/validate'
import mToast from '@/utils/toast'
import {register, sendCode} from '@/api/login'
import Loading from '@/components/Loading/index.vue'

export default {
  name: 'register',
  components: {Loading},
  data() {
    return {
      registerConfig: registerConfig,
      formData: registerConfig.reduce((acc, cur) => {
        if(cur.type === 'checkboxGroup' || cur.type === 'uploader') {
          acc[cur.prop]  = []
        } else {
          acc[cur.prop]  = ''
        }

        return acc
      }, {}),
      countdown: 0,
      timer: null
    }
  },
  computed: {
    buttonText() {
      return this.countdown > 0 ? `${ this.countdown }  seconds`: 'Get Email Verification Code'
    }
  },
  methods: {
    // 发送验证码
    async sendCode() {
      if(this.countdown) return

      const { email } = this.formData

      if(email && validEmail(email)) {
        try {
          await sendCode({ email })
        } catch (e) {
          console.log(e)
        }

        this.countdown = 60
        this.timer = setInterval(() => {
          this.countdown--
          if(this.countdown <= 0) {
            clearInterval(this.timer)
          }
        }, 1000)

        mToast.success('verification code sent')
      } else {
        mToast.fail('please enter your vaild email')
      }
    },
    // 注册
    async register() {
      try {
        const res = await register(this.formData)

        if(res.code === 200 ) {
          this.$router.push({ name: 'login' })
        }
      } catch (e) {
        console.log(e)
      }
    },
    // 登录
    logIn() {
      this.$router.push({name: 'login'})
    }
  },
  destroyed() {
    if(this.timer) {
      clearInterval(this.timer)
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
