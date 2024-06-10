<template>
  <van-tabbar v-model="tabActive">
    <van-tabbar-item v-for="(item, index) in tabbarList"
                     :key="index"
                     :name="item.name"
                     :icon="item.icon"
    >
      {{ item.label }}
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: 'Tabbar',
  data() {
    return {
      // 激活的tab
      tabActive: 0,
      // 标签列表
      tabbarList: [
        {
          name: 'home',
          label: 'home',
          icon: 'home-o'
        },
        {
          name: 'write-noise',
          label: 'write noise',
          icon: 'service-o'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">

</style>