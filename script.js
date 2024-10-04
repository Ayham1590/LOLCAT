var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3, // Show 3 slides at a time on desktop
    spaceBetween: 10, // Space between slides
    loop: true, // Infinite looping
    autoplay: {
        delay: 3000, // Carousel moves every 3 seconds
        disableOnInteraction: false, // Autoplay will not stop after user interaction
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1024: {
            slidesPerView: 2, // Show 2 slides at a time on tablet screens
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 1, // Show 1 slide at a time on mobile screens
            spaceBetween: 10,
        }
    }
});
