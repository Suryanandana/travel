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
    autoHeight: true,
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
AOS.init({
    duration: 1000,
    once: true,
});

var navbar = document.querySelector("#navbar");
// console.log(document.documentElement.scrollTop)
// get navbar height
var navbarHeight = navbar.offsetHeight;
// jika scroll ke bawah setinggi navbar maka navbar akan berubah warna
window.onscroll = function () {
    if (window.pageYOffset > navbarHeight + 150) {
        navbar.classList.add("fixed");
        navbar.classList.add("-top-10");
        navbar.classList.add("translate-y-10");
    } else {
        navbar.classList.remove("fixed");
        navbar.classList.remove("-top-10");
        navbar.classList.remove("translate-y-10");
    }
};