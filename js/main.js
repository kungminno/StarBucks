const searchEl = document.querySelector('.search'); //.search의 html구조//
const searchInputEl = searchEl.querySelector('input'); //.search input의 html구조//

// 돋보기 아이콘을 선택하면 input 요소 focus
searchEl.addEventListener('click', function(){
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');

});

const badgeEl = document.querySelector('.badges');

window.addEventListener('scroll', _.throttle(function (){
    if (window.scrollY > 500){
        //배지 숨기기
        // gsap.to(요소,지속시간, 옵션);
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
    }
    else{
        //배지 보이기
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
    }
},300)); //일정 시간에 한번씩만 실행되도록 제한을 걸음, _.throttle은 특히나 스크롤할때 마니 사용됨
// _.throttle(함수, 시간(몇 초에 한번씩 실행되면 되는지 ms 단위)
