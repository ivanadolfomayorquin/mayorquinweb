const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

const hero = document.getElementById("inicio");
const sections = document.querySelectorAll(".page-section");
const menuLinks = document.querySelectorAll(".mobile-menu a");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

menuLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const target = link.dataset.section;

    // Cerrar menú
    menuToggle.classList.remove("active");
    mobileMenu.classList.remove("active");

    // Ocultar todo
    hero.style.display = "none";

    sections.forEach(section => {
      section.classList.remove("active");
    });

    // Mostrar la sección seleccionada
    if (target === "inicio") {
      hero.style.display = "block";
    } else {
      document.getElementById(target).classList.add("active");
    }

    window.scrollTo(0, 0);
  });
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js");
  });
}