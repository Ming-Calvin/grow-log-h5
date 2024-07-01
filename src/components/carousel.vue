<template>
  <div>
    <van-swipe class="swipe"
               :width="180"
               :loop="false">

      <van-swipe-item v-for="(item, index) in list"
                      :key="index"
                      class="swipeItem"
      >
        <div class="swipeItemWrapper"
             :style="item.style">
          <div class="title"> <van-icon :name="item.iconName" /> {{ item.title }}</div>

          <slot :name="item.slot"></slot>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: 'carousel',
  data() {
    return {
    }
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped lang="scss">
.swipeItem {
  width: 163px;
  height: 200px;
  padding: 0 5px;

  .swipeItemWrapper {
    height: 100%;
    width: 100%;
    border-radius: 32px;
  }

  .title {
    color: #ffffff;
    text-align: center;
    padding-top: 10px;
  }
}


</style>
