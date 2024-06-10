<template>
  <div>
    <transition name="transition">
      <keep-alive v-if="$route.meta.keepAlive"
                  key="keep-alive">
        <router-view></router-view>
      </keep-alive>

      <router-view v-else
                   key="no-keey-alive"></router-view>

    </transition>

    <tabbar></tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar/index.vue'

export default {
  name: 'layout',
  components: {Tabbar},
  data() {
    return {

    }
  },
  created() {
    this.$store.dispatch('user/GetInfo')
  }
}

</script>



<style scoped lang="scss">

</style>