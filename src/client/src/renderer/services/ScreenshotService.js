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
      for (const source of sources) {
        let sourceType = source.split(':')[0]
        mediaConfig.mandatory.chromeMediaSourceId = source.id
        try {
          const stream = await navigator
            .mediaDevices
            .getUserMedia(mediaConfig)
          handleStream(stream, sourceType)
        } catch (e) {
          handleError(e)
        }
        return
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
    console.log(data)
    localStorage.setItem('screenshot', data)
  }
}

function handleError (e) {
  console.log(e)
}
