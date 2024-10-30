window.onload = function () {

  
    const cateTitle = document.querySelectorAll(".category-title");
    const naviCate = document.querySelector(".navi-cate");
    const cateIcon = document.querySelector("#category-icon");
    const sideMenu = document.querySelector(".sidemenu-area");
    const headLogo = document.querySelector(".head-logo");
    const cateClose = document.querySelector(".cate-close");
    const cateClose2 = document.querySelector(".cate-close2");
    const sideInput = document.querySelector(".side-top-icons input");
    const sideInputBT = document.querySelector(".side-iconsBT > .searchMB > a .search_icon");
    const search830 = document.querySelector(".header-icons > .searchMB > a .search_icon");
    const searchInput = document.querySelector(".searchMB input");
    const loginBThidden = document.querySelector(".header-right .loginBt");
    const closeInput = document.querySelector(".inputClose");
  
    // 카테고리 텍스트메뉴 클릭 시 소재별 미니카테고리 나옴
    cateTitle.forEach(function (item) {
      item.addEventListener("click", function (e) {
        e.preventDefault();
        naviCate.classList.toggle("active");
      });
    });
  
    sideInputBT.addEventListener("click", function () {
      sideInput.classList.toggle("active");
    });
  
    // 카테고리 아이콘 클릭 시
    cateIcon.addEventListener("click", function (e) {
      e.preventDefault();
  
      // 사이드 메뉴를 활성화할 때 검색 인풋 상태를 확인
      if (searchInput.classList.contains("active")) {
        searchInput.classList.remove("active"); // 검색 인풋 비활성화
        loginBThidden.classList.remove("hidden"); // 로그인 버튼 보이기
        headLogo.classList.remove("hidden"); // 헤더 로고 보이기
      }
  
      cateClose.classList.add("active");
      cateClose2.classList.add("active");
      cateIcon.classList.add("hidden");
      sideMenu.classList.add("active");
      headLogo.classList.add("hidden");
    });
  
    // 카테고리 닫기 버튼 클릭 시
    cateClose.addEventListener("click", function (e) {
      e.preventDefault();
      cateClose.classList.remove("active");
      cateIcon.classList.remove("hidden");
      sideMenu.classList.remove("active");
      headLogo.classList.remove("hidden");
    });
  
    // 카테고리 닫기 버튼 클릭 시
    cateClose2.addEventListener("click", function (e) {
      e.preventDefault();
      cateClose2.classList.remove("active");
      cateClose.classList.remove("active");
      cateIcon.classList.remove("hidden");
      sideMenu.classList.remove("active");
      headLogo.classList.remove("hidden");
    });
  
    // 사이드 메뉴 내부 클릭 시 이벤트 버블링 방지
    sideMenu.addEventListener("click", function (e) {
      e.stopPropagation(); // 부모로 이벤트가 전달되지 않도록 함
    });
  
    // 검색 버튼 클릭 시
    search830.addEventListener("click", function () {
      if (searchInput.classList.contains("active")) {
        // 인풋이 이미 활성화된 상태면 비활성화 처리
        searchInput.classList.remove("active");
        loginBThidden.classList.remove("hidden");
        headLogo.classList.remove("hidden");
      } else {
        // 인풋이 비활성화된 상태면 활성화 처리
        searchInput.classList.add("active");
        loginBThidden.classList.add("hidden");
        headLogo.classList.add("hidden");
      }
    });
  
    // 브라우저 창 크기 조절 시 로고 상태 초기화
    window.addEventListener("resize", function () {
      if (window.innerWidth > 768) {
        headLogo.classList.remove("hidden"); // 큰 화면에서는 로고를 항상 표시
        sideMenu.classList.remove("active"); // 메뉴도 닫힘
        naviCate.classList.remove("active");
      }
  
      const icon = document.querySelector("#category-icon");
      if (window.innerWidth > 768) {
        icon.style.display = "none"; // 창이 작아져도 아이콘 표시
      } else {
        icon.style.display = "inline-block"; // 항상 표시
      }
  
      if (window.innerWidth > 400) {
        cateClose2.style.display = "none";
      }
    });
  
    
  };
  