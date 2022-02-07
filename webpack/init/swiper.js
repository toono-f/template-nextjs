// import Swiper, { Autoplay, Navigation } from "swiper";
// Swiper.use([Autoplay, Navigation]);
import Swiper, { Navigation } from "swiper";
Swiper.use(Navigation);

export const swiper = () => {
  window.addEventListener("load", () => {
    const swiper = new Swiper(".swiper", {
      // loop: true,
      // autoplay: {
      //   delay: 3000,
      //   disableOnInteraction: false,
      // },
      grabCursor: true,
      slidesPerView: "auto",
      speed: 300,
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        768: {
          spaceBetween: "5%",
        },
        1024: {
          // slidesPerView: 2.6,
          spaceBetween: "4%",
        },
      },
      on: {
        init: () => {
          document.querySelector(".swiper").classList.add("is-active");
        },
      },
    });
  });
};
