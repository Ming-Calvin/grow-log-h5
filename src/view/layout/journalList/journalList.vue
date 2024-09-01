<template>
  <div class="journalList">
    <div>
      <div class="day-year"> {{ journalList.length }}/365 </div>
      <div class="tip"> Journals this year. Keep it Up!</div>
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
               :class="['day', { 'hasWrite': hasWrite.includes(String(day)) }]">
            <div class="circle">
              {{ day }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getJournalList} from '@/api/journal'
import moment from 'moment/moment'

export default {
  name: 'journalList',
  data() {
    return {
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
      journalList: [],
      hasWrite: []
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

    },
    uniqueDays(array) {
      const days = array.map(entry => moment(entry.createdAt).format('D'))
      return [...new Set(days)]
    }
  },
  created() {
    // this.getList()
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
</style>