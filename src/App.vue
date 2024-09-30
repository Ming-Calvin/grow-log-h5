<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import {getToken} from '@/utils/auth'

export default {
  name: 'App',
  async created() {
    if(getToken()) {
      // 获取用户信息
      await this.$store.dispatch('user/GetInfo')
    }
  }
}
</script>

<style>
</style>
