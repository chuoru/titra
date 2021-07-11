import { connect } from './MqttService'
const { desktopCapturer } = require('electron')

export function getVideoSource () {
  desktopCapturer.getSources({ types: ['window', 'screen'] }).then(async sources => {
    for (const source of sources) {
      console.log(source)
      if (source.name === 'Screen 1') {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({
            audio: false,
            video: {
              mandatory: {
                chromeMediaSource: 'desktop',
                chromeMediaSourceId: source.id,
                minWidth: 1280,
                maxWidth: 1280,
                minHeight: 720,
                maxHeight: 720
              }
            }
          })
          handleStream(stream)
          connect()
        } catch (e) {
          handleError(e)
        }
        return
      }
    }
  })
}

function handleStream (stream) {
  const video = document.querySelector('video')
  const canvas = document.createElement('canvas')
  var ctx = canvas.getContext('2d')
  video.srcObject = stream
  video.onloadedmetadata = (e) => {
    video.play()
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
    const data = canvas.toDataURL('image/png')
    localStorage.setItem('screenshot', data)
  }
}

function handleError (e) {
  console.log(e)
}
