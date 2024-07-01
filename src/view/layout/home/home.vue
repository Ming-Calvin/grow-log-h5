<template>
  <div class="home">
    <home-header></home-header>

    <metrics></metrics>
  </div>
</template>

<script>
import HomeHeader from '@/view/layout/home/homeHeader.vue'
import Metrics from '@/view/layout/home/metrics.vue'

export default {
  name: 'home',
  components: {Metrics, HomeHeader},
  data() {
    return {

    }
  }
}

</script>

<style scoped lang="scss">
@import "@/styles/mixins";

.home {
  background-color: #f7f4f2;
  width: 100%;
  height: 100vh;
  font-size: 16px;
}
</style>
