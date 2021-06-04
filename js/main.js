new Swiper('.swiper-container', {
    grabCursor: true,
    loop: true,
    watchOverflow: true,
    spacebetween: 60,
    simulateTouch: true,
    touchRatio: 1,
    slidesPerGroup: 1,
    centerSlides: true,
    slidesPerView: 3,



    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },


    breakpoints: {
        848: {
            slidesPerView: 1,
        },
        1125: {
            slidesPerView: 2,
        },
    },

});



function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu_button', '.burger-menu_lines');
    let links = menu.find('.burger-menu_link');
    let overlay = menu.find('.burger-menu_overlay');

    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());

    function toggleMenu() {
        menu.toggleClass('burger-menu_active');

        if (menu.hasClass('burger-menu_active')) {
            $('body').css('overlow', 'hidden');
        } else {
            $('body').css('overlow', 'visible');
        }
    }
}

burgerMenu('.burger-menu');