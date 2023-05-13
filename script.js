const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};

const sr = ScrollReveal({
  distance: "20px",
  duration: 2700,
  reset: true,
});

sr.reveal(".home-text", { delay: 350, origin: "top" });
sr.reveal(".about-text", { delay: 350, origin: "left" });
sr.reveal(".skills", { delay: 380, origin: "right" });
sr.reveal(
  ".experience-section, .education-section, .project-section, .contact",
  { delay: 300, origin: "top" }
);
