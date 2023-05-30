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
sr.reveal(".profile-img", {delay: 400})
sr.reveal(".about-text", { delay: 350, origin: "left" });
sr.reveal(".skills", { delay: 380, origin: "right" });
sr.reveal(".education-section, .project-section, .contact", {
  delay: 300,
  origin: "top",
});
sr.reveal(".experience-section", { delay: 800 });

// send email
(function() {
  emailjs.init('OjY1I9XpMetFt9q0z')}
)()
const btn = document.querySelector('#submit')
const alert = document.querySelector('form p')
document.querySelector('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.textContent = 'Sending...';
   btn.disabled = true
   console.log(btn.disabled);
   this.reset()

   const serviceID = 'default_service';
   const templateID = 'template_aq0h9hk';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.textContent = 'Send';
      btn.disabled = false
      alert.textContent = 'Thank you!'
      setTimeout(() => {
        alert.textContent = ''
      }, 2000);
    }, (err) => {
      btn.textContent = 'Send';
      btn.disabled = false
      alert(JSON.stringify(err));
    });
});
