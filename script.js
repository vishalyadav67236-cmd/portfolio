// Typing effect for role
const roles = ["Web Developer", "Frontend Designer", "Freelancer"];
let index = 0;
let charIndex = 0;
const roleElement = document.getElementById("role");

function typeRole() {
  if (charIndex < roles[index].length) {
    roleElement.textContent += roles[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeRole, 100);
  } else {
    setTimeout(eraseRole, 2000);
  }
}

function eraseRole() {
  if (charIndex > 0) {
    roleElement.textContent = roles[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseRole, 50);
  } else {
    index = (index + 1) % roles.length;
    setTimeout(typeRole, 200);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeRole();

  // Mobile Menu Toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector("nav ul");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});