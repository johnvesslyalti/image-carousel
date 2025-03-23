const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let index = 0;

function updateCarousel() {
    carousel.style.transform = `translateX(${-index * 100}%)`
}
nextBtn.addEventListener('click', () => {
    index = (index + 1) % images.length;
    updateCarousel();
});
prevBtn.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    updateCarousel();
});