document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const navItems = navLinks.querySelectorAll("a");

  // Toggle menu
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("show");

    // Hamburger ☰ <-> ✖
    menuToggle.textContent = navLinks.classList.contains("show")
      ? "✖"
      : "☰";
  });

  // Close menu on link click
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navLinks.classList.remove("show");
      menuToggle.textContent = "☰";
    });
  });

  // Close menu on scroll
  window.addEventListener("scroll", () => {
    if (navLinks.classList.contains("show")) {
      navLinks.classList.remove("show");
      menuToggle.textContent = "☰";
    }
  });
});
