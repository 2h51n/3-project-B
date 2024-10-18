
document.addEventListener('DOMContentLoaded', function () {
  const reviewSwiper = new Swiper(".swReview" ,{
    slidesPerView: 5, 
    autoplay: {
      delay: 2000, // 자동 슬라이드 시간 (밀리초)
      disableOnInteraction: false,
    },
  })
  var swiper = new Swiper('.swReview', {

    spaceBetween: 20,           // 슬라이드 간 간격
    loop: true,                 // 슬라이드가 무한 반복되도록 설정
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {              // 화면 크기에 따른 슬라이드 개수 조정
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    }
  });
});