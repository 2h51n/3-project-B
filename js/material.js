$(document).ready(function () {
  // Swiper 초기화
  const materialSwiper = new Swiper(".swMaterial", {
      slidesPerView: 5,
  });

  // DOM 요소 선택
  const depthCategoryButtons = $(".depth-top a");
  const depthBottomCategoryButtons = $(".depth-bottom a");
  const swiperCategoryButtons = $(".swMaterial .swiper-slide a");
  const materialGoodsSections = $(".material-goods");
  const sideBottomButtons = $(".side-bottom-menu li a");
  const showMoreButton = $("#showMoreButton");
  const sectionTitleHeight = $(".section-title").outerHeight(); // 섹션 타이틀의 높이

  // 모든 카테고리 상품 숨기기
  function hideAllCategories() {
      materialGoodsSections.hide();
  }

  // 모든 아이콘 비활성화
  function deactivateAllIcons() {
      depthCategoryButtons.css("opacity", "0.53");
      depthBottomCategoryButtons.css("opacity", "0.53");
      swiperCategoryButtons.css("opacity", "0.53");
      swiperCategoryButtons.find("img").css("filter", "none");
      sideBottomButtons.css("opacity", "0.53");
  }

  // 아이콘 활성화
  function activateIcon(button) {
      button.css("opacity", "1");
  }

  // 클릭한 카테고리 상품만 표시하고 스크롤
  function displayCategory(category, shouldScroll = true) {
      hideAllCategories();
      deactivateAllIcons();

      const selectedCategory = $(`.material-goods.${category}`);
      if (selectedCategory.length) {
          selectedCategory.show(); // 해당 카테고리 상품 표시

          // shouldScroll이 true일 경우에만 스크롤
          if (shouldScroll) {
              scrollToMaterialArea(); // material-area로 스크롤
          }

          // 관련된 아이콘 활성화
          const relatedButton = depthCategoryButtons.filter(`[data-category="${category}"]`);
          if (relatedButton.length) activateIcon(relatedButton);
          const relatedBottomButton = depthBottomCategoryButtons.filter(`[data-category="${category}"]`);
          if (relatedBottomButton.length) activateIcon(relatedBottomButton);
          const relatedSwiperButton = swiperCategoryButtons.filter(function () {
              return $(this).find("img").attr("alt").toLowerCase() === category;
          });
          if (relatedSwiperButton.length) activateIcon(relatedSwiperButton);
          const relatedSideBottomButton = sideBottomButtons.filter(`[data-category="${category}"]`);
          if (relatedSideBottomButton.length) activateIcon(relatedSideBottomButton);
      }
  }

  // material-area로 스크롤 이동 함수
  function scrollToMaterialArea() {
      const targetSection = $(".material-area"); // material-area를 선택
      if (targetSection.length) {
          // 화면 크기에 따라 스크롤 위치 조정
          let offset = sectionTitleHeight; // 섹션 타이틀의 높이를 오프셋으로 설정
          const windowWidth = $(window).width();
          // 화면 크기에 따른 추가 오프셋 조정
          if (windowWidth <= 360) {
              offset += 50; // 360px 이하일 때 추가 오프셋
          } else if (windowWidth <= 480) {
              offset += 100; // 480px 이하일 때 추가 오프셋
          } else if (windowWidth <= 768) {
              offset += 150; // 768px 이하일 때 추가 오프셋
          } else if (windowWidth <= 1024) {
              offset += 200; // 1024px 이하일 때 추가 오프셋
          }
          else if (windowWidth <= 1920) {
              offset += 150; // 1024px 이하일 때 추가 오프셋
          }

          // 스크롤 애니메이션
          $("html, body").animate({
              scrollTop: targetSection.offset().top - offset // 오프셋을 적용하여 스크롤
          }, 800); // 부드러운 스크롤 애니메이션
      }
  }

  // 이벤트 리스너 등록
  depthCategoryButtons.on("click", function (e) {
      e.preventDefault();
      const category = $(this).data("category");
      displayCategory(category); // 카테고리 클릭 시 displayCategory 호출
  });

  depthBottomCategoryButtons.on("click", function (e) {
      e.preventDefault();
      const category = $(this).data("category");
      displayCategory(category); // 카테고리 클릭 시 displayCategory 호출
  });

  swiperCategoryButtons.on("click", function (e) {
      e.preventDefault();
      const category = $(this).find("img").attr("alt").toLowerCase();
      displayCategory(category); // 카테고리 클릭 시 displayCategory 호출
  });

  sideBottomButtons.on("click", function (e) {
      e.preventDefault();
      const category = $(this).data("category");
      displayCategory(category); // 카테고리 클릭 시 displayCategory 호출
      scrollToMaterialArea(); // 사이드 바텀 클릭 시에도 material-area로 스크롤
  });

  // 페이지 로드 시 기본으로 무작위 카테고리 및 해당 아이콘 표시
  hideAllCategories();
  deactivateAllIcons();
  const randomIndex = Math.floor(Math.random() * materialGoodsSections.length);
  const randomCategory = materialGoodsSections.eq(randomIndex);
  if (randomCategory.length) {
      randomCategory.show();
      const categoryAlt = randomCategory.attr("class").split(" ")[1];
      displayCategory(categoryAlt, false); // 초기 로드 시 스크롤하지 않음
  }

  // 더 보기 버튼 클릭 시 히든 클래스 토글
  showMoreButton.on("click", function () {
      if ($(window).width() <= 480) {
          $(".hidden").toggle(); // .hidden 클래스를 가진 요소 보이기/숨기기
      }
  });
});
