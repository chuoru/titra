const { desktopCapturer } = require('electron')

const mediaConfig = {
  audio: false,
  video: {
    mandatory: {
      chromeMediaSource: 'desktop',
      chromeMediaSourceId: '',
      minWidth: 1280,
      maxWidth: 1280,
      minHeight: 720,
      maxHeight: 720
    }
  }
}

export function getVideoSource () {
  desktopCapturer
    .getSources({ types: ['window', 'screen'] })
    .then(async sources => {
      for (let index = 0; index < sources.length; index++) {
        mediaConfig.video.mandatory.chromeMediaSourceId = sources[index].id
        try {
          const stream = await navigator
            .mediaDevices
            .getUserMedia(mediaConfig)
          handleStream(stream, index)
        } catch (e) {
          handleError(e)
          console.log(e)
        }
      }
    })
}

function handleStream (stream, index) {
  var video = document.createElement('video')
  var canvas = document.createElement('canvas')
  var ctx = canvas.getContext('2d')
  video.srcObject = stream
  console.log({inHandleStream: stream})
  video.onloadeddata = (e) => {
    console.log(e)
    try {
      video.play()
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
      const data = canvas.toDataURL('image/png')
      console.log(stream)
      localStorage.setItem('screenshot', data)
    } catch (e) {
      handleError(e)
    }
  }
}

function handleError (e) {
  console.log(e)
}
