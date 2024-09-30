<template>
  <div>
    <!-- 头部 -->
    <div class="header">
      <Back :title="'Articles'"></Back>

      <div class="title">
        {{ diary.title }}
      </div>

      <div class="status">
        <!-- 点赞数 -->
        <div class="like">
          <svg-icon icon="like"/>
          {{ diary.like_count }}
        </div>

        <!-- 评论数 -->
        <div class="view">
          <svg-icon icon="view"/>
          {{ diary.view_count }}
        </div>
      </div>

      <div>
        <div class="user">
          <div class="profile"></div>
          <div class="name"> Author: {{ username }}</div>
        </div>

        <div class="button">

        </div>
      </div>
    </div>

    <!-- 内容 -->
    <div class="content">
      {{ diary.content }}
    </div>

    <div class="diaryPic">
      <img :src="diary.attachments[0].file_url"
           class="picture"
      >
    </div>

  </div>
</template>

<script>
import {getDiaryEntryById} from '@/api/journal'
import {mapState} from 'vuex'
import Back from '@/components/Back/index.vue'

export default {
  name: 'journalDetail',
  components: {Back},
  data() {
    return {
      diary: {}
    }
  },
  computed: {
    ...mapState({
      username: (state) => state.user.username
    })
  },
  methods: {
    async getDiaryEntry() {
      this.diary = (await getDiaryEntryById(this.$route.query.id)).data.diary
    }
  },
  created() {
    this.getDiaryEntry()
  }
}

</script>

<style scoped lang="scss">
.header {
  background-color: #4b3425;
  border-radius: 0 0 30px 30px;
  font-size: 36px;
  font-family: Urbanist;
  color: #FFFFFF;
  padding: 16px;

  .title {
    font-size: 36px;
    font-weight: 800;
    line-height: 36px;
    margin-bottom: 16px;
  }

  .status {
    @include flex-j-a(start, center);
    font-size: 16px;
    margin-bottom: 24px;

    .like {
      margin-right: 18px;
    }
  }

  .user {
    font-size: 20px;
    font-weight: 600;
  }
}

.content {
  padding: 16px;
  font-size: 16px;
  color: #6d6661;
  font-family: Urbanist;
}

.diaryPic {
  padding: 16px;

  .picture {
    border-radius: 16px;
    width: 100%;
    height: auto;
  }
}
</style>
