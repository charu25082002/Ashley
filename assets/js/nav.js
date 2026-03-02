function toggleMenu() {
  const nav = document.getElementById("navLinks");
  const toggle = document.getElementById("menuToggle");
  nav.classList.toggle("active");
  toggle.classList.toggle("active");
}

function toggleDropdown(event) {
  if (window.innerWidth <= 900) {
    event.preventDefault();
    const dropdown = event.target.closest(".dropdown");
    dropdown.classList.toggle("active");
  }
}

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 900) {
      document.getElementById("navLinks").classList.remove("active");
      document.getElementById("menuToggle").classList.remove("active");
    }
  });
});
