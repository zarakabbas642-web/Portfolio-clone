const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const navLinks = document.querySelectorAll(".menu a");
const sections = document.querySelectorAll(".section");

if (menuBtn && sidebar) {
  menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 900 && sidebar) {
      sidebar.classList.remove("open");
    }
  });
});

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

const roles = ["Web Developer", "Freelancer", "UI Designer"];
const typedText = document.getElementById("typedText");
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  if (!typedText) {
    return;
  }

  const currentRole = roles[roleIndex];
  if (!deleting) {
    typedText.textContent = currentRole.slice(0, charIndex + 1);
    charIndex += 1;
    if (charIndex === currentRole.length) {
      deleting = true;
      setTimeout(typeEffect, 1200);
      return;
    }
  } else {
    typedText.textContent = currentRole.slice(0, charIndex - 1);
    charIndex -= 1;
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }
  setTimeout(typeEffect, deleting ? 55 : 100);
}

typeEffect();

const contactForm = document.getElementById("contactForm");
const contactSubmitBtn = document.getElementById("contactSubmitBtn");

if (contactForm && contactSubmitBtn) {
  contactForm.addEventListener("submit", (event) => {
    if (!contactForm.checkValidity()) {
      event.preventDefault();
      contactForm.reportValidity();
      return;
    }

    contactSubmitBtn.disabled = true;
    contactSubmitBtn.textContent = "Sending...";
  });
}