<template>
  <div class="whiteNoiseList">
    <img src="@/assets/picture/white-noise.png"
         class="picture">

    <div class="tip">
      This course will teach you how to be mindful in your life. Prepare to be enlightend.
    </div>

    <div class="list">
      <div class="title"> WHITE NOISE LIST </div>

      <div class="currentCourse"
           v-for="(item, index) in list"
           :key="index"
      >
        <div class="icon">
          <van-icon size="24"
                    color="#926247"
                    @click="play(item.white_noise_id)"
                    name="play" />
        </div>

        <div class="info">
          <div class="noiseName"> {{ item.name }} </div>
          <div class="time">
            <van-icon name="underway"
                      style="margin-right: 5px"
                      color="#fe814b"
            />
            <span> {{ item.play_count }} </span>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import {getWhiteNoiseList} from '@/api/white-noise'

export default {
  name: 'whiteNoiseList',
  data() {
    return {
      list: []
    }
  },
  methods: {
    async getList() {
      this.list = (await getWhiteNoiseList()).data.whiteNoise
    },
    play(id) {
      this.$router.push({ name: 'whiteNoise', query: { id } })
    }
  },
  created() {
    this.getList()
  }
}
</script>

<style scoped lang="scss">
.whiteNoiseList {
  padding: 32px 16px 45px;
  background: #F7F4F2;
  min-height: 100vh;
}

.tip {
  font-family: Urbanist;
  font-size: 16px;
  color: rgba(31, 22, 15, 0.64);
  line-height: 160%;
  margin-top: 16px;
  margin-bottom: 16px;
}

.title {
  font-size: 20px;
  font-weight: 800;
  font-family: Urbanist;
  margin-bottom: 16px;
}

.currentCourse {
  border-radius: 25px;
  background-color: #fff;
  @include flex-j-a(start, center);
  box-shadow: 0px 8px 16px 0px rgba(75, 52, 37, 0.05);
  padding: 16px;
  margin-bottom: 12px;

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
      margin-top: 16px;
    }
  }
}
</style>
