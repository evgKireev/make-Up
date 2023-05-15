const menuItem = document.querySelectorAll('.nav-item')
const borderLine = document.querySelectorAll('.border-line')
const portfolioItem = document.querySelectorAll('.portfolio__item')
const modalFotoramaItem = document.querySelectorAll('.modal')
const closeBtn = document.querySelectorAll('.close')

menuItem.forEach((item) => {
  item.addEventListener('click', setItem)
})

portfolioItem.forEach((item) => {
  item.addEventListener('click', openPortfolioItem)
})

closeBtn.forEach((item) => {
  item.addEventListener('click', openPortfolioItem)
})

function setItem(e) {
  const curTarget = e.currentTarget
  menuItem.forEach((item) => item.classList.remove('nav-item--active'))
  curTarget.classList.add('nav-item--active')
  curTarget.classList.remove('border-line')
}

function openPortfolioItem(e) {
  const tabTarget = e.currentTarget
  const button = tabTarget.dataset.btn
  modalFotoramaItem.forEach((item) => {
    item.classList.remove('modalShow')
  })
  document.querySelector(`#${button}`).classList.add('modalShow')
}

$('.header__slider').slick({
  accessibility: false,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  infinite: true,
  fade: true,
  cssEase: 'linear',
})
