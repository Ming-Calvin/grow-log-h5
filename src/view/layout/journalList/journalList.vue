<template>
  <div class="journalList">
    <div>
      <div class="day-year"> {{ journalList.length }}/30 </div>
      <div class="tip"> Journals this month. Keep it Up!</div>
    </div>

    <div class="list">
      <div class="shape">
        <div class="add"
             @click="addJournal">
          <van-icon name="plus" />
        </div>
      </div>

      <div class="history">
        <div class="title"> Journal History </div>

        <div class="calendar">
          <div v-for="(day, index) in daysInMonth"
               :key="index"
               @click="chooseJournalDay(day)"
               :class="['day', { 'hasWrite': hasWrite.includes(day) }]">
            <div class="circle">
              {{ day }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <van-popup v-model="isChooseShow"
               class="chooseJournal">
      <div class="title"> Please pick the journal you want to read! </div>

      <div class="chooseList">
        <div v-for="(item, index) in chooseList"
             :key="index"
             class="chooseItem"
             @click="toJournalDetail(item.id)"
        >
          {{ index + 1 }} . {{ item.title }}
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import {getDiaryDatesByMonth, getDiaryEntriesByDate} from '@/api/journal'
import moment from 'moment/moment'

export default {
  name: 'journalList',
  data() {
    return {
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
      journalList: [],
      hasWrite: [],
      // chose day's journal
      chooseList: [],
      isChooseShow: false
    }
  },
  computed: {
    daysInMonth() {
      const date = new Date(this.year, this.month + 1, 0)
      const days = []
      for (let i = 1; i <= date.getDate(); i++) {
        days.push(i)
      }

      return days
    }
  },
  methods: {
    addJournal() {
      this.$router.push({ name: 'newJournal' })
    },
    async getList() {
      // 格式化时间
      const date = this.$moment(new Date()).format('YYYY-MM')

      // 获取日志数组
      let journalList = (await getDiaryDatesByMonth({date})).data.diaryList

      this.hasWrite = journalList.map(item => {
        return new Date(item).getDate()
      })
    },
    async chooseJournalDay(day) {
      const currentDate = new Date()
      const year = currentDate.getFullYear()
      const month = currentDate.getMonth()

      // 获取当月指定天数的日期
      const targetDate = this.$moment(new Date(year, month, day)).format('YYYY-MM-DD')

      let params = {
        startDate: targetDate,
        endDate: targetDate
      }

      this.chooseList = (await getDiaryEntriesByDate(params)).data.diary

      this.isChooseShow = true
    },
    toJournalDetail(id) {
      this.$router.push({ name: 'journalDetail', query: { id } })
    }
  },
  created() {
    this.getList()
  }
}

</script>

<style scoped lang="scss">
.journalList {
  background-image: url('@/assets/picture/journal-list-background.png');
  background-color: #926247;
  background-repeat: repeat;
  background-position: center;
  background-size: 100% auto;
  height: 100vh;
  padding: 10% 0 0;
  margin: 0;
  @include flex-j-a(space-around, center);
  flex-direction: column;
}

.day-year {
  font-family: Urbanist;
  font-size: 72px;
  font-weight: 800;
  line-height: 80px;
  letter-spacing: 0.05em;
  color: #FFFFFF;
  margin-bottom: 12px;
  text-align: center;
}

.tip {
  font-family: Urbanist;
  font-size: 20px;
  color: #FFFFFF;
}

.list {
  width: 100%;
  height: 50vh;
  background-color: transparent;
  position: relative;
  margin-bottom: 30px;

  .shape {
    width: 100%;
    height: 50px;
    background-color: #fff;
    border-top-left-radius: 100% 100%;
    border-top-right-radius: 100% 100%;
  }

  .add {
    width: 80px;
    height: 80px;
    background: #4B3425;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #ffffff;
    @include flex-j-a(center, center);
    font-size: 28px;
  }

  .history {
    height: 100%;
    background-color: #fff;
    padding: 10px;

    .title {
      font-family: Urbanist;
      font-size: 20px;
      margin-bottom: 20px;
    }

    .calendar {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 10px;
      argin: auto;

      .day {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .circle {
        width: 40px;
        height: 40px;
        border: 1px solid #ccc;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
      }

      .hasWrite {
        .circle {
          background-color: #926247;
          color: #fafafa;
        }
      }
    }
  }
}

.chooseJournal {
  width: 80%;
  height: 50%;
  padding: 20px;
  border-radius: 20px;

  .title {
    font-family: Urbanist;
    font-size: 16px;
  }

  .chooseList {
    font-family: Urbanist;
    font-size: 14px;
    margin-top: 20px;

    .chooseItem {
      background-color: #f7f4f2;
      padding: 5px;
      border-radius: 20px;
      margin-bottom: 5px;
      color: #4B3425;
      text-indent: 1em;
    }

    .chooseItem:hover {
      background-color: #926247;
      color: #ffffff;
    }
  }
}


</style>
