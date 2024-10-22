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

  // 비디오 항목 체크 (video태그로 파악)
  // 모든비디오 태그를 변수에 저장
  let videos = this.document.querySelectorAll(".swVideo video");
  console.log(videos);
  // 비디오 재생시간 체크
  // 비디오의 재생 시간을 보관할 배열을 생성
  let videosTimeArr = [];
  // 비디오 재생 시간을 배열에 저장하는 반복문을 작성
  for (let i = 0; i < videos.length; i++) {
    console.log(videos[0].duration);

    videosTimeArr[i] = Math.ceil(videos[i].duration);
    console.log(videosTimeArr[0]);
  }
  // 첫번째 비디오 자동 실행
  let videoIndex = 0;
  videos[videoIndex].play();
  // visual slide
  // swiper슬라이드 초기화
  let swVisual = new Swiper(".swVideo", {
    loop: true,
  });
  // 슬라이드 변경 이벤트시 처리
  swVisual.on("slideChange", function () {
    // 진행중인 비디오 멈춤
    videos[videoIndex].pause();
    // 다음 화면 보이는 swiper 슬라이드 번호
    // console.log(swVisual.activeIndex);
    // console.log(swVisual.realIndex);
    videoIndex = swVisual.realIndex;

    videos[videoIndex].currentTime = 0;
    const playPromise = videos[videoIndex].play();
    if (playPromise !== undefined) {
      playPromise.then((_) => {}).catch((error) => {});
    }
    clearInterval(videoTimer);
    videoReset();
  });

  // 타이머를 생성한다
  // 비디오 타이머 초기화 및 설정
  let videoTimer;
  // 비디오 타이머를 설정하고 초기화하는 함수 를 정의하고 호출
  function videoReset() {
    clearInterval(videoTimer);
    // 비디오 플레이시간
    let videoTime = videosTimeArr[videoIndex];
    // console.log(videoTime);
    videoTimer = setInterval(() => {
      // console.log(barScaleW);

      swVisual.slideNext();
      clearInterval(videoTimer);
      videoReset();
    }, videoTime * 1000);
  }
  videoReset();

  
};
