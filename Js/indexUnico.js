// ================= SIDEBAR =================
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("close-btn");

// Abrir sidebar
hamburger.addEventListener("click", () => {
  sidebar.classList.add("active");
});

// Fechar sidebar
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

// Fechar sidebar ao clicar em um link
document.querySelectorAll(".sidebar-link").forEach(link => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });
});

// Fechar sidebar ao clicar fora dela
document.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
    sidebar.classList.remove("active");
  }
});

// ================= SCROLLSPY =================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");
const sidebarLinks = document.querySelectorAll(".sidebar-link");

function activateLink() {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  // Nav principal
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });

  // Sidebar
  sidebarLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", activateLink);

// ================= FECHAR SIDEBAR COM ESCAPE =================
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    sidebar.classList.remove("active");
  }
});
