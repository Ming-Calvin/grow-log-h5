<template>
  <div class="header">
    <div class="time"> <van-icon name="tosend" /> {{ currentTime }} </div>

    <div class="userInfo">
      <!--profile phone-->
      <div class="profile">
      </div>

      <div class="userList">
        <div class="username">
          Hi, {{ username }}
        </div>

        <div class="info">
          <div class="member">
            <van-icon name="star"
                      color="#9BB068"/> Pro Member
          </div>

          <div class="mood">
            <van-icon name="smile-comment"
                      color="#FFCE5C"/> Happy
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {mapState} from 'vuex'
import moment from 'moment/moment'

export default {
  name: 'homeHeader',
  data() {
    return {

    }
  },
  computed: {
    ...mapState({
      username: (state) => state.user.username
    }),
    currentTime() {
      return moment(new Date()).format('ddd, DD MMM YYYY')
    }
  }
}

</script>

<style scoped lang="scss">
@import "@/styles/mixins";

.header {
  width: 100%;
  border-radius: 0 0 40px 40px ;
  background-color: #fff;
  padding: 16px;

  .time {
    font-size: 14px;
    padding-bottom: 14px;
  }

  .userInfo {
    margin-top: 12px;
    @include flex-j-a(start, center);

    .profile {
      width: 72px;
      height: 72px;
      border-radius: 50%;
      border: 8px solid #d5c2b9;
      background-color: #f2eee3;
      box-sizing: border-box;
      margin-right: 12px;
    }

    .username {
      font-size: 30px;
      margin-bottom: 8px;
    }

    .userList {
      .info {
        @include flex-j-a(start, center);

        .member {
          background-color: #f2f5eb;
          padding: 4px 8px;
          border-radius: 20px;
          margin-right: 12px;
        }
      }
    }
  }
}
</style>
