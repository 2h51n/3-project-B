$(document).ready(function () {
    // 쿠폰 클릭 이벤트
    $(".coupon-item").on("click", function (e) {
        e.preventDefault(); // 기본 링크 클릭 이벤트 방지

        // 쿠폰 알림 메시지 표시
        $("#couponAlert")
            .removeClass("fade-out") // fade-out 클래스 제거
            .addClass("fade-in") // fade-in 클래스 추가
            .css("display", "block") // 즉시 표시 (display를 block으로 설정)
            .delay(1000) // 2초 대기
            .queue(function (next) {
                $(this).removeClass("fade-in").addClass("fade-out"); // fade-out 클래스 추가
                next();
            })
            .fadeOut(200, function() {
                // 알림이 사라진 후 로그인 모달 열기
                $("#loginModal").fadeIn();
            });
    });

    // 로그인 모달 닫기 버튼
    $(".close-btn").on("click", function () {
        $("#loginModal").fadeOut();
    });
});
