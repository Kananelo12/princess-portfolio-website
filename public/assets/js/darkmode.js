//Scroll to top button
const ScrollTopBtn = document.querySelector(".scrollToTop-btn");
window.addEventListener("scroll", function () {
    ScrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

ScrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

//Website dark/light theme
const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark_bg");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
});
const getCurrentTheme = () => document.body.classList.contains("dark_bg") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moo ";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if (savedTheme) {
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark_bg");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}