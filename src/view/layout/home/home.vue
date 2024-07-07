<template>
  <div class="home">
    <home-header></home-header>

    <metrics></metrics>


    <tip></tip>
  </div>
</template>

<script>
import HomeHeader from '@/view/layout/home/homeHeader.vue'
import Metrics from '@/view/layout/home/metrics.vue'
import Tip from '@/view/layout/home/tip.vue'

export default {
  name: 'home',
  components: {Tip, Metrics, HomeHeader},
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
  min-height: 100vh;
  font-size: 16px;
}
</style>
