<template>
  <div class="container">
    <svg width="280"
         height="280"
         viewBox="0 0 280 280">
      <circle class="progress-circle-bg"
              cx="140"
              cy="140"
              r="90"
      />
      <circle class="progress-circle-progress"
              cx="140"
              cy="140"
              r="90"
              :stroke-dasharray="circumference"
              :stroke-dashoffset="offset"
      />

    </svg>

    <div class="button">
      <van-icon :name="btnName"
                size="50"
                style="margin-left: 10px"
                @click="audioPlay"
      />
    </div>

  </div>
</template>

<script>
export default {
  name: 'circleProgress',
  data() {
    return {
    }
  },
  props: {
    percentage: {
      type: Number,
      require: true
    },
    isPlaying: {
      type: Boolean,
      require: true
    }
  },
  computed: {
    circumference() {
      return 2 * Math.PI * 90
    },
    offset() {
      return this.circumference - this.percentage * this.circumference
    },
    btnName() {
      if(this.isPlaying) {
        return 'pause'
      } else {
        return 'play'
      }
    }
  },
  methods: {
    audioPlay() {
      this.$emit('audioPlay')
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  position: relative;
}

.button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
}

.progress-circle {
  display: flex;
  justify-content: center;
  align-items: center;
}

.progress-circle-bg {
  fill: none;
  stroke: rgba(255, 255, 255, 0.2);
  stroke-width: 15;
}

.progress-circle-progress {
  fill: none;
  stroke: white;
  stroke-width: 15;
  stroke-linecap: round;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  transition: stroke-dashoffset 0.35s;
}
</style>