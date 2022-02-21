// MOBILE Nav
const navMenuIcon = document.querySelector(".nav__menu-icon");
const navLinks = document.querySelector(".nav__links");

if (navLinks && navMenuIcon) {
  navMenuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// DARK MODE
const toggleSwitch = document.querySelector('.theme-switcher input[type="checkbox"]');
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

const switchTheme = (e) => {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
};

toggleSwitch.addEventListener("change", switchTheme, false);
