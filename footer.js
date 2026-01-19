document.addEventListener("DOMContentLoaded", () => {

    // Auto update year
    const year = document.getElementById("year");
    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // Footer icon click tracking (console log)
    document.querySelectorAll(".footer-icons a").forEach(icon => {
        icon.addEventListener("click", () => {
            console.log("Footer click:", icon.dataset.track);
        });
    });

});
