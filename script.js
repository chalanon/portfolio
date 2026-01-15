// ===================================
// TYPING ANIMATION
// ===================================
const typingText = document.querySelector(".typing-text");
const texts = ["นักศึกษา IT", "Web Developer", "Programmer", "Problem Solver"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
  const currentText = texts[textIndex];

  if (isDeleting) {
    typingText.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingText.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentText.length) {
    typeSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    typeSpeed = 500;
  }

  setTimeout(typeText, typeSpeed);
}

// Start typing animation
if (typingText) {
  setTimeout(typeText, 1000);
}

// ===================================
// NAVIGATION SCROLL EFFECT
// ===================================
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Update active nav link based on scroll position
  let current = "";
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - 200) {
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

// ===================================
// MOBILE MENU TOGGLE
// ===================================
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navMenu = document.getElementById("navMenu");

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    const icon = mobileMenuBtn.querySelector("i");

    if (navMenu.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });
}

// Close mobile menu when clicking on a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    const icon = mobileMenuBtn.querySelector("i");
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  });
});

// ===================================
// SMOOTH SCROLLING
// ===================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// ===================================
// SCROLL TO TOP BUTTON
// ===================================
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    scrollTopBtn.classList.add("visible");
  } else {
    scrollTopBtn.classList.remove("visible");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ===================================
// SKILL BARS ANIMATION
// ===================================
const skillBars = document.querySelectorAll(".skill-progress");

function animateSkillBars() {
  skillBars.forEach((bar) => {
    const progress = bar.getAttribute("data-progress");
    const rect = bar.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

    if (isVisible && !bar.classList.contains("animated")) {
      bar.style.width = progress + "%";
      bar.classList.add("animated");
    }
  });
}

window.addEventListener("scroll", animateSkillBars);
window.addEventListener("load", animateSkillBars);

// ===================================
// SIMPLE AOS (ANIMATE ON SCROLL)
// ===================================
function initAOS() {
  const elements = document.querySelectorAll("[data-aos]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("aos-animate");
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
}

// Initialize AOS on page load
window.addEventListener("load", initAOS);

// ===================================
// CONTACT FORM HANDLING
// ===================================
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form data
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    // For demonstration - in real app, send to server
    console.log("Form submitted:", formData);

    // Show success message
    alert("ขอบคุณสำหรับข้อความของคุณ! ผมจะติดต่อกลับโดยเร็วที่สุด");

    // Reset form
    contactForm.reset();

    // In a real application, you would send this data to a server
    // Example with FormSubmit.co:
    // formData.append('_subject', 'New Portfolio Contact!');
    // formData.append('_captcha', 'false');
    // fetch('https://formsubmit.co/your@email.com', {
    //     method: 'POST',
    //     body: formData
    // });
  });
}

// ===================================
// DYNAMIC IMAGE LOADING
// ===================================
// This section allows you to easily update images
// Replace the placeholder URLs with your actual images

const imageConfig = {
  profile: "https://via.placeholder.com/400",
  about: "https://via.placeholder.com/500",
  project1: "https://via.placeholder.com/600x400",
  project2: "https://via.placeholder.com/600x400",
  project3: "https://via.placeholder.com/600x400",
};

// Load images
window.addEventListener("load", () => {
  const profileImage = document.getElementById("profileImage");
  const aboutImage = document.getElementById("aboutImage");
  const project1Image = document.getElementById("project1Image");
  const project2Image = document.getElementById("project2Image");
  const project3Image = document.getElementById("project3Image");

  if (profileImage) profileImage.src = imageConfig.profile;
  if (aboutImage) aboutImage.src = imageConfig.about;
  if (project1Image) project1Image.src = imageConfig.project1;
  if (project2Image) project2Image.src = imageConfig.project2;
  if (project3Image) project3Image.src = imageConfig.project3;
});

// ===================================
// PARALLAX EFFECT FOR GRADIENT ORBS
// ===================================
const orbs = document.querySelectorAll(".gradient-orb");

window.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX / window.innerWidth;
  const mouseY = e.clientY / window.innerHeight;

  orbs.forEach((orb, index) => {
    const speed = (index + 1) * 0.05;
    const x = (window.innerWidth - e.clientX * speed) / 100;
    const y = (window.innerHeight - e.clientY * speed) / 100;

    orb.style.transform = `translate(${x}px, ${y}px)`;
  });
});

// ===================================
// PRELOADER (OPTIONAL)
// ===================================
window.addEventListener("load", () => {
  document.body.classList.add("loaded");

  // Add a subtle fade-in effect
  const heroSection = document.querySelector(".hero-section");
  if (heroSection) {
    heroSection.style.opacity = "0";
    setTimeout(() => {
      heroSection.style.transition = "opacity 1s ease";
      heroSection.style.opacity = "1";
    }, 100);
  }
});

// ===================================
// CONSOLE MESSAGE
// ===================================
console.log(
  "%c👋 สวัสดีครับ!",
  "color: #667eea; font-size: 20px; font-weight: bold;"
);
console.log(
  "%cขอบคุณที่แวะมาดู Portfolio ของผม",
  "color: #764ba2; font-size: 14px;"
);

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================
// Lazy load images
if ("loading" in HTMLImageElement.prototype) {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach((img) => {
    img.src = img.dataset.src;
  });
} else {
  // Fallback for browsers that don't support lazy loading
  const script = document.createElement("script");
  script.src =
    "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
  document.body.appendChild(script);
}

// Debounce function for scroll events
function debounce(func, wait = 10, immediate = true) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Use debounced scroll handler
const debouncedScroll = debounce(() => {
  animateSkillBars();
});

window.addEventListener("scroll", debouncedScroll);
