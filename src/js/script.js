var splide = new Splide('.splide', {
    type: 'loop',
    height: '500px',
    autoplay: true,
    interval: 4000,
    pagination: false,
    arrows: true,
});

splide.mount();

var splides = new Splide('#tour-slide', {
    perPage: 3,
    type: 'loop',
    pagination: false,
    focus: 'center',
    // mobile
    breakpoints: {
        768: {
            perPage: 1,
        },
        1024: {
            perPage: 2,
        },
    },
});

splides.mount();