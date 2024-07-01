<template>
  <div>
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
                @click="logIn">
      Log In
    </van-button>

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

</style>
