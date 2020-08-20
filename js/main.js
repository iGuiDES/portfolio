new WOW().init();

// Slider
var mySwiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.project-pagination',
        bulletClass: 'project-bullet',
        bulletActiveClass: 'project-bullet-active',
        clickable: true
    },
});