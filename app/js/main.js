const menuItem = document.querySelectorAll('.nav-item')
const borderLine = document.querySelectorAll('.border-line')

const portfolioItem = document.querySelectorAll('.grid-content__images')
const portfolioItemImg = document.querySelectorAll('.grid-content__img')

const fotorama = document.querySelector('.fotorama')
const pogination = document.querySelector('.pogination')

const fotoramaDiv = $('#fotorama').fotorama()
const fotoramaData = fotoramaDiv.data('fotorama')

const modalFotorama = document.querySelector('.modal')
const closeBtn = document.querySelector('.close')
const share = document.querySelector('.link')
const shareClose = document.querySelector('.share-close')
const shareModal = document.querySelector('.share-link')

const copyLink = document.querySelector('.copy-link')
const shareTelegram = document.querySelector('.shere-telegram')
const shareInstagram = document.querySelector('.shere-instagram')
const shareFacebock = document.querySelector('.shere-facebock')
const shareVk = document.querySelector('.shere-vk')

const burgerMenuWrap = document.querySelector('.menu-wrapper')
const burgerMenuWrapPortfolio = document.querySelector(
  '.menu-wrapper--portfolio'
)
const burgerMenu = document.querySelector('.hamburger-menu')
const menuItemMobail = document.querySelectorAll('.nav-item--mobail')
const menuMobail = document.querySelector('.menu-mobail')
const hamburgerMenu = document.querySelector('.hamburger-menu')
const body = document.querySelector('body')

let indexImg = 0

function render() {
  pogination ? (pogination.textContent = `1/${portfolioItemImg.length}`) : ''
  menuItem.forEach((item) => {
    item.addEventListener('click', setItem)
  })

  burgerMenuWrap &&
    burgerMenuWrap.addEventListener('click', () => {
      menuItemMobail.forEach((value) =>
        value.classList.toggle('menu__item--active')
      )
      burgerMenu.classList.toggle('animate')
      menuMobail.classList.toggle('menu-mobail--active')
      hamburgerMenu.classList.toggle('hamburger-menu--active')
      if (body.classList.contains('open-menu')) {
        body.classList.remove('open-menu')
      } else {
        body.classList.add('open-menu')
      }
    })

  burgerMenuWrapPortfolio &&
    burgerMenuWrapPortfolio.addEventListener('click', () => {
      menuItemMobail.forEach((value) =>
        value.classList.toggle('menu__item--active')
      )
      burgerMenu.classList.toggle('animate')
      menuMobail.classList.toggle('menu-mobail--active')
      body.classList.toggle('open-menu')
    })

  portfolioItem.forEach((item) => {
    item.addEventListener('click', openPortfolioItemTwo)
  })

  closeBtn &&
    closeBtn.addEventListener('click', () => {
      modalFotorama.classList.remove('modalShow')
      body.classList.remove('open-menu')
    })

  shareClose &&
    shareClose.addEventListener('click', (e) => {
      e.stopPropagation()
      shareModal.classList.remove('share-link--active')
    })

  share &&
    share.addEventListener('click', (e) => {
      e.stopPropagation()
      shareModal.classList.add('share-link--active')
    })

  shareTelegram &&
    shareTelegram.addEventListener('click', (e) => {
      e.stopPropagation()
      URLShare('https://t.me/share/url?url=')
    })

  shareVk &&
    shareVk.addEventListener('click', (e) => {
      e.stopPropagation()
      URLShare('https://vk.com/share.php?url=')
    })

  shareFacebock &&
    shareFacebock.addEventListener('click', (e) => {
      e.stopPropagation()
      URLShare(
        'https://www.facebook.com/dialog/share?app_id=145634995501895&display=popup&redirect_uri=https%3A%2F%2Fdevelopers.facebook.com%2Ftools%2Fexplorer&href='
      )
    })

  copyLink &&
    copyLink.addEventListener('click', (e) => {
      e.stopPropagation()
      const url = window.location.host
      const activeNode = document.querySelector('.fotorama__active > img')
      const src = activeNode.getAttribute('src')
      navigator.clipboard
        .writeText(`${url}/${src}`)
        .then(() => console.log('Done!'))
        .catch((err) => console.error(err))
      shareModal.classList.remove('share-link--active')
    })

  fotorama && fotorama.addEventListener('click', getIdPhoto)

  function setItem(e) {
    const curTarget = e.currentTarget
    menuItem.forEach((item) => item.classList.remove('nav-item--active'))
    curTarget.classList.add('nav-item--active')
    curTarget.classList.remove('border-line')
  }

  function openPortfolioItem(e) {
    const tabTarget = e.target
    const idImages = tabTarget.getAttribute('id')
    indexImg = idImages
    pogination.textContent = `${Number(indexImg) + 1}/${
      portfolioItemImg.length
    }`
  }

  function openPortfolioItemTwo(e) {
    openPortfolioItem(e)
    fotoramaData.show(Number(indexImg))
    modalFotorama.classList.add('modalShow')
    body.classList.add('open-menu')
  }

  function URLShare(urlSocial) {
    const url = window.location.host
    const activeNode = document.querySelector('.fotorama__active > img')
    const src = activeNode.getAttribute('src')
    window.open(`${urlSocial}${url}/${src}`, '_blank')
    shareModal.classList.remove('share-link--active')
  }

  function getIdPhoto() {
    pogination.textContent = `${fotoramaData.activeIndex + 1}/${
      portfolioItemImg.length
    }`
  }
}

let vh = window.innerHeight * 0.01
document.documentElement.style.setProperty('--vh', `${vh}px`)
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
})

render()

$('.header__slider').slick({
  accessibility: false,
  autoplay: true,
  autoplaySpeed: 2500,
  arrows: false,
  infinite: true,
  fade: true,
  cssEase: 'linear',
})

$('.header__slider--mobail').slick({
  accessibility: false,
  autoplay: true,
  autoplaySpeed: 2500,
  arrows: false,
  infinite: true,
  fade: true,
  cssEase: 'linear',
})
