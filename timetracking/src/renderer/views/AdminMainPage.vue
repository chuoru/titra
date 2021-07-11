<template>
  <div class="capture" id="capture" draggable="false">
      <video></video>
    <button @click="onButtonClickEvent">Screenshot</button>
  </div>
</template>
<script>
import {getVideoSource} from '../services/ScreenshotService'
export default {
  data () {
    return {
    }
  },
  methods: {
    onButtonClickEvent (event) {
      getVideoSource()
    }
  }

}
</script>