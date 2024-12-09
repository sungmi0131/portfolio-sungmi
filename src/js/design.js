export function design() {
    const articles = gsap.utils.toArray('.des')
    gsap.to(articles, {
        xPercent: -100 * (articles.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: '#design',
            start: 'top top',
            end: '+=3000',
            pin: true,
            scrub: 1,
            // snap: "none",
        }
    }
    )
}