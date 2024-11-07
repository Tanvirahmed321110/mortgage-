

// banner slider
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");

if (!progressCircle || !progressContent) {
    console.error("Progress circle or content element not found.");
}

var swiper = new Swiper(".banner-slider", {
    spaceBetween: 30,
    speed: 1000,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3200,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    on: {
        autoplayTimeLeft(s, time, progress) {
            progressCircle.style.setProperty("--progress", 1 - progress);
            progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
    }
});





// Review slider
const reviewSwiper = new Swiper('.swiper-reviews', {
    slidesPerView: 1,            // Number of slides to show (adjust as needed)
    spaceBetween: 20,            // Gap between slides
    loop: true,                  // Enable continuous loop
    autoplay: {                  // Enable autoplay
        delay: 2500,             // 3 seconds delay
        disableOnInteraction: false,  // Keeps autoplay running after interactions
    },
    speed: 1500,                  // Smooth transition speed (adjust as desired)
    breakpoints: {               // Responsive breakpoints
        768: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },
});