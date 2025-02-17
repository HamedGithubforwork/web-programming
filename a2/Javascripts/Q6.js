let currentSlideIndex = 0;
const slides = [
    {
        img: "images/image1.jpg",
    },
    {
        img: "images/image2.jpg",
    },
    {
        img: "images/image3.jpg",
    },
    {
        img: "images/image4.jpg",
    }
];

function changeSlide(direction) {
    currentSlideIndex += direction;
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    document.getElementById('slideImage').src = slides[currentSlideIndex].img;
}
