<template>
  <div class="whiteNoise">
    <div class="currentNoise">
      Mindfulness Meditation Intro
    </div>

    <div class="playTime">
      <CircleProgress :percentage="10"/>
      05:55
    </div>


    <div class="currentCourse">
      <div class="icon">
        <van-icon size="24"
                  color="#926247"
                  name="play" />
      </div>

      <div class="info">
        <div class="course"> Next Course </div>
        <div class="noiseName"> noiseName </div>
        <div class="time">
          <van-icon name="underway"
                    style="margin-right: 5px"
                    color="#fe814b"/>
          15min
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import {getWhiteNoiseList} from '@/api/white-noise'
import CircleProgress from '@/view/layout/whiteNoise/circle.vue'

export default {
  name: 'whiteNoise',
  components: {CircleProgress},
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
  padding: 10% 0 20%;
  margin: 0;
  @include flex-j-a(space-around, center);
  flex-direction: column;
}

.currentNoise {
  font-weight: bold;
  font-size: 36px;
  color: #ffffff;
  text-align: center;
}

.playTime {
  font-weight: bold;
  font-size: 36px;
  color: #ffffff;
  letter-spacing: 0.15em;
  text-align: center;
}

.currentCourse {
  width: 90%;
  border-radius: 25px;
  background-color: #fff;
  padding: 15px;
  @include flex-j-a(start, center);
  
  .icon {
    background-color: #f7f4f2;
    width: 72px;
    height: 72px;
    margin-right: 20px;
    border-radius: 10px;
    @include flex-j-a(center, center);
  }

  .info {
    height: 100%;
    @include flex-j-a(space-between, start);
    flex-direction: column;

    .course {
      font-size: 10px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    .noiseName {
      font-family: Urbanist;
      font-weight: bold;
      letter-spacing: 0.05em;
      font-size: 18px;
    }

    .time {
      font-family: Urbanist;
      font-size: 14px;
    }
  }
}
</style>
