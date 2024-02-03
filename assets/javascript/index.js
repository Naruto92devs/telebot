let header = document.querySelector(".navbar")
window.onscroll = (e)=> {
   if (window.pageYOffset > 100) {
      header.style.backgroundColor= "#000000";
    } else{
      header.style.backgroundColor = "transparent";
    }
 }


const navbarToggle = document.querySelector(".navbar-toggle");
const navbarLinks = document.querySelector(".center-menu");
const navbar = document.querySelector(".left-side-menu");
const body = document.querySelector(".body");

navbarToggle.addEventListener("click", () => {
  navbarToggle.classList.toggle("active");
  navbarLinks.classList.toggle("active");
});

navbarLinks.addEventListener("click", () => {
  navbarToggle.classList.remove("active");
  navbarLinks.classList.remove("active");
});

navbar.addEventListener("click", () => {
  navbarToggle.classList.remove("active");
  navbarLinks.classList.remove("active");
});

body.addEventListener("click", () => {
  navbarToggle.classList.remove("active");
  navbarLinks.classList.remove("active");
});