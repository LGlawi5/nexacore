document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    const navItems = navLinks.querySelectorAll("a");

    // Toggle menu on click
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("show");

        // Toggle icon ☰ <-> ✖
        if (menuToggle.textContent === "☰") {
            menuToggle.textContent = "✖";
        } else {
            menuToggle.textContent = "☰";
        }
    });

    // Close menu when clicking a link
    navItems.forEach(item => {
        item.addEventListener("click", function () {
            navLinks.classList.remove("show");
            menuToggle.textContent = "☰";
        });
    });

    // Close menu on scroll
    window.addEventListener("scroll", function () {
        if (navLinks.classList.contains("show")) {
            navLinks.classList.remove("show");
            menuToggle.textContent = "☰";
        }
    });
});
