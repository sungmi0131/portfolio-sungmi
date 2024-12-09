import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

export function bgcolor() {
    gsap.registerPlugin(ScrollTrigger);

    document.querySelectorAll('section').forEach(item => {
        let color = item.getAttribute('data-bodybg')


        ScrollTrigger.create({
            trigger: item,
            start: "top 50%",
            end: "bottom 5%",
            markers: true,

            onEnter: () => gsap.to("body", {
                backgroundColor: color,
                duration: 1.4,

            }),
            onEnterBack: () => gsap.to("body", {
                backgroundColor: color,
                duration: 1.4,
            })

        })
    })
}