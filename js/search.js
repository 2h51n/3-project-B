$(document).ready(function () {
  // 실시간 검색 기능
  $("#searchInput").on("keyup", function () {
    const query = $(this).val().toLowerCase(); // 입력된 검색어 가져오기

    // 이전에 하이라이트된 요소들 제거
    $(".searchable").removeClass("highlight");

    if (query) {
      // 검색어에 일치하는 요소 찾기
      const matchedElements = $(".searchable").filter(function () {
        return $(this).text().toLowerCase().includes(query); // 텍스트에 검색어가 포함되어 있는지 확인
      });

      matchedElements.addClass("highlight"); // 포함된 요소에 하이라이트 클래스 추가

      // 첫 번째 일치하는 요소로 스크롤
      if (matchedElements.length > 0) {
        const firstMatch = matchedElements.first()[0]; // 첫 번째 일치하는 요소 선택
        firstMatch.scrollIntoView({ behavior: "smooth", block: "start" }); // 부드럽게 스크롤
      }
    }
  });

  // 검색 버튼 클릭 시 전체 검색 실행
  $("#searchBtn").on("click", function (event) {
    event.preventDefault(); // 기본 링크 동작 방지
    const query = $("#searchInput").val().toLowerCase(); // 입력된 검색어 가져오기
    $("#searchInput").trigger("keyup"); // 키 입력 이벤트 트리거
  });
});
