const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    menuToggle.classList.toggle("active");

    menuToggle.textContent = 
        menuToggle.textContent === "☰" ? "✖" : "☰";
});

/* Close menu when clicking a link */
navItems.forEach(item => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("show");
        menuToggle.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});

/* Close menu on scroll */
window.addEventListener("scroll", () => {
    navLinks.classList.remove("show");
    menuToggle.classList.remove("active");
    menuToggle.textContent = "☰";
});
