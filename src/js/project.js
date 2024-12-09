export function project() {
    var swiper1 = new Swiper(".projectSwiper1", {
        effect: "cube",
        grabCursor: true,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        },

        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },
    });
    var swiper2 = new Swiper(".projectSwiper2", {
        effect: "fade",
        grabCursor: true,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        fadeEffect: {
            crossFade: true,
        },
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },
    });
    document.querySelector(".next").addEventListener("click", () => {
        swiper1.slideNext();
        swiper2.slideNext();
    });

    document.querySelector(".prev").addEventListener("click", () => {
        swiper1.slidePrev();
        swiper2.slidePrev();
    });
}