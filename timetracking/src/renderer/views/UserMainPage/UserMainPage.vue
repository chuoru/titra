<template>
<div class="user-main-page">
      <TimeTracking/>
</div>
</template>
<script>
import TimeTracking from '../../components/pages/TimeTracking/TimeTracking.vue'
export default {
  name: 'UserMainPage',
  components: { TimeTracking },
  data () {
    return {
    }
  }
}
</script>
<style scoped>
.user-main-page {
    margin: auto;
}
</style>
