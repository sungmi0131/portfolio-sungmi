export function menu() {
    const headerToggle = document.getElementById('headerToggle');
    const headerNav = document.querySelector('.header__nav');
    const gnbLis = headerNav.querySelectorAll("li");

    if (headerToggle) {
        headerToggle.addEventListener('click', function () {
            headerNav.classList.toggle('show')
            this.classList.toggle('on')

            // headerNav.stop().animate({transform: "translateX(0)"})

            headerToggle.getAttribute('aria-expanded') === 'true'
                ? headerToggle.setAttribute('aria-expanded', 'false')
                : headerToggle.setAttribute('aria-expanded', 'true')
        })
    }
    
    gnbLis.forEach((gnbLi) => {
        gnbLi.addEventListener("click", function (e) {
            e.preventDefault();
            let href = this.querySelector("a").getAttribute("href"); // #section1 같은 값
            let targetElement = document.querySelector(href);

            if (targetElement) {
                let topPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                    top: topPosition,
                    behavior: 'smooth'
                });
            } else {
                console.error("Target element not found:", href);
            }
        });
    });


    //smooth scroll----------------------------------------    
    const lenis = new Lenis();

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    
    //각각의 section의 위치정보 ----------------------------------------
    let links = gsap.utils.toArray('nav ul li a')
    links.forEach(link => {
        let elem = document.querySelector(link.getAttribute('href'))
        ScrollTrigger.create({
            trigger: elem,
            start: 'top center',
            end: 'bottom center',
            onToggle: (self => linkActive(link))
        })
        // ---------------------------------------
        link.addEventListener('click', function (e) {
            e.preventDefault()
            linkActive(link)
            // gsap.to(window, {
            //     duration: 1,
            //     scrollTo: {
            //         y: elem,
            //         // offsetY: 50
            //     },
            //     overwrite: 'auto'
            // })
        })


    })
    //nav 활성화 비활성화 ---------------------------------------
    const showNav = gsap.from('nav', {
        // yPercent: -200,
        paused: true,
        duration: .2
    }).progress(1)

    ScrollTrigger.create({
        start: "top top",
        end: 99999,
        onUpdate: (self) => {
            self.direction === -1 ? showNav.play() : showNav.reverse()
        }


    })

    //버튼 활성화 비활성화----------------------------------------
    function linkActive(link) {
        links.forEach(el => el.classList.remove('on'))
        link.classList.add('on')
    }


}
