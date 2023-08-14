const header = document.querySelector("header");
const navItems = document.querySelectorAll('.navbar li')

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});


navItems.forEach(item => item.addEventListener('click', setIsActive))

function setIsActive(){
  navItems.forEach(item => item.classList.remove('isActive'))
  this.classList.add('isActive')
}

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

//toggle humberger menu
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};


window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};

//add transition between sections
const sr = ScrollReveal({
  distance: "20px",
  duration: 2700,
  reset: true,
});

sr.reveal(".home-text", { delay: 350, origin: "top" });
sr.reveal(".profile-img", {delay: 400})
sr.reveal(".about-text", { delay: 350, origin: "left" });
sr.reveal(".skills", { delay: 380, origin: "right" });
sr.reveal(".education-section, .project-section, .contact", {
  delay: 300,
  origin: "top",
});
sr.reveal(".experience-section", { delay: 800 });


