const footerMail = document.querySelector('.footer__mail'),
  footerPhone = document.querySelector('.footer__phone'),
  phoneNumber = 'tel:+77002299803',
  mail = 'mailto:stmcare@gmail.com'

function clearHref(link) {
  link.href = ''
}

document.addEventListener('DOMContentLoaded', () => {

  let lastClick = 0

  footerMail.addEventListener('click', () => {

    const now = Date.now()
    if (now - lastClick < 3000) {
      clearHref(footerMail)
    } else {
      lastClick = now
      footerMail.href = `${mail}`
    }

    setTimeout(clearHref, 1000, footerMail)
  })

  footerPhone.addEventListener('click', () => {

    const now = Date.now()
    if (now - lastClick < 3000) {
      clearHref(footerPhone)
    } else {
      lastClick = now
      footerPhone.href = `${phoneNumber}`
    }

    setTimeout(clearHref, 1000, footerPhone)
  })

})

