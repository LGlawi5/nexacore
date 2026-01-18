const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    // Toggle hamburger / close icon
    if (menuToggle.textContent === "☰") {
        menuToggle.textContent = "✖";
    } else {
        menuToggle.textContent = "☰";
    }
});

// Close menu when clicking a link
navItems.forEach(item => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("show");
        menuToggle.textContent = "☰";
    });
});

// Close menu on scroll
window.addEventListener("scroll", () => {
    navLinks.classList.remove("show");
    menuToggle.textContent = "☰";
});
