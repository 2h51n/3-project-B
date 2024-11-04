$(document).ready(function () {
  // 페이지가 로드될 때 로그인 상태 확인
  checkLoginStatus();

  let couponAlertDisplayed = false; // 쿠폰 알림 표시 상태 변수

  // 로그인 아이콘 클릭 이벤트
  $(".loginBt a").on("click", function (event) {
    event.preventDefault(); // 기본 링크 동작 방지
    const loginStatus = localStorage.getItem("loginStatus");

    if (loginStatus) {
      showWelcomePopup(); // 로그인된 경우 환영 팝업 표시
    } else {
      $("#loginModal").fadeIn(300); // 로그인 모달을 부드럽게 표시
    }
  });

  // 쿠폰 클릭 이벤트
  $(".coupon-item").on("click", function (e) {
    e.preventDefault(); // 기본 링크 클릭 이벤트 방지

    // 로그인 상태 확인
    const loginStatus = localStorage.getItem("loginStatus");

    if (loginStatus) {
      const userId = localStorage.getItem("userId"); // 로그인된 유저 ID 가져오기

      // 로그인 상태일 경우, 쿠폰 지급 완료 메시지
      if (!couponAlertDisplayed) { // 알림이 이미 표시되지 않은 경우
        couponAlertDisplayed = true; // 알림 표시 상태 업데이트
        showNotification(`${userId}님, <br>쿠폰 지급이 <br>완료되었습니다.`);
        setTimeout(() => { couponAlertDisplayed = false; }, 3000); // 3초 후 알림 표시 상태 초기화
      }
    } else {
      // 로그인되지 않은 상태일 경우 로그인 모달 띄우기 및 알림 메시지 표시
      if (!couponAlertDisplayed) { // 알림이 이미 표시되지 않은 경우
        couponAlertDisplayed = true; // 알림 표시 상태 업데이트
        showNotification(`쿠폰이 <br>지급 예정입니다. <br>로그인 또는 <br>회원가입을 해주세요.`);
        $("#loginModal").fadeIn(); // 로그인 모달 열기
        setTimeout(() => { couponAlertDisplayed = false; }, 3000); // 3초 후 알림 표시 상태 초기화
      }
    }
  });

  // 로그아웃 버튼 클릭 이벤트
  $(document).on("click", ".logout-button", function () {
    localStorage.removeItem("loginStatus"); // 로그인 상태 제거
    showNotification("로그아웃 되었습니다.");
    $("#welcomePopup").fadeOut(300); // 환영 팝업 숨김

    // 로그아웃 후 쿠폰 알림 초기화
    $("#couponAlert").html(`쿠폰이 지급 예정입니다. <br>로그인 또는 <br>회원가입을 해주세요.`); // 기본 알림 메시지로 초기화
  });

  // 로그인 상태 확인 함수
  function checkLoginStatus() {
    const loginStatus = localStorage.getItem("loginStatus");
    if (loginStatus) {
      showNotification("로그인 상태: " + loginStatus); // 로그인 상태 알림
    } else {
      showNotification("로그인 <br>상태가 아닙니다."); // 변경된 알림
    }
  }

  // 환영 팝업 표시 함수
  function showWelcomePopup() {
    const userId = localStorage.getItem("userId");
    $("#welcomeMessage").html(`${userId}님 <br>환영합니다!`); // 사용자 아이디 표시
    $("#welcomePopup").fadeIn(300); // 팝업 표시
  }

  // 알림 표시 함수
  function showNotification(message) {
    $("#notification").html(message).fadeIn(300); // 알림 표시
    setTimeout(function () {
      $("#notification").fadeOut(300); // 3초 후 알림 사라짐
    }, 3000);
  }

  // 기존 알림 div 요소에 스타일 적용
  $("#notification").css({
    position: "fixed",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#fdd835",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    zIndex: 1000,
    display: "none",
  });
});
