<template>
  <div class="home">
    <home-header></home-header>

    <setting></setting>
  </div>
</template>

<script>
import HomeHeader from '@/view/layout/home/homeHeader.vue'
import Setting from '@/view/layout/home/setting.vue'

export default {
  name: 'home',
  components: {Setting, HomeHeader},
  data() {
    return {}
  }
}

</script>

<style scoped lang="scss">
@import "@/styles/mixins";

.home {
  background-color: #f7f4f2;
  width: 100%;
  min-height: 100vh;
  font-size: 16px;
}
</style>
