document.addEventListener("DOMContentLoaded", function () {

    let currentSlide = 0;
    const slides = document.querySelectorAll(".news-card");
    const dots = document.querySelectorAll(".dot");
    let sliderInterval;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));

        slides[index].classList.add("active");
        dots[index].classList.add("active");
        currentSlide = index;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function startSlider() {
        sliderInterval = setInterval(nextSlide, 5000);
    }

    function stopSlider() {
        clearInterval(sliderInterval);
    }

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => showSlide(index));
    });

    const slider = document.getElementById("newsSlider");
    slider.addEventListener("mouseenter", stopSlider);
    slider.addEventListener("mouseleave", startSlider);

    startSlider();
});

