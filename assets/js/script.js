document.addEventListener("DOMContentLoaded", () => {
  // Create Intersection Observer
  const observerOptions = {
    root: null, // viewport
    rootMargin: "0px",
    threshold: 0.1, // 10% of element is visible
  };

  // Fade In Animation
  const fadeInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Slide In Animation for Projects
  const slideInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-in");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Scale In Animation for Skills
  const scaleInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("scale-in");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Elements to animate
  const fadeInElements = document.querySelectorAll(".fade-in");
  const slideInElements = document.querySelectorAll(".slide-in-item");
  const scaleInElements = document.querySelectorAll(".scale-in-item");

  // Observe elements
  fadeInElements.forEach((el) => fadeInObserver.observe(el));
  slideInElements.forEach((el) => slideInObserver.observe(el));
  scaleInElements.forEach((el) => scaleInObserver.observe(el));
});
