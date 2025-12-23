
// SVG path 초기화
document.querySelectorAll(".path").forEach(path => {
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
    path.style.visibility = "visible";
});

// GSAP 타임라인
const drawTL = gsap.timeline({
    defaults: { ease: "none" },
});

drawTL
    .to(".path-1", { strokeDashoffset: 0, strokeDasharray: 500, duration: 0.6 })
    .to(".path-2", { strokeDashoffset: 0, strokeDasharray: 150, duration: 0.5 }, "-=0.2")
    .to(".path-3", { strokeDashoffset: 0, strokeDasharray: 150, duration: 0.5 }, "-=0.2")
    .to(".path-4", { strokeDashoffset: 0, strokeDasharray: 345, duration: 0.7 }, "-=0.2")
    .to(".path-5", { strokeDashoffset: 0, strokeDasharray: 180, duration: 0.6 }, "-=0.2")
    .to(".path-6", { strokeDashoffset: 0, strokeDasharray: 260, duration: 0.6 }, "-=0.2")
    .to(".path-7", { strokeDashoffset: 0, strokeDasharray: 480, duration: 0.9 }, "-=0.2");


$('#fullpage').fullpage({
    autoScrolling: true,
    scrollHorizontally: true,
    navigation: true, // 좌우에 영역지정 메뉴
    navigationPosition: 'left', // right 기본값 보이는 방향
    showActiveTooltip: true, //false 기본값
    onLeave: function (origin, destination, direction, trigger) {
        if (destination === 2 || destination === 4 || destination === 6) {
            $("#header,#fp-nav").addClass("active");
        } else {
            $("#header,#fp-nav").removeClass("active");
        }
        if (destination === 1) {
            drawTL.restart(); // 처음부터 실행
        }
    },
});



const team_list = new Swiper(".team_list", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
});

const graphic_img = new Swiper(".graphic_img", {
    autoplay: { // 자동슬라이드
        delay: 3000, // 3초 대기시간
        disableOnInteraction: false, //스와이프 후 자동 재생 비활성화 되지 않음
    },
    slidesPerView: 2.5, // 한줄에 보이는 슬라이드 갯수
    spaceBetween: 50, // 슬라이드 사이 간격 (단위:px)});
    loop: true,
});





