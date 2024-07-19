/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// Menu Show
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// Menu Hidden
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

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

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () => {
  const header = document.getElementById("header");
  // Add a class if the bottom offset is greater than 50 ot the
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", bgHeader);

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
// modalCard.forEach((modalCard) => {
//   modalCard.addEventListener("click", (e) => {
//     e.stopPropagation();
//   });
// });
