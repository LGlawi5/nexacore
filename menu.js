document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    // Toggle menu on click
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });

    // Close menu on scroll
    window.addEventListener("scroll", function () {
        if (navLinks.classList.contains("show")) {
            navLinks.classList.remove("show");
        }
    });
});
