<template>
  <div class="whiteNoise">
    <div>
      Mindfulness
      Meditation Intro
    </div>

    <div>
      05:55
    </div>


    <div class="currentCourse">
      <div class="icon"></div>
      <div>
        <div class="course"> Current Course </div>
        <div class="noiseName"> noiseName </div>
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
  background-color: #9bb068;
  background-repeat: repeat;
  background-position: center;
  background-size: 100% auto;
  height: 100vh;
  padding: 20% 0;
  margin: 0;
  @include flex-j-a(space-around, center);
  flex-direction: column;
}

.currentCourse {
  width: 90%;
  border-radius: 10px;
  background-color: #fff;
  padding: 10px;

  .course {
    font-size: 10px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .noiseName {
    font-size: 18px;
  }

  .time {
    //font-family: Urbanist;
    font-size: 14px;
  }
}
</style>
