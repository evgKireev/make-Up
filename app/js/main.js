const menuItem = document.querySelectorAll('.nav-item')
const borderLine = document.querySelectorAll('.border-line')

menuItem.forEach((item) => {
  item.addEventListener('click', setItem)
})

function setItem(e) {
  const curTarget = e.currentTarget
  menuItem.forEach((item) => item.classList.remove('nav-item--active'))
  curTarget.classList.add('nav-item--active')
  curTarget.classList.remove('border-line')
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
