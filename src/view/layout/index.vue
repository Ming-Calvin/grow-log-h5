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
    <loading/>

    <tabbar></tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar/index.vue'
import Loading from '@/components/Loading/index.vue'

export default {
  name: 'layout',
  components: {Loading, Tabbar},
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
