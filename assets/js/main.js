/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
  const header = document.getElementById('header')
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the
  this.scrollY >= 50
    ? header.classList.add('shadow-header')
    : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                      : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollDown = window.scrollY

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
          // If section top is less than the position it adds class 'active'
          if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
          } else {
            sectionsClass.classList.remove('active-link')
          }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== SWIPER JANGAN MENCURI===============*/
let swiperHome = new Swiper(".home__swiper", {
  loop: true,
  grabCursor: true,
  slidesPerView: "auto",

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
      centeredSlides: "auto",
    },
    1152: {
      centeredSlides: "auto",
      spaceBetween: -64,
    },
  },
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  // reset: true // Animation repeat
});

sr.reveal(`.home__swiper, .home__footer`);
sr.reveal(`.home__circle`, { scale: 1.5, delay: 300 });
sr.reveal(`.home__subcircle`, { scale: 1.5, delay: 500 });
sr.reveal(`.home__title`, { scale: 1, origin: "bottom", delay: 1200 });
sr.reveal(`.swiper-button-prev, .swiper-button-next`, { origin: "bottom" });


/*======================= CARD POPUP JS ======================*/
const modal = document.querySelectorAll(".modal"),
  cardBtn = document.querySelectorAll(".card__product"),
  modalClose = document.querySelectorAll(".modal__close"),
  modalCard = document.querySelectorAll(".modal__card");

let activeModal = (modalClick) => {
  modal[modalClick].classList.add("active-modal");
};

/* Show modal */
cardBtn.forEach((cardBtn, i) => {
  cardBtn.addEventListener("click", () => {
    activeModal(i);
  });
});

/* Hide modal */
modalClose.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modal.forEach((modalRemove) => {
      modalRemove.classList.remove("active-modal");
    });
  });
});

/* Hide modal on background click */
modal.forEach((modal) => {
  modal.addEventListener("click", () => {
    modal.classList.remove("active-modal");
  });
});

/* Don't hide modal on card click (by event propagation) */
modalCard.forEach((modalCard) => {
  modalCard.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});


/*===================== NAV-BAR-MOBILE ==================*/

const body = document.body;
const bgColorsBody = ["#053c57"];
const menu = body.querySelector(".menu");
const menuItems = menu.querySelectorAll(".nav__link");
const menuBorder = menu.querySelector(".nav__border");
let activeItem = menu.querySelector(".active-link");

function clickItem(item, index) {

    menu.style.removeProperty("--timeOut");
    
    if (activeItem == item) return;
    
    if (activeItem) {
        activeItem.classList.remove("active-link");
    }

    
    item.classList.add("active-link");
    body.style.backgroundColor = bgColorsBody[index];
    activeItem = item;
    offsetMenuBorder(activeItem, menuBorder);
    
    
}

function offsetMenuBorder(element, menuBorder) {

    const offsetActiveItem = element.getBoundingClientRect();
    const left = Math.floor(offsetActiveItem.left - menu.offsetLeft - (menuBorder.offsetWidth  - offsetActiveItem.width) / 2) +  "px";
    menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;

}

offsetMenuBorder(activeItem, menuBorder);

menuItems.forEach((item, index) => {

    item.addEventListener("click", () => clickItem(item, index));
    
})

window.addEventListener("resize", () => {
    offsetMenuBorder(activeItem, menuBorder);
    menu.style.setProperty("--timeOut", "none");
});

/*=============== ABOUT ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.about__accordion-item')

accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.about__accordion-header')

    accordionHeader.addEventListener('click', () =>{
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

const toggleItem =  (item) => {
    const accordionContent = item.querySelector('.about__accordion-content')
    
    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }
}

/*==========   counterUp  ==========*/
$(".counter").counterUp({
  delay: 10,
  time: 4000,
});