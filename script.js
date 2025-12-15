// script.js

// Toggle menu mobile
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // Ẩn menu sau khi click link
  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      navLinks.classList.remove("show");
    }
  });
}

// Set năm hiện tại trong footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Scroll mượt khi click anchor #id
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId.length > 1) {
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  });
});

// Contact button toggle
const contactButton = document.getElementById("contactButton");
const contactMenu = document.getElementById("contactMenu");

if (contactButton && contactMenu) {
  contactButton.addEventListener("click", (e) => {
    e.stopPropagation();
    contactMenu.classList.toggle("show");
  });

  // Đóng menu khi click bên ngoài
  document.addEventListener("click", (e) => {
    if (!contactButton.contains(e.target) && !contactMenu.contains(e.target)) {
      contactMenu.classList.remove("show");
    }
  });

  // Đóng menu khi click vào một item
  const contactMenuItems = contactMenu.querySelectorAll(".contact-menu-item");
  contactMenuItems.forEach((item) => {
    item.addEventListener("click", () => {
      contactMenu.classList.remove("show");
    });
  });
}