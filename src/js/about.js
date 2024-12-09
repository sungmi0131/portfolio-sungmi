export function about() {
    $('.tab__lists button').click(function (e) {
        e.preventDefault()
        
        let idx = $(this).index()
        $('.desc li').removeClass('on')
        $('.desc li').eq(idx).addClass('on')
    
        $('.tab__lists button a').removeClass('on')
        $(this).find('a').addClass('on')
    })
    $('.desc__list li').click(function (e) {
        e.preventDefault()
    })
}