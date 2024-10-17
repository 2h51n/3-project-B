window.onload = function () {
  const noticeSwiper = new Swiper(".notice_swiper", {
    slidesPerView: 1.3, // 한 번에 보여질 슬라이드 수
    spaceBetween: 20, // 슬라이드 간의 간격
    autoplay: {
      delay: 3000, // 자동 슬라이드 시간 (밀리초)
      disableOnInteraction: false,
    },

    breakpoints: {
      500: {
        slidesPerView: 1.8,
        spaceBetween: 20,
      },
      600: {
        slidesPerView: 2.3,
        spaceBetween: 20,
      },
      1000: {
        slidesPerView: 2.5,
        spaceBetween: 30,
      },
      1920: {
        slidesPerView: 2.5,
        spaceBetween: 30,
      },
    },
  });
};
