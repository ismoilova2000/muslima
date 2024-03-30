// Мобильное меню бургер
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    burger.addEventListener('click', () => {
      if (!menu.classList.contains('active')) {
        menu.classList.add('active')
        burger.classList.add('active-burger')
        body.classList.add('locked')
      } else {
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
      }
    })
    menu.addEventListener("click", (event) => {
      if(event.target){
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
      }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
      if (window.innerWidth > 991.98) {
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
      }
    })
  }
  burgerMenu()
  
  
  // Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
  function fixedNav() {
    const nav = document.querySelector('nav')
  
    // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
    const breakpoint = 1
    if (window.scrollY >= breakpoint) {
      nav.classList.add('fixed__nav')
    } else {
      nav.classList.remove('fixed__nav')
    }
  }
  window.addEventListener('scroll', fixedNav)

  let wrapper = document.querySelector('.top__wrapper')

  const cards = [
    {
      img: '../img/card1.jpg',
      title: 'Tray with food',
      price: '30$',
    },

    {
      img: '../img/card2.jpg',
      title: 'Twill seat cushion',
      price: '40$',
    },

    {
      img: '../img/card3.jpg',
      title: 'Fluted beverage glass',
      price: '55$',
    },

    {
      img: '../img/card4.jpg',
      title: 'Ceramic egg cup',
      price: '33$',
    },

    {
      img: '../img/card5.jpg',
      title: 'Small bamboo box',
      price: '65$',
    },

    {
      img: '../img/card6.jpg',
      title: 'Metal cutlery basket',
      price: '42$',
    },

  ]


  cards.map((card) =>{
wrapper.innerHTML += `
<div class="top__card">
<img src=${card.img} alt="">

<div class="top__box">
    <h4>${card.title}</h4>
    <img src="./img/stars.svg" alt="">
    <b>${card.price}</b>
</div>
</div>
`
  })
  