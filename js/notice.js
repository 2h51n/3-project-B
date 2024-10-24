window.addEventListener("load", function () {
  const noticeSwiper = new Swiper(".notice_swiper", {
    slidesPerView: 1.5, // 한 번에 보여질 슬라이드 수
    spaceBetween: 20, // 슬라이드 간의 간격
    autoplay: {
      delay: 2500, // 자동 슬라이드 시간 (밀리초)
      disableOnInteraction: false,
    },
    loop: true,

    breakpoints: {
      500: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      600: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1000: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1920: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  });
});
