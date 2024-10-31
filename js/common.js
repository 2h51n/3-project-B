// SNS 아이콘 표시 및 숨기기 함수
function toggleSocialIcons() {
  const socialIcons = document.querySelector(".social-icons");
  if (!socialIcons) return; // socialIcons 요소가 없으면 함수 종료
  
  const isVisible = socialIcons.style.display === "flex"; // 현재 표시 여부 확인
  
  if (!isVisible) {
    socialIcons.style.display = "flex";
    socialIcons.style.opacity = 0;
    setTimeout(() => {
      socialIcons.style.transition = "opacity 0.3s";
      socialIcons.style.opacity = 1;
    }, 10);
  } else {
    socialIcons.style.opacity = 0;
    setTimeout(() => {
      socialIcons.style.display = "none";
    }, 300);
  }
}

// 로그인 상태 확인 및 UI 업데이트
function checkLoginStatus() {
  const loginStatus = localStorage.getItem("loginStatus");
  const loginBt = document.querySelector(".loginBt");
  const loginBtMy = document.querySelector(".loginBt_my");
  
  if (loginStatus) {
      if (loginBt) loginBt.style.display = "none"; // 로그인 아이콘 숨기기
      if (loginBtMy) loginBtMy.style.display = "block"; // 마이 아이콘 표시
      showNotification("로그인 상태: " + loginStatus);
  } else {
      if (loginBt) loginBt.style.display = "block"; // 로그인 아이콘 표시
      if (loginBtMy) loginBtMy.style.display = "none"; // 마이 아이콘 숨기기
      showNotification("로그인 상태가 아닙니다.");
  }
}

// 로그인 상태 저장
function saveLoginStatus(provider) {
  localStorage.setItem("loginStatus", provider); // 로그인 상태 저장
  checkLoginStatus(); // UI 업데이트
}

// 로그인 관련 이벤트 리스너 초기화
function initializeLoginEventListeners() {
  const loginIcon = document.querySelector(".loginBt a");
  const myIcon = document.querySelector(".loginBt_my a");

  if (loginIcon) {
      loginIcon.addEventListener("click", function(event) {
          event.preventDefault();
          const loginStatus = localStorage.getItem("loginStatus");
          if (!loginStatus) {
              document.querySelector("#loginModal").style.display = "flex"; // 로그인 모달 표시
          }
      });
  }

  if (myIcon) {
      myIcon.addEventListener("click", function(event) {
          event.preventDefault();
          const loginStatus = localStorage.getItem("loginStatus");
          if (loginStatus) {
              showWelcomePopup(); // 로그인된 경우 환영 팝업 표시
          } else {
              showNotification("로그인 상태가 아닙니다."); // 알림 표시
          }
      });
  }
}

// 알림 표시 함수
function showNotification(message) {
  const notification = document.getElementById("notification");
  if (notification) {
      notification.textContent = message;
      notification.style.display = "block";
      setTimeout(() => {
          notification.style.display = "none";
      }, 3000);
  }
}

// 환영 팝업 표시 함수
function showWelcomePopup() {
  const userId = localStorage.getItem("userId");
  const welcomePopup = document.getElementById("welcomePopup");
  if (welcomePopup) {
      welcomePopup.innerHTML = `${userId}님 환영합니다!`;
      welcomePopup.style.display = "block";
      setTimeout(() => {
          welcomePopup.style.display = "none";
      }, 5000);
  }
}

// DOMContentLoaded 이벤트 리스너로 초기화
document.addEventListener("DOMContentLoaded", function() {
  initializeLoginEventListeners();
  checkLoginStatus();
  
  const csBtn = document.querySelector(".cs-btn");
  if (csBtn) {
      csBtn.addEventListener("click", toggleSocialIcons);
  }
});
