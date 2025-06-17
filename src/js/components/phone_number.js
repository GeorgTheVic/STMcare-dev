const linksWhatsApp = document.querySelectorAll('.linkWhatsApp'),
  phoneNumber = '77002299803'

function clearHref(link) {
  link.href = ''
}

document.addEventListener('DOMContentLoaded', () => {

  let lastClick = 0
  linksWhatsApp.forEach(link => {
    link.addEventListener('click', () => {

      const now = Date.now()
      if (now - lastClick < 3000) {
        clearHref(link)
      } else {
        lastClick = now
        link.href = `https://wa.me/${phoneNumber}?text=Здравствуйте,%20пишу%20с%20сайта%20STMcare.`
      }

      setTimeout(clearHref, 1000, link)
    })
  })
})

