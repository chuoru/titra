<template>
  <div class="time-duration-container">
    <label class="date-layout">{{ date }}</label>
    <label class="time-layout">{{ time }}</label>
    <span />
    <div class="time-info-area">
      <label class="time-info-layout">Check in time : {{ timeIn }}</label>
      <span />
      <label class="time-info-layout">Check out time : {{ timeOut }} </label>
    </div>
  </div>
</template>

<script>
const ONESECOND = 1000
const LANGUAGE = 'en-GB'
export default {
  name: 'TimeDuration',
  props: ['timeIn', 'timeOut'],
  data () {
    return {
      interval: null,
      time: null,
      date: null
    }
  },
  beforeDestroy () {
    // prevent memory leak
    clearInterval(this.interval)
  },
  created () {
    // update the time every second
    this.interval = setInterval(() => {
      // Concise way to format time according to system locale.
      // In my case this returns "3:48:00 am"
      this.time = Intl.DateTimeFormat(LANGUAGE, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }).format()
      this.date = Intl.DateTimeFormat(LANGUAGE, {
        dateStyle: 'long'
      }).format()
    }, ONESECOND)
  }
}
</script>

<style scoped>
.time-layout {
  font-size: 8vw;
  margin-top: 0vh;
  color: #2196f3;
  font-weight: 900;
}

.date-layout {
  font-size: 3vw;
  margin-top: 2vh;
  color: #0d47a1;
  text-transform: uppercase;
  font-weight: 900;
}

.time-info-area {
  text-align: left;
  display: grid;
  grid-template-columns: 45% 10% 45%;
  margin-left: 40px;
}

.time-info-layout {
  font-size: 2.5vh;
  margin-top: 0vh;
  color: #0d47a1;
  text-align: left;
  font-weight: 700;
}

.time-duration-container {
  display: grid;
  grid-template-rows: 17% 38% 5% 10%;
  align-items: center;
  justify-content: center;
}
</style>