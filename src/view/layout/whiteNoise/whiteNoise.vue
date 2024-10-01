<template>
  <div class="whiteNoise">
    <Back :title="'Noise List'"
          class="back"
    />

    <div class="currentNoise">
      {{ currentNoise?.name }}
    </div>

    <div class="playTime">
      <CircleProgress :percentage="percentage"
                      @audioPlay="audioPlay"
                      :isPlaying="isPlaying"
      />
      <div> {{ formatTime(currentDuration - currentTime) }} </div>
    </div>

    <div class="currentCourse">
      <div class="icon">
        <van-icon size="24"
                  color="#926247"
                  @click="changeAudio"
                  name="play" />
      </div>

      <div class="info">
        <div class="course"> Next Course </div>
        <div class="noiseName"
             @click="isShowNoiseList = true"> {{ nextNoise?.name }} </div>
        <div class="time">
          <van-icon name="underway"
                    style="margin-right: 5px"
                    color="#fe814b"
          />
          <span> {{ nextNoise?.play_count }} </span>
        </div>
      </div>
    </div>

    <audio ref="audio"
           @end="onAudioEnded"
           @timeupdate="updateCurrentTime"
           @loadedmetadata="updateDuration"
    />

    <!-- noiseList -->
    <van-popup v-model="isShowNoiseList"
               position="bottom">
      <van-picker
        title="Choose White Noise"
        show-toolbar
        :columns="whiteNoiseList"
        value-key="name"
        confirm-button-text="confirm"
        cancel-button-text="cancel"
        @confirm="onNoiseConfirm"
        @cancel="onNoiseCancel"
      />
    </van-popup>
  </div>
</template>

<script>
import {getWhiteNoiseById, getWhiteNoiseList} from '@/api/white-noise'
import CircleProgress from '@/view/layout/whiteNoise/circle.vue'
import {Dialog, Toast} from 'vant'
import Back from '@/components/Back/index.vue'

export default {
  name: 'whiteNoise',
  components: {Back, CircleProgress},
  data() {
    return {
      whiteNoiseList: [],
      currentNoise: null,
      nextNoise: null,
      currentDuration: 0,
      currentTime: 0,
      isPlaying: false,
      isShowNoiseList: false
    }
  },
  computed: {
    percentage() {
      return this.currentTime/this.currentDuration
    }
  },
  methods: {
    async getWhiteNoise() {
      try {
        this.whiteNoiseList = (await getWhiteNoiseList()).data.whiteNoise

        this.currentNoise = this.whiteNoiseList[0]
        this.nextNoise = this.whiteNoiseList[1]
      } catch (e) {
        console.log(e)
      }

      if(this.currentNoise) {
        await this.whiteNoiseById(this.currentNoise.white_noise_id)
      }
    },
    async whiteNoiseById(id) {
      try {
        const media = (await getWhiteNoiseById(id)).data.whiteNoise.attachments[0].file_url
        // this.currentNoise.media = (await getWhiteNoiseById(id)).data.whiteNoise.attachments[0].file_url

        this.$refs.audio.src = media
      } catch (e) {
        console.log(e)
      }
    },
    onAudioEnded() {
      console.log('end')
    },
    updateDuration() {
      this.currentDuration = this.$refs.audio.duration
    },
    updateCurrentTime() {
      this.currentTime = this.$refs.audio.currentTime
    },
    audioPlay() {
      if(this.isPlaying) {
        this.$refs.audio.pause()
      } else {
        this.$refs.audio.play()
      }
      this.isPlaying = !this.isPlaying
    },
    formatTime(second) {
      return this.$moment.utc(second * 1000).format('mm:ss')
    },
    async changeAudio() {
      try {
        await Dialog.confirm({
          title: 'Are you sure you want to switch to white noise?',
          confirmButtonText: 'confirm',
          cancelButtonText: 'cancel'
        })
      } catch (e) {
        Toast('Switch Cancel')
        return
      }

      this.$refs.audio.pause()
      this.isPlaying = false
      this.currentNoise = this.nextNoise
      await this.whiteNoiseById(this.nextNoise.white_noise_id)
      this.currentDuration = 0
      this.currentTime = 0
      this.$refs.audio.load()
      this.nextNoise =  this.whiteNoiseList.length > this.nextNoise.white_noise_id ? this.whiteNoiseList[this.nextNoise.white_noise_id] : this.whiteNoiseList[0]
    },

    // noise picker
    onNoiseConfirm(value) {
      this.nextNoise = value
      this.isShowNoiseList = false
    },
    onNoiseCancel() {
      this.isShowNoiseList = false
    }
  },
  created() {
    this.getWhiteNoise()
  }
}
</script>


<style scoped lang="scss">
.back {
  position: fixed;
  top: 16px;
  left: 16px;
}

.whiteNoise {
  background-image: url('@/assets/picture/white-noise-background.png');
  background-color: #9bb068;
  background-repeat: repeat;
  background-position: center;
  background-size: 100% auto;
  height: 100vh;
  padding: 20% 0 10%;
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
