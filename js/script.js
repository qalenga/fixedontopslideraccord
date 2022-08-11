// Sticky navbar
var main = document.querySelector('.main');
var nav = document.querySelector('.nav');


window.onscroll = function () {

    if (window.pageYOffset > (main.offsetHeight - nav.offsetHeight)) {
        nav.classList.remove('bottom-nav');
        nav.classList.add('top-nav');
    } else {
        nav.classList.add('bottom-nav');
        nav.classList.remove('top-nav');

    }
}

// To top button
const goToTopBtn = document.querySelector('.gotopbtn');

window,addEventListener("scroll", () => {
    if(window.pageYOffset > 100) {
        goToTopBtn.classList.add("active");
    } else {
        goToTopBtn.classList.remove("active");
    }
})

// Slider (carusel)
const images = document.querySelectorAll('.slider-line img');
let current = 0;

function slider() {
    for(let i = 0; i < images.length; i++ ) {
        images[i].classList.add('opacity0');
    }
    images[current].classList.remove('opacity0');
}

document.querySelector('.btn-left').onclick = function() {
    if(current -1 == -1) {
        current = images.length - 1;
    } 
    else {
        current--;
    }
    slider();
};
document.querySelector('.btn-right').onclick = function() {
    if(current + 1 == images.length) {
        current = 0;
    } 
    else {
        current++;
    }
    slider();
};

// accordion
const acc = document.getElementsByClassName('contentBx');
for(i=0; i<acc.length; i++) {
    acc[i].addEventListener('click', function() {
        this.classList.toggle('active')
    })
}