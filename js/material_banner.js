window.addEventListener("load",function(){
    // 소재배너
const swiperBanner = new Swiper(".Banner", {
    effect: "fade",
    slidesPerView: 1, // 한 번에 보여질 슬라이드 수
    loop: true, // 무한 루프
    autoplay: {
      delay: 800, // 2.5초마다 슬라이드 전환
      disableOnInteraction: false, // 사용자가 슬라이드와 상호작용해도 자동 슬라이드 유지
    },
  });
})