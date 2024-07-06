<template>
  <div class="container">
    <svg width="300"
         height="300"
         viewBox="0 0 300 300">
      <circle class="progress-circle-bg"
              cx="150"
              cy="150"
              r="100"
      />
      <circle class="progress-circle-progress"
              cx="150"
              cy="150"
              r="100"
              :stroke-dasharray="circumference"
              :stroke-dashoffset="offset"
      />

    </svg>

    <div class="button">
      <van-icon :name="btnName"
                size="50"
                style="margin-left: 10px"
      />
    </div>

  </div>
</template>

<script>
export default {
  name: 'circleProgress',
  data() {
    return {
      btnName: 'pause'
    }
  },
  props: {
    percentage: {
      type: Number,
      require: true
    }
  },
  computed: {
    circumference() {
      return 2 * Math.PI * 100
    },
    offset() {
      return this.circumference - (this.percentage / 100) * this.circumference
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
  stroke-width: 12;
}

.progress-circle-progress {
  fill: none;
  stroke: white;
  stroke-width: 12;
  stroke-linecap: round;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  transition: stroke-dashoffset 0.35s;
}
</style>