export function work() {
    gsap.registerPlugin(ScrollTrigger);

    // work 섹션에서 애니메이션 트리거
    ScrollTrigger.create({
        trigger: "#work", // 트리거 대상
        start: "top center", // 뷰포트의 중앙에 섹션의 top이 도달하면 시작
        onEnter: () => {
            // 애니메이션 실행
            startWorkAnimations();
        },
        once: true // 한 번만 실행
    });
}

function startWorkAnimations() {
    gsap.set('.first', { opacity: 1 });
    const tl = gsap.timeline(); // 타임라인 생성

    // first 애니메이션
    tl.from('.first', {
        y: -1200,
        rotate: 0,
        duration: 1,
        opacity: 1,
        stagger: { each: 0.3, from: 'start' },
        ease: 'power4.out'
    });

    tl.from('.second', {
        y: -1200,
        rotate: 0,
        duration: 1,
        opacity: 0,
        stagger: { each: 0.3, from: 'start' },
        ease: 'power4.out'
    }, '-=1.4');

    tl.from('.third', {
        y: -1200,
        rotate: 0,
        duration: 1,
        opacity: 0,
        stagger: { each: 0.3, from: 'start' },
        ease: 'power4.out'
    }, '-=1.4');

    tl.from('.fourth', {
        y: -1200,
        rotate: 10,
        duration: 1,
        opacity: 0,
        stagger: { each: 0.3, from: 'start' },
        ease: 'power4.out'
    }, '-=1.4');

    tl.from('.five', {
        y: -1200,
        rotate: 0,
        duration: 1,
        opacity: 0,
        stagger: { each: 0.3, from: 'start' },
        ease: 'power4.out'
    }, '-=1.4');

    const workArea = document.getElementById("work");
    const workItems = document.querySelectorAll(".work__item");
    const workCursor = document.getElementById("work__cursor");

    workItems.forEach(function (item) {
        item.addEventListener("mousemove", function (e) {
            let workLeft = e.clientX;
            let workTop = e.clientY;
            workCursor.style.left = workLeft + "px";
            workCursor.style.top = workTop + "px";
        });

        item.addEventListener("mouseenter", function () {
            workCursor.style.opacity = 1;

            // 배경 이미지 가져오기 및 설정
            const bgImage = item.getAttribute('data-bg');
            workCursor.style.setProperty('--cursor-bg', `url(${bgImage})`);

            // 설명 텍스트 표시
            workCursor.innerHTML = this.dataset.desc;
        });

        item.addEventListener("mouseleave", function () {
            workCursor.style.opacity = 0;
        });
    });
}
