const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.slider-right');
const slideLeft = document.querySelector('.slider-left');
const upButton = document.querySelector('.arrow-up');
const downButton = document.querySelector('.arrow-down');
const slideLenght = slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0;
slideLeft.style.top = `-${(slideLenght - 1) * 100}vh`;
upButton.addEventListener('click', () =>changeSlide('up'))
downButton.addEventListener('click',() => changeSlide('down'))

function changeSlide(direction) {
    const slideHeight = sliderContainer.clientHeight;
    if (direction === 'up') {
        activeSlideIndex++;
    }
    if (activeSlideIndex > slideLenght- 1) {
        activeSlideIndex = 0;
    }
    else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
        activeSlideIndex = slideLenght- 1;
    }
    }
    slideRight.style.transform=`translateY(-${activeSlideIndex*slideHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * slideHeight}px)`
}