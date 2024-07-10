const images = ['../images/png/blackFriday.png', '../images/png/cozyBooks.png', '../images/png/top10.png'];
const sliderImages = document.querySelector('.slider-images');
const sliderDots = document.querySelector('.slider-dots');

export function Slider() { 
    function initImages() {
        sliderImages.innerHTML = '';
        images.forEach((image, index) => {
            let imageDiv = `<div class="slider-images__item n${index} ${index === 0 ? "active-slide" : ""}" style="background-image:url(${images[index]});" data-index="${index}"></div>`;
            sliderImages.innerHTML += imageDiv;
        })
    };

    function initDots() {
        sliderDots.innerHTML = '';
        images.forEach((item, index) => {
            let dot = `<div class="slider-dots__item n${index} ${index === 0 ? "active" : ""}" data-index="${index}"></div>`;
            sliderDots.innerHTML += dot;
        })
        sliderDots.querySelectorAll('.slider-dots__item').forEach(dot => {
            dot.addEventListener('click', function() {
                moveSlides(this.dataset.index);
            })
        })
    };

    function initAutoplay() {
        setInterval(() => {
            let curNumber = +sliderImages.querySelector(".active-slide").dataset.index;
            let nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
            moveSlides(nextNumber);
        }, 5000);
    };

    function moveSlides(num) {
        sliderImages.querySelector('.active-slide').classList.remove('active-slide');
        sliderImages.querySelector('.n' + num).classList.add('active-slide');

        sliderDots.querySelector('.active').classList.remove('active');
        sliderDots.querySelector('.n' + num).classList.add('active');
    };
    initImages();
    initDots();
    initAutoplay();
}