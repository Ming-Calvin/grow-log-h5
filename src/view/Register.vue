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
          Get Email Verification Code
        </van-button>
      </template>
    </CustomForm>

    <van-button round
                block
                type="info"
                @click="logIn">
      Log In
    </van-button>
  </div>
</template>

<script>
import {registerConfig} from '@/forms/loginForm'
import {validEmail} from '@/utils/validate'
import mToast from '@/utils/toast'
import {register, sendCode} from '@/api/login'
// import {sendCode} from '@/api/login'

export default {
  name: 'register',
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
      }, {})
    }
  },
  methods: {
    // 发送验证码
    async sendCode() {
      const { email } = this.formData

      if(email && validEmail(email)) {
        try {
          const res = await sendCode({ email })
        } catch (e) {
          console.log(e)
        }
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
  }
}

</script>

<style scoped lang="scss">

</style>
