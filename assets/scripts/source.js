// Get current page name from URL
const currentPage =
  window.location.pathname.split("/").pop().split(".")[0] || "";

// Select all nav links
const navLinks = document.querySelectorAll(".nav-item a");

navLinks.forEach((link) => {
  const linkPage = link.getAttribute("href").split("/").pop().split(".")[0];

  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});

gsap.to(".testimonials__bottom__body", {
  xPercent: -50,
  ease: "none",
  duration: 60,
  repeat: -1,
});

gsap.to(".scroll-bar__list", {
  xPercent: -50,
  ease: "none",
  duration: 30,
  repeat: -1,
});
gsap.to(".test-scroll .list", {
  xPercent: -50,
  ease: "none",
  duration: 30,
  repeat: -1,
});
