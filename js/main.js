document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".main-nav");
    const backToTop = document.querySelector(".back-to-top");

    if (navToggle && nav) {
        navToggle.addEventListener("click", function () {
            nav.classList.toggle("open");
        });
    }

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    if (backToTop) {
        backToTop.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});
