<template>
  <van-tabbar v-model="tabActive">
    <van-tabbar-item v-for="(item, index) in tabbarList"
                     :key="index"
                     replace
                     :to="item.to"
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
      tabActive: 'home',
      // 标签列表
      tabbarList: [
        {
          name: 'journal-list',
          to: '/journal-list',
          label: 'Journal List',
          icon: 'notes-o'
        },
        {
          name: 'white-noise',
          to: '/white-noise-list',
          label: 'White Noise',
          icon: 'service-o'
        },
        {
          name: 'user',
          to: '/user',
          label: 'user',
          icon: 'user-o'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">

</style>
