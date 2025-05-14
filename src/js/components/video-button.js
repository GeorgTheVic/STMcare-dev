const videoPlayer = document.querySelector('.feedback__item'),
  video = videoPlayer.querySelector('.feedback__video'),
  button = videoPlayer.querySelector('.feedback__button'),
  texts = document.querySelector('.feedback__texts')

video.addEventListener('play', () => {
  texts.style.opacity = '0'
})

video.addEventListener('ended', () => {
  button.style.opacity = '1'

  texts.style.opacity = '1'
})

videoPlayer.addEventListener('click', () => {
  if (video.paused) {
    video.play()
    button.style.opacity = '0'
  } else {
    video.pause()
    button.style.opacity = '1'
  }
})