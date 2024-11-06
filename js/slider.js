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
