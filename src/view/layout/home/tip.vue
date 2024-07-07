<template>
  <div class="tip">
    <div class="title"> Mental Tips </div>

    <van-cell-group inset>
      <van-cell v-for="(tip, index) in tips"
                :key="index"
                :title="tip.title"
                :label="tip.label" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'tip',
  data() {
    return {
      tips: [
        { title: 'Practice Mindfulness', label: 'Take time each day to be present in the moment. Mindfulness can help reduce stress and improve overall mental well-being.' },
        { title: 'Stay Active', label: 'Regular physical activity can improve your mood and reduce anxiety and depression. Aim for at least 30 minutes of exercise most days.' },
        { title: 'Connect with Others', label: 'Maintain strong relationships with friends and family. Social support is crucial for mental health.' },
        { title: 'Get Enough Sleep', label: 'Prioritize sleep to ensure you get 7-9 hours each night. Good sleep is essential for both mental and physical health.' },
        { title: 'Eat a Balanced Diet', label: 'Nutrition can affect your mood and energy levels. Aim to eat a variety of healthy foods, including fruits, vegetables, lean proteins, and whole grains.' },
        { title: 'Seek Professional Help', label: 'If you\'re feeling overwhelmed or struggling with mental health issues, don\'t hesitate to seek help from a mental health professional.' },
        { title: 'Set Realistic Goals', label: 'Break down tasks into manageable steps and celebrate small achievements. This can help reduce feelings of overwhelm and boost confidence.' },
        { title: 'Take Breaks', label: 'Regular breaks throughout the day can help reduce stress and prevent burnout. Spend a few minutes each hour to relax and recharge.' },
        { title: 'Practice Gratitude', label: 'Spend a few minutes each day reflecting on things you\'re grateful for. This practice can help shift your focus to the positive aspects of your life.' },
        { title: 'Limit Alcohol and Avoid Drugs', label: 'Substance abuse can worsen mental health issues. If you drink, do so in moderation, and avoid using drugs.' }
      ]
    }
  }
}
</script>


<style scoped lang="scss">
.tip {
  margin-top: 32px;
  padding: 0 16px 80px;

  .title {
    font-size: 20px;
    margin-bottom: 12px;
  }

  .van-cell__title {
    padding: 20px;
    font-family: Urbanist;
    font-weight: 600;
    font-size: 20px;

    .van-cell__label {
      font-weight: 200;
      margin-top: 12px;
    }
  }
}
</style>