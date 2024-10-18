window.onload = function () {
// 헤더 카테고리 클릭 시 서브메뉴 나옴
  // const cateIcon = document.querySelector("#category-icon")
  const cateTitle = document.querySelectorAll(".category-title");
  const naviCate = document.querySelector(".navi-cate");
  // cateIcon.addEventListener("click", function(e){
  //   e.preventDefault()
  //   naviCate.classList.toggle("active")
  // })
  cateTitle.forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      naviCate.classList.toggle("active");
    });
  });
};
