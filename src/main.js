import "./style.css";

const navbar = document.querySelector("#navbar");
const menuBtn = document.querySelector("#menuBtn");
const mobileMenu = document.querySelector("#mobileMenu");

// ==========================
// Navbar scroll effect
// ==========================
function updateNavbar() {
  if (!navbar) return;

  if (window.scrollY > 80) {
    navbar.classList.add(
      "bg-white",
      "shadow-xl",
      "backdrop-blur",
      "border-b",
      "border-slate-200",
      "scrolled"
    );
  } else {
    navbar.classList.remove(
      "bg-white",
      "shadow-xl",
      "backdrop-blur",
      "border-b",
      "border-slate-200",
      "scrolled"
    );
  }
}

window.addEventListener("scroll", updateNavbar);
updateNavbar(); // Run immediately on page load/refresh

// ==========================
// Mobile menu toggle
// ==========================
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    const isHidden = mobileMenu.classList.toggle("hidden");
    menuBtn.textContent = isHidden ? "☰" : "✕";
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      menuBtn.textContent = "☰";
    });
  });
}

// ==========================
// Scroll reveal animations
// ==========================
const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

reveals.forEach((section) => {
  revealObserver.observe(section);
});

// ==========================
// Animated stats counters
// ==========================
const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    const counter = entry.target;
    const target = +counter.dataset.target;
    let current = 0;
    const step = target / 80;

    const update = () => {
      current += step;

      if (current < target) {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(update);
      } else {
        counter.textContent = target.toLocaleString() + "+";
      }
    };

    update();
    counterObserver.unobserve(counter);
  });
});

counters.forEach((counter) => {
  counterObserver.observe(counter);
});


