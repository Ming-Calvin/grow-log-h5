<!-- loading component-->
<template>
  <div class="loading">
    <van-overlay :show="isLoading">
      <van-loading></van-loading>
    </van-overlay>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'Loading',
  data() {
    return {}
  },
  computed: {
    ...mapState({
      isLoading: state => state.loading.loading
    })
  }
}
</script>

<style scoped lang="scss">
.loading {
  .van-overlay {
    height: 100vh;
    top: 0;
    z-index: 1000000;
  }
  .van-loading {
    width: 100%;
    position: absolute;
    top: 50%;
    color: #c8c9cc;
    font-size: 0;
    vertical-align: middle;
    text-align: center;
  }
}
</style>
