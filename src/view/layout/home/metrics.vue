<template>
  <div class="metrics">
    <div class="title"> Mental Health Metrics </div>

    <carousel :list="mentalList"></carousel>

  </div>
</template>

<script>
import Carousel from '@/components/carousel.vue'

export default {
  name: 'metrics',
  components: {Carousel},
  data() {
    return {
      mentalList: [
        {
          id: 1,
          title: 'Freud Score',
          style: 'backgroundColor: #9aaf68',
          iconName: 'like-o'
        },
        {
          id: 2,
          title: 'Mood',
          style: 'backgroundColor: #fe814b',
          iconName: 'smile-o'
        },
        {
          id: 3,
          title: 'Journal',
          style: 'backgroundColor: #a28fff',
          iconName: 'bar-chart-o'
        }
      ]
    }
  }
}

</script>

<style scoped lang="scss">
@import "@/styles/mixins";

.metrics {
  margin-top: 32px;
  padding: 0 16px;

  .title {
    font-size: 20px;
    margin-bottom: 12px;
  }
}
</style>
