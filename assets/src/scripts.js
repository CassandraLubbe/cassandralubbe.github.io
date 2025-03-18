var swiper = new Swiper(".mySwiper", {
    effect: 'cube',
    allowTouchMove: false,
    grapCursor: false,
    cubeEffect: {
        shadow: true,
        slideShadow: true,
        shadowOffset: 20,
        shadowScale: 0.94,
        slidesPerView: 1,
    },
    mousewheel: true,
});

swiper.on('slideChange', function() {
    for (let i of document.querySelectorAll(".Links li"))
        i.classList.remove("activeLink");
    Array.from(document.querySelectorAll(".Links li"))[swiper.activeIndex].classList.add("activeLink");
});

function Navigate(index){
    for (let i of document.querySelectorAll(".Links li"))
        i.classList.remove("activeLink");
    Array.from(document.querySelectorAll(".Links li"))[index].classList.add("activeLink");
    swiper.slideTo(index, 1000, true);
}