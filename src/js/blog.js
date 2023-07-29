var navbar = document.querySelector("#navbar");
console.log(navbar)
// console.log(document.documentElement.scrollTop)
// get navbar height
var navbarHeight = navbar.offsetHeight;
// jika scroll ke bawah setinggi navbar maka navbar akan berubah warna
window.onscroll = function () {
    if (window.scrollY > navbarHeight + 150) {
        navbar.classList.add("fixed");
        navbar.classList.add("-top-10");
        navbar.classList.add("translate-y-10");
    } else {
        navbar.classList.remove("fixed");
        navbar.classList.remove("-top-10");
        navbar.classList.remove("translate-y-10");
    }
};