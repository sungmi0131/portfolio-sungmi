export function video() {
    let videoBtns = document.querySelectorAll('.pad__controls button');
    videoBtns.forEach(function (btn, idx) {
        btn.addEventListener('click', function () {
            const videoplay = this.dataset.video; // 버튼의 data-video 값
            const videoPlayer = document.getElementById('pad__player'); // 비디오 요소 가져오기

            for (btn of videoBtns){
                btn.classList.remove("on");
            }
            this.classList.add("on");
            
            // 비디오 src 업데이트
            videoPlayer.setAttribute('src', videoplay);
            
            // 비디오 재생
            videoPlayer.play();

            let videoSlide = document.querySelector(".pad__contents__inside");
            videoSlide.style.transform = `translateY(${-160 * idx}px)`;
        });
    });
    
}


/*

querySelectorAll = 여러개
forEach => [ 0, 1, 2, 3, 4, 5, 6] = 배열
매개변수를 2개 사용가능  forEach(function( 변수명, 자릿수){})
forEach(function( 변수명){})

btn[idx] === this
*/