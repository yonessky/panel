const scrollHeader = () => {
  const e = document.getElementById("header");
  this.scrollY >= 50
    ? e.classList.add("scroll-header")
    : e.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);
const contactForm = document.getElementById("contact-form"),
  contactName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("contact-email"),
  contactProject = document.getElementById("contact-project"),
  contactMessage = document.getElementById("contact-message"),
  sendEmail = (e) => {
    e.preventDefault(),
      "" === contactName.value ||
      "" === contactEmail.value ||
      "" === contactProject.value
        ? (contactMessage.classList.remove("color-blue"),
          contactMessage.classList.add("color-red"),
          (contactMessage.textContent = "Write all the input fields 💬"))
        : (emailjs
            .sendForm(
              "service_8ku0ajp",
              "template_d9hw035",
              "#contact-form",
              "EfUMcv3zkqiLtnKPS"
            )
            .then(
              () => {
                contactMessage.classList.add("color-blue"),
                  (contactMessage.textContent = "Message sent ✅"),
                  setTimeout(() => {
                    contactMessage.textContent = "";
                  }, 5e3);
              },
              (e) => {
                alert("OOPS! SOMETHING HAS FAILED...", e);
              }
            ),
          (contactName.value = ""),
          (contactEmail.value = ""),
          (contactProject.value = ""));
  };
contactForm.addEventListener("submit", sendEmail);



var swiperPopular = new Swiper(".services__container", {
    spaceBetweem: 32,
    grabCursor: !0,
    centeredSlides: !0,
    slidesPerView: "auto",
    loop: !0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }),
  swiperGallery = new Swiper(".card-gal", {
    spaceBetweem: 32,
    grabCursor: !0,
    centeredSlides: !0,
    slidesPerView: "auto",
    loop: !0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: { el: ".swiper-pagination" },
  });
const accordionItems = document.querySelectorAll(
  ".value__accordion-item, .services__accordion-item"
);
accordionItems.forEach((e) => {
  e.querySelector(
    ".value__accordion-header, .services__accordion-header"
  ).addEventListener("click", () => {
    const t = document.querySelector(".accordion-open");
    toggleItem(e), t && t !== e && toggleItem(t);
  });
});
const toggleItem = (e) => {
    const t = e.querySelector(".value__accordion-content");
    e.classList.contains("accordion-open")
      ? (t.removeAttribute("style"), e.classList.remove("accordion-open"))
      : ((t.style.height = t.scrollHeight + "px"),
        e.classList.add("accordion-open"));
  },
  sections = document.querySelectorAll("section[id]"),
  scrollActive = () => {
    const e = window.pageYOffset;
    sections.forEach((t) => {
      const o = t.offsetHeight,
        c = t.offsetTop - 58,
        a = t.getAttribute("id"),
        s = document.querySelector(".nav-menu a[href*=" + a + "]");
      e > c && e <= c + o
        ? s.classList.add("active-link")
        : s.classList.remove("active-link");
    });
  };
window.addEventListener("scroll", scrollActive);
const scrollUp = () => {
  const e = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? e.classList.add("show-scroll")
    : e.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);
const themeButton = document.getElementById("theme-button"),
  darkTheme = "dark-theme",
  iconTheme = "ri-sun-line",
  selectedTheme = localStorage.getItem("selected-theme"),
  selectedIcon = localStorage.getItem("selected-icon"),
  getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? "dark" : "light",
  getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";
selectedTheme &&
  (document.body.classList["dark" === selectedTheme ? "add" : "remove"](
    darkTheme
  ),
  themeButton.classList["ri-moon-line" === selectedIcon ? "add" : "remove"](
    iconTheme
  )),
  themeButton.addEventListener("click", () => {
    document.body.classList.toggle(darkTheme),
      themeButton.classList.toggle(iconTheme),
      localStorage.setItem(
        "selected-theme",
        document.body.classList.contains(darkTheme) ? "dark" : "light"
      ),
      localStorage.setItem(
        "selected-icon",
        themeButton.classList.contains(iconTheme)
          ? "ri-moon-line"
          : "ri-sun-line"
      );
  }),
  $(".counter").counterUp({ delay: 10, time: 4e3 }),
  $(".bg-img").each(function () {
    var e = $(this).children("img").attr("src");
    $(this)
      .parent()
      .css({
        "background-image": "url(" + e + ")",
        "background-size": "cover",
        "background-position": "center",
      }),
      $(this).parent().addClass("bg-img"),
      $(this).hasClass("background-size-auto") &&
        $(this).parent().addClass("background-size-auto"),
      $(this).remove();
  });
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");
tabs.forEach((e) => {
  e.addEventListener("click", () => {
    const t = document.querySelector(e.dataset.target);
    tabContents.forEach((e) => {
      e.classList.remove("filters__active");
    }),
      t.classList.add("filters__active"),
      tabs.forEach((e) => {
        e.classList.remove("filter-tab-active");
      }),
      e.classList.add("filter-tab-active");
  });
});
const cardGal = document.querySelectorAll("[card-target]"),
  gal = document.querySelectorAll("[card-content]");
function loadMore(e, t) {
  $(e).on("click", function (e) {
    e.preventDefault(), $(this).fadeOut(), $(t).fadeIn();
  });
}
cardGal.forEach((e) => {
  e.addEventListener("click", () => {
    const t = document.querySelector(e.dataset.target);
    gal.forEach((e) => {
      e.classList.remove("card-active");
    }),
      t.classList.add("card-active"),
      cardGal.forEach((e) => {
        e.classList.remove("card-tab-active");
      }),
      e.classList.add("card-tab-active");
  });
}),
  loadMore(".loadMoreproject", ".project-hidden > .card"),
  loadMore(".loadMoreproject", ".project-hidden1 > .card"),
  loadMore(".loadMoremall", ".project-hiddenmall > .card"),
  loadMore(".loadMoremall", ".project-hiddenmall1 > .card"),
  loadMore(".loadMorehos", ".project-hiddenhos > .card"),
  loadMore(".loadMorehos", ".project-hiddenhos1 > .card"),
  loadMore(".loadMoreedu", ".project-hiddenedu > .card"),
  loadMore(".loadMoreedu", ".project-hiddenedu1 > .card"),
  loadMore(".loadMoreoffc", ".project-hiddenoffc > .card"),
  loadMore(".loadMoreoffc", ".project-hiddenoffc1 > .card"),
  loadMore(".loadMoresports", ".project-hiddensports > .card"),
  loadMore(".loadMoresports", ".project-hiddensports1 > .card"),
  loadMore(".loadMoreother", ".project-hiddenother > .card"),
  loadMore(".loadMoreother", ".project-hiddenother1 > .card");
const navButton = document.querySelectorAll(".menu-item");
let activeButton = document.querySelector(".menu-item.active");
function setLineWidth(e, t) {
  const o = e.offsetWidth + "%";
  t.style.setProperty("--lineWidth", o);
}
function handleTransition(e, t) {
  e.addEventListener("transitionend", (o) => {
    "flex-grow" == o.propertyName &&
      e.classList.contains("active") &&
      t.classList.add("active");
  });
}
navButton.forEach((e) => {
  const t = e.querySelector(".menu-text");
  setLineWidth(t, e),
    window.addEventListener("resize", () => {
      setLineWidth(t, e);
    }),
    e.addEventListener("click", function () {
      this.classList.contains("active") ||
        (this.classList.add("active"),
        activeButton &&
          (activeButton.classList.remove("active"),
          activeButton.querySelector(".menu-text").classList.remove("active")),
        handleTransition(this, t),
        (activeButton = this));
    });
});
