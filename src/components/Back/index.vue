<template>
  <div class="back">
    <div @click="goBack">
      <svg-icon icon="back"/>
    </div>

    <span class="title"> {{ title }} </span>
  </div>
</template>

<script>
export default {
  name: 'Back',
  props: {
    title: {
      type: String,
      default: 'back'
    }
  },
  methods: {
    goBack() {
      this.$router.back()
    }
  }
}
</script>

<style scoped lang="scss">
.back {
  @include flex-j-a(start, center);
  margin-bottom: 16px;

  .title {
    font-family: Urbanist;
    font-size: 20px;
    font-weight: 800;
    vertical-align: center;
    margin-left: 12px;
  }
}
</style>
