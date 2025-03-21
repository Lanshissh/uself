document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".single_home_slider");
    let currentIndex = 0;

    // Function to update slides
    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.toggle("active", index === currentIndex);
        });
    }

    // Show the first slide
    updateSlides();

    document.querySelector(".next").addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % slides.length; // Loop back to first slide
        updateSlides();
    });

    document.querySelector(".prev").addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Loop to last slide
        updateSlides();
    });
});
