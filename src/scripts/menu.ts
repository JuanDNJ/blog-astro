const hamburger = document.querySelector(".hamburger") as HTMLElement;
const navLinks = document.querySelector(".nav-links") as HTMLElement;
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("expanded");
});