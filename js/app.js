const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (menuToggle && mobileMenu) {

  menuToggle.addEventListener("click", () => {

    menuToggle.classList.toggle("active");
    mobileMenu.classList.toggle("active");

  });

}