document.addEventListener("DOMContentLoaded", function () {
  const detailImg = document.querySelectorAll(".tab-button");
  const cards = document.querySelectorAll(".card");
  console.log(detailImg);
  console.log(cards);

  //   로드시 활성화 메뉴랑 카드 index[0]
  //
  detailImg[0].classList.add("active");
  cards[0].classList.add("active");

  detailImg.forEach(function (detailImg, index) {
    // console.log(menuItem);
    detailImg.addEventListener("click", function () {
      // //   클릭된 메뉴와 해당하는 카드를 비활성화
      detailImg.forEach(function (item) {
        // console.log(item);
        item.classList.remove("active");
      });
      cards.forEach(function (card) {
        console.log(card);
        card.classList.remove("active");
      });
      //   클릭된 메뉴와 해당하는 카드를 활성화
      detailImg[index].classList.add("active");
      cards[index].classList.add("active");
    });
  });

  const hash = window.location.hash;
  if (hash) {
    const targetIndex = Array.from(detailImg).findIndex((item) => item.closest("li").id === hash.substring(1));
    if (targetIndex !== -1) {
      // 기존 활성화된 메뉴와 카드를 비활성화
      detailImg.forEach((item) => item.classList.remove("active"));
      cards.forEach((card) => card.classList.remove("active"));

      // 해시로 지정된 메뉴와 카드 활성화
      detailImg[targetIndex].classList.add("active");
      cards[targetIndex].classList.add("active");
    }
  }
});
//누르면 다른거 다 보이기
//다른거 누르면 클래스명으로 직관해서 작용하게
