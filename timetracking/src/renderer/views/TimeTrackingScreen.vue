<template>
  <div class="time-tracking-body">
    <span />
    <TimeDuration :timeIn="timeIn" :timeOut="timeOut" />
    <div class="button-clock">
      <Button
        :buttonClass="'md-raised md-primary button-layout'"
        :buttonTitle="'employeeSite.btnClockIn'"
        @on-click="onClickClockInBtn"
        :disable="isClockInDisable"
      />
      <Button
        :buttonClass="'md-accent md-raised button-layout'"
        :buttonTitle="'employeeSite.btnClockOut'"
        @on-click="onClickClockOutBtn"
        :disable="isClockOutDisable"
      />
    </div>
    <!-- <div class="notification-modal">
      <Notification
        :notiHeaderBgColor="notiType"
        :notiTitle="notiTitle"
        :notiBody="notiBody"
        :okButtonOnly="false"
        :onClickOkButton="onClickOkButton"
        :onClickCancelButton="onClickCancelButton"
      /> -->
    <!-- </div> -->
  </div>
</template>


<script>
/* eslint-disable no-unused-vars */
import TimeDuration from '../components/TimeDuration.vue'
import Button from '../components/Button.vue'
import moment from 'moment'
// import Notification from "../../../components/Notification/Notification.vue";
const DATEFORMAT = 'YYYY-MM-DD'
const TIMEFORMAT = 'HH:mm:ss'
const CLOCKIN = 'isCheckIn'
const CLOCKOUT = 'isCheckOut'
export default {
  name: 'TimeTrackingScreen',
  //   components: { TimeDuration, Button, Notification },
  components: { TimeDuration, Button },
  data () {
    return {
      clockIn: '',
      clockOut: '',
      timeIn: '',
      timeOut: '',
      registeredDateInfo: '',
      notiTitle: '',
      notiBody: '',
      notiType: '',
      registerTime: '',
      isClockInDisable: false,
      isClockOutDisable: true,
      mode: ''
    }
  },
  methods: {
    onClickClockInBtn () {
      this.mode = CLOCKIN
      this.clockIn = moment(new Date())
      this.registerTime = this.clockIn
      this.$bvModal.show('modal-center')
      //   this.notiTitle = this.$t('general.notifications.clockInConfirm.title')
      //   this.notiBody =
      //     this.$t('general.notifications.clockInConfirm.body') +
      //     this.clockIn.format(TIMEFORMAT)
      this.notiType = 'primary'
      this.isClockInDisable = true
      this.isClockOutDisable = false
    },
    onClickClockOutBtn () {
      this.mode = CLOCKOUT
      this.clockOut = moment(new Date())
      this.registerTime = this.clockOut
      this.$bvModal.show('modal-center')
      //   this.notiTitle = this.$t("general.notifications.clockOutConfirm.title");
      //   this.notiBody =
      //     this.$t("general.notifications.clockOutConfirm.body") +
      //     this.clockOut.format(TIMEFORMAT);
      this.notiType = 'primary'
      this.isClockOutDisable = true
    },
    onClickOkButton () {
      let registerTime = this.registerTime.format(TIMEFORMAT)
      let registerDate = this.registerTime.format(DATEFORMAT)
      /**
       * TODO:
       * if this.mode = CLOCKIN call POST with (registerTime as clockIn and registerDate as workDate in new record)
       * if this.mode = CLOCKOUT call PUT in record has same registerDate with registerTime as clockOut
       * image record
       * {
       *      workDate: "2021-01-01",
       *      clockIn: "09:00:00",
       *      clockOut: "18:00:00"
       * }
       */
      if (this.mode === CLOCKIN) {
        let registerClockInInfo = {
          workDate: registerDate,
          clockIn: registerTime
        }
        this.timeIn = registerTime
        // POST
      }
      if (this.mode === CLOCKOUT) {
        let registerClockOutInfo = {
          workDate: registerDate,
          clockOut: registerTime
        }
        this.timeOut = registerTime
        // PUT
      }
      this.$bvModal.hide('modal-center')
    },
    onClickCancelButton () {
      this.$bvModal.hide('modal-center')
      if (this.mode === CLOCKIN) {
        this.isClockInDisable = false
        this.isClockOutDisable = true
        this.timeIn = ''
      }
      if (this.mode === CLOCKOUT) {
        this.isClockOutDisable = false
        this.timeOut = ''
      }
    },
    getWorkHistoryInfo (date) {
      /**
       * TODO:
       * for call API (GET registeredInfo with params date) when ever access to this page
       * for check clockIn or clockOut data is existing or not
       * if in date: existed clockIn data → disabled clockIn if not, enable clockIn, disable clockOut
       *              existed clockOut data → disabled clockOut
       */
    }
  },
  mounted () {
    let searchDate = moment(new Date()).format(DATEFORMAT)
    this.getWorkHistoryInfo(searchDate)
  }
}
</script>

<style scoped>
.time-tracking-body {
  height: 85vh;
  width: 100%;
  display: grid;
  grid-template-rows: 10% 60% 20%;
}
.button-clock .md-raised {
  width: 15vw;
  height: 5vw;
  font-size: 1.5vw;
  border-radius: 100px;
}
</style>