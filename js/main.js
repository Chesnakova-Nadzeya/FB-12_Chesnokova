new Swiper('.swiper-container', {
    grabCursor: true,
    slidesPerView: 3,
    loop: true,
    watchOverflow: true,
    spacebetween: 60,
    simulateTouch: true,
    touchRatio: 1,
    slidesPerGroup: 1,
    centerSlides: true,


    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },


    // effect: 'coverflow',

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
    }

});