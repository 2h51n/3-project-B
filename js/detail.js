document.addEventListener("DOMContentLoaded", function showTab(tabName) {

        var i, tabcontent, tabbuttons;
        
        // 모든 탭 콘텐츠 숨기기
        tabcontent = document.getElementsByClassName("tab-content");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
      
        // 모든 탭 버튼에서 active 클래스 제거
        tabbuttons = document.getElementsByClassName("tab-button");
        for (i = 0; i < tabbuttons.length; i++) {
          tabbuttons[i].classList.remove("active");
        }
      
        // 선택된 탭 콘텐츠 표시 및 해당 버튼에 active 클래스 추가
        document.getElementById(tabName).style.display = "block";
      }



)