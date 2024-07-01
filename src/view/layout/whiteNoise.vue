<template>
  <div class="whiteNoise">
    <div class="currentCourse">
      <div class="icon"></div>

      <div>
        <div> Current Course </div>
        <div> noiseName </div>
        <div class="time"> 15min </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getWhiteNoiseList} from '@/api/white-noise'

export default {
  name: 'whiteNoise',
  data() {
    return {
      whiteNoiseList: []
    }
  },
  methods: {
    async getWhiteNoise() {
      try {
        const res = await getWhiteNoiseList()

        this.whiteNoiseList = res.whiteNoises
      } catch (e) {
        console.log(e)
      }
    }
  },
  created() {
    this.getWhiteNoise()
  }
}
</script>


<style scoped lang="scss">
.whiteNoise {
  background-image: url('@/assets/picture/white-noise-background.png');
  background-repeat: repeat;
  background-position: center;
  background-size: 100% auto;
  height: 100vh;
  margin: 0;
}

.currentCourse {
  width: 90%;
  margin: auto;
  border-radius: 10px;
  background-color: #fff;
  padding: 10px;
}
</style>
