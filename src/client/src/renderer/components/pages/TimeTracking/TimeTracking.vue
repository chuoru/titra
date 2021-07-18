<template>
  <div class="time-tracking-body">
    <span />
    <TimeDuration :timeIn="timeIn" :timeOut="timeOut" />
    <div class="button-clock">
      <Button
        :buttonClass="'md-raised md-primary button-layout'"
        :buttonTitle="$t('employeeSite.btnClockIn')"
        @on-click="onClickClockInBtn"
        :disable="isClockInDisable"
      />
      <Button
        :buttonClass="'md-accent md-raised button-layout'"
        :buttonTitle="$t('employeeSite.btnClockOut')"
        @on-click="onClickClockOutBtn"
        :disable="isClockOutDisable"
      />
    </div>
    <div class="notification-modal">
      <Notification
        :notiHeaderBgColor="notiType"
        :notiTitle="notiTitle"
        :notiBody="notiBody"
        :okButtonOnly="false"
        :onClickOkButton="onClickOkButton"
        :onClickCancelButton="onClickCancelButton"
      />
    </div>
  </div>
</template>

<script src="./TimeTracking.js"></script>
<style src="./TimeTracking.css"></style>