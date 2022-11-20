const openNav = () => {
  document.getElementById('mySidenav').style.width='350px'
  document.querySelector('.closebtn').style.display='block'
  document.querySelector('.openbtn').style.display='none'
  
}
const closeNav = () => {
  document.getElementById('mySidenav').style.width='0'
  document.querySelector('.closebtn').style.display='none'
  document.querySelector('.openbtn').style.display='block'
}
window.addEventListener('scroll', function(){
  let navbar = document.getElementById("navbar")
  if(window.pageYOffset>=165){
    navbar.classList.add('sticky')
  }
  else{
    navbar.classList.remove('sticky')

  }
})

window.addEventListener('scroll',function(){
  let scroll = this.document.querySelector('.scrollTop');
  scroll.classList.toggle('active', window.scrollY>500)
})

function scrollToTop(){

  window.scrollTo({
    top:0,
    behavior: "smooth"
  })
}

var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

});

var swiper = new Swiper(".mySecondSwiper ", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 60,
    },

  },
});

var swiper = new Swiper(".myThirdSwiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".fa-arrow-left",
    prevEl: ".fa-arrow-right",
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },

  },
  
});

var swiper = new Swiper(".NavSwiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".fa-arrow-left",
    prevEl: ".fa-arrow-right",
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },

  },
  
});

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});



