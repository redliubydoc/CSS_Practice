const navbarToggle = document.querySelector(".navbar .navbar-toggle");
const navbarNav = document.querySelector(".navbar .navbar-nav");

navbarToggle.addEventListener("click", function(event) {
  navbarNav.classList.toggle("open")
});