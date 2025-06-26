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


    const searchbox = document.querySelector(".search");
  const show = document.querySelector(".anything");

  const questions = [
    "chemistry notes", "physics formulas", "biology diagram", "class 11 math notes",
    "nepali summary", "english grammar rules", "important long questions",
    "short questions answers", "science project ideas", "computer assignment pdf",
    "math model questions", "chapterwise notes", "class 12 solutions",
    "chemical reactions notes", "thermodynamics formulas", "organic chemistry basics",
    "electric circuits formulas", "optics physics notes", "animal kingdom classification",
    "chemical bonding types","physics book","chemistry-book","english book ","neplai book"
  ];

  function displayResults(results) {


    searchbox.addEventListener("keyup", () => {
      show.innerHTML = results
        .map(item => `<p class="suggestion" style={padding:20px} data-item="${item}">${item}</p>`)
        .join("");
    })

    show.style.display = "block";
  }

  if (searchbox && show) {
    // Handle typing in search bar
    searchbox.addEventListener("keyup", () => {
      const value = searchbox.value.toLowerCase();
      const filtered = questions.filter(q => q.includes(value));
      displayResults(value ? filtered : []);
    });

    // Handle clicking outside to hide suggestions
    document.addEventListener("click", (e) => {
      if ( !show.contains(e.target)) {
        show.style.display = "none";
        searchbox.value = ""
      }
    });

    // Handle clicking on suggestion item
    show.addEventListener("click", (event) => {
      const clicked = event.target;
 
        const selected = clicked.dataset.item.toLowerCase();

        // Redirect to pages based on keyword match
        if (selected.includes("chemistry")) {
          window.location.href = "/chemistry";
        }   else if (selected.includes(" book")) {
          window.location.href = "/english-book";
        } else if (selected.includes(" book")) {
          window.location.href = "/nepali-book";
        }else if (selected.includes(" book")) {
          window.location.href = "/physics-book";
        } 
        
        
        
        else if (selected.includes("physics")) {
          window.location.href = "/physics";
        } else if (selected.includes("math")) {
          window.location.href = "/mathematics";
        } else if (selected.includes("english")) {
          window.location.href = "/english";
        } else if (selected.includes("nepali")) {
          window.location.href = "/nepali";
        } 
        else if (selected.includes("computer")) {
          window.location.href = "/computer";
        } 
      
        
        
        
        
        
        
        else {
          window.location.href = "/not-found";
        }
      
    });
  }
}