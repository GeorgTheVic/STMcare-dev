const videoPlayer_list = document.querySelectorAll('.feedback__item'),
  video_list = document.querySelectorAll('.feedback__video'),
  button_list = document.querySelectorAll('.feedback__button'),
  text_list = document.querySelectorAll('.feedback__texts')

video_list.forEach((video) => {
  video.addEventListener('play', (e) => {
    video.nextElementSibling.nextElementSibling.style.opacity = '0'
  })
})

video_list.forEach((video) => {
  video.addEventListener('ended', () => {
    video.nextElementSibling.style.opacity = '1'

    video.nextElementSibling.nextElementSibling.style.opacity = '1'
  })
})

videoPlayer_list.forEach((videoPlayer) => {
  videoPlayer.addEventListener('click', () => {
    if (videoPlayer.firstElementChild.paused) {
      videoPlayer.firstElementChild.play()
      videoPlayer.firstElementChild.nextElementSibling.style.opacity = '0'
    } else {
      videoPlayer.firstElementChild.pause()
      videoPlayer.firstElementChild.nextElementSibling.style.opacity = '1'
    }
  })
})