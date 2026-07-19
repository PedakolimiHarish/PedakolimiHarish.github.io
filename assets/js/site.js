const navigationToggle = document.querySelector("[data-site-menu-toggle]");
const navigationMenu = document.querySelector("[data-site-menu]");

document.documentElement.classList.add("js");

if (navigationToggle && navigationMenu) {
  const closeNavigation = () => {
    navigationToggle.setAttribute("aria-expanded", "false");
    navigationMenu.dataset.open = "false";
  };

  navigationToggle.addEventListener("click", () => {
    const isOpen = navigationToggle.getAttribute("aria-expanded") === "true";

    navigationToggle.setAttribute("aria-expanded", String(!isOpen));
    navigationMenu.dataset.open = String(!isOpen);
  });

  navigationMenu.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      closeNavigation();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeNavigation();
      navigationToggle.focus();
    }
  });
}

for (const year of document.querySelectorAll("[data-current-year]")) {
  year.textContent = String(new Date().getFullYear());
}
