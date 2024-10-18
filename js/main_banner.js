document.addEventListener("DOMContentLoaded",function () {

    const swiperBanner = new Swiper(".swiper-Banner", {
      slidesPerView: 1, // 한 번에 보여질 슬라이드 수
      loop: true, // loop : 무한으로 도는 것.
      autoplay: {
        delay: 3000,
        disableOnInteraction: false, // 상관없이 계속 autoplay.
      },
    });

});
