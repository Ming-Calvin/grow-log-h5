<template>
  <div>
    <van-nav-bar title="New Journal Entry"
                 @click-left="backRouter"
                 left-arrow/>

    <div class="container">
      <CustomForm :config="newJournalConfig"
                  :formData="formData"
                  :submit-btn="'Create Journal'"
                  @onSubmit="addJournal"
      >
        <template #emotion>
          <div class="emotion-selector">
            <div
              v-for="emotion in emotions"
              :key="emotion.value"
              :class="['emotionItem', emotion.value, { selected: emotion.value === selectedEmotion }]"
              @click="selectEmotion(emotion.value)"
            >
            </div>
          </div>
        </template>

        <template #file>
          <van-uploader
            :max-count="1"
            :after-read="afterRead"
            accept="image/*"
          />
        </template>
      </CustomForm>
    </div>
  </div>
</template>

<script>
import {newJournalConfig} from '@/forms/loginForm'
import {addJournal} from '@/api/journal'
import {Toast} from 'vant'

export default {
  name: 'newJournal',
  data() {
    return {
      newJournalConfig: newJournalConfig,
      formData: newJournalConfig.reduce((acc, cur) => {
        if(cur.type === 'checkboxGroup' || cur.type === 'uploader') {
          acc[cur.prop]  = []
        } else {
          acc[cur.prop]  = ''
        }

        return acc
      }, {}),
      emotions: [
        {
          value: 'sad',
          label: 'Sad'
        },
        {
          value: 'unhappy',
          label: 'Unhappy'
        },
        {
          value: 'neutral',
          label: 'Neutral'
        },
        {
          value: 'happy',
          label: 'Happy'
        },
        {
          value: 'overjoyed',
          label: 'Overjoyed'
        }
      ],
      selectedEmotion: 'sad',
      // 附件
      file: []
    }
  },
  methods: {
    selectEmotion(emo) {
      this.selectedEmotion = emo
    },
    async addJournal(data) {
      data.mood = this.selectedEmotion
      data.file = this.file

      try {
        const res = await addJournal(data)

        if(res.code == 200) {
          Toast('Add Journal Success')
          this.$router.push({ name: 'journaList' })
        } else {
          Toast('Add Journal Fail')
        }
      } catch (e) {
        console.log(e)
      }
    },
    backRouter() {
      this.$router.push({ name: 'journaList' })
    },
    afterRead(file) {
      this.file = file.file
    }
  }
}
</script>

<style scoped lang="scss">
::v-deep .van-nav-bar {
  background-color: #f7f4f2;
  color: #4B3425;
  font-family: Urbanist;

  .van-icon {
    color: #4B3425;
  }
}

.container {
  width: 100%;
  height: calc(100vh - 48px);
  background-color: #f7f4f2;
  font-family: Urbanist;
}

.emotion-selector {
  width: 100%;
  @include flex-j-a(space-between, center);

  .emotionItem {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 4px solid transparent;
    background-repeat: no-repeat;
    background-size: 64px 64px;
    background-position: center center;
    box-sizing: content-box;
  }

  .sad {
    background-image: url('@/assets/picture/sad.png');
  }

  .unhappy {
    background-image: url('@/assets/picture/unhappy.png');
  }

  .neutral {
    background-image: url('@/assets/picture/neutral.png');
  }

  .happy {
    background-image: url('@/assets/picture/happy.png');
  }

  .overjoyed {
    background-image: url('@/assets/picture/overjoyed.png');
  }

  .selected {
    border: 4px solid #e1dbf5;
    box-sizing: content-box;
  }

}

</style>
