// src/utils/notehouse.js
export function initNotehouseScripts() {
  // Contact scroll
  const contactBtns = document.querySelectorAll(".c-btn");
  const contactSection = document.getElementById("contact-page");
  if (contactBtns.length && contactSection) {
    contactBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        contactSection.scrollIntoView({ behavior: "smooth" });
      });
    });
  }

  // Home scroll
  const homeBtns = document.querySelectorAll(".h-btn");
  const homeSection = document.getElementById("navbar");
  if (homeBtns.length && homeSection) {
    homeBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        homeSection.scrollIntoView({ behavior: "smooth" });
      });
    });
  }

  // About section scroll
  const aboutBtns = document.querySelectorAll(".about1");
  const aboutSection = document.getElementById("about-section");
  if (aboutBtns.length && aboutSection) {
    aboutBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      });
    });
  }

  // Container scroll


  // Scroll to top button
  const scrollUpBtn = document.getElementById("scrollUpBtn");
  if (scrollUpBtn) {
    window.addEventListener("scroll", () => {
      scrollUpBtn.style.display = window.scrollY > 200 ? "block" : "none";
    });

    scrollUpBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Redirect buttons
  const loader = document.getElementById("loader10");
  const redirectWithLoader = (url, delay = 1000) => {
    if (loader) loader.style.display = "block";
    setTimeout(() => {
      window.location.href = url;
    }, delay);
  };

  const personal1 = document.getElementById("personal1");
  if (personal1) {
    personal1.addEventListener("click", () => {
      redirectWithLoader("https://ramansha0.github.io/Portfolio/");
    });
  }

  const redict = document.getElementById("redict");
  if (redict) {
    redict.addEventListener("click", () => {
      redirectWithLoader("http://127.0.0.1:5500/index1.html", 2000);
    });
  }

  // Intersection Observer for paragraph
  const paragraph = document.querySelector(".par");
  if (paragraph) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          paragraph.classList.toggle("visible", entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(paragraph);
  }

  // Search bar filter
  const searchbox = document.querySelector(".search");
  const show = document.querySelector(".anything");

  const questions = [
    "chemistry notes", "physics formulas", "biology diagram", "class 11 math notes",
    "nepali summary", "english grammar rules", "important long questions",
    "short questions answers", "science project ideas", "computer assignment pdf",
    "math model questions", "chapterwise notes", "class 12 solutions",
    "chemical reactions notes", "thermodynamics formulas", "organic chemistry basics",
    "electric circuits formulas", "optics physics notes", "animal kingdom classification",
    "chemical bonding types"
  ];

  function displayResults(results) {
    if (!show) return;

    if (results.length === 0) {
      show.innerHTML = "<p class='not-found'>No results found</p>";
    } else {
      show.innerHTML = results.map(item => `<ul>${item}</ul>`).join("");
    }
    show.style.display = "block";
  }

  if (searchbox && show) {
    searchbox.addEventListener("keyup", () => {
      const value = searchbox.value.toLowerCase();
      const filtered = questions.filter(q => q.includes(value));
      displayResults(value ? filtered : []);
    });

    document.addEventListener("click", (e) => {
      if (!searchbox.contains(e.target) && !show.contains(e.target)) {
        show.style.display = "none";
      }
    });
  }
}
