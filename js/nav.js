const navMenuIcon = document.querySelector(".nav__menu-icon");
const navLinks = document.querySelector(".nav__links");

if (navLinks && navMenuIcon) {
  navMenuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}
