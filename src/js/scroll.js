export function scroll() {
    const sections = document.querySelectorAll('section')
    const footer = document.querySelector('footer')
    const sectLast = sections[sections.length - 1]
    const sectLastTop = sectLast.offsetTop
    // alert(sectLastTop)
    // console.log(sections)


    sections.forEach((sect, i) => {
        console.log(i);

        sect.addEventListener('wheel', function (e) {
            // ScrollTrigger가 활성화된 상태에서는 동작하지 않도록 조건 추가
            if (ScrollTrigger.isActive()) return;
            e.preventDefault()

            let delta = e.deltaY
            if (delta < 0 && i === 0) {
                return
            } else if (delta > 0 && i === sections.length - 1) {
                footer.scrollIntoView({ behavior: 'smooth' })
                return
            }

            let secTop = delta < 0 ? sect.previousElementSibling : sect.nextElementSibling
            if (secTop) {
                let targetSecTop = secTop.offsetTop
                window.scrollTo({
                    top: targetSecTop,
                    behavior: 'smooth'
                })
            }
        })
    })

    window.addEventListener('wheel', function (e) {
        if (e.deltaY < 0 && window.innerHeight + window.scrollY >= document.body.scrollHeight - 10) {
            e.preventDefault()
            window.scrollTo({ top: sectLastTop, behavior: 'smooth' })
        }
    })

    

}
