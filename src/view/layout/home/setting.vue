<template>
  <div class="setting">
    <div class="title"> General Settings </div>
    <div class="settingList">
      <div class="settingItem"
           v-for="(item, index) in settingList"
           @click="onSet(item)"
           :key="index">

        <div class="leftContent">
          <div class="icon">
            <van-icon :name="item.icon"
                      size="24"
                      color="#4b3425"/>
          </div>

          <div> {{ item.name }}</div>
        </div>

        <van-icon name="arrow" />
      </div>
    </div>

    <div class="title"> Log Out </div>
    <div class="settingList">
      <div class="settingItem">
        <div class="leftContent">
          <div class="icon">
            <van-icon name="revoke"
                      size="24"
                      color="#4b3425"/>
          </div>

          <div> Log Out </div>
        </div>
        <van-icon name="arrow" />
      </div>
    </div>

    <div class="title"> Danger Zone </div>
    <div class="settingList">
      <div class="settingItem warn">
        <div class="leftContent">
          <div class="icon warn">
            <van-icon name="warn-o"
                      size="24"
                      color="#ffffff"/>
          </div>

          <div> Close Account </div>
        </div>
        <van-icon name="arrow" />
      </div>
    </div>
    
    <van-share-sheet
      v-model="showShare"
      title="ShareSheet"
      :options="shareOptions"
      @select="onShare"
    />
  </div>
</template>

<script>
export default {
  name: 'setting',
  data() {
    return {
      settingList: [
        {
          icon: 'manager-o',
          name: 'Personal Information',
          value: 'person'
        },
        {
          icon: 'link-o',
          name: 'Invite Friends',
          value: 'invite'
        }
      ],
      showShare: false,
      shareOptions: [
        { name: '复制链接', icon: 'link' }
      ]
    }
  },
  methods: {
    // 设置
    onSet(item) {
      switch(item.value) {
      case 'invite':
        this.invite()
        break
      }
    },
    // 邀请
    invite() {
      this.showShare = true
    }
  }
}

</script>

<style scoped lang="scss">
.setting {
  margin-top: 32px;
  padding: 0 16px 80px;

  .title {
    font-size: 20px;
    margin-bottom: 12px;
  }

  .settingList {
    margin-bottom: 40px;

    .settingItem {
      @include flex-j-a(space-between, center);
      padding: 12px;
      background-color: #ffffff;
      border-radius: 20px;
      font-family: Urbanist;
      margin-bottom: 10px;
    }

    .warn {
      background-color: #ffd2c2;
      color: #fe9569;
    }

    .leftContent {
      @include flex-j-a(start, center);

      .icon {
        width: 48px;
        height: 48px;
        @include flex-j-a(center, center);
        background-color: #f7f4f2;
        border-radius: 10px;
        margin-right: 8px;
      }

      .warn {
        background-color: #fe814b;
      }
    }
  }
}
</style>
