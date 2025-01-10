// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Function to check if element is in viewport
  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  // Function to handle scroll animations
  const handleScrollAnimations = () => {
    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      if (isInViewport(element)) {
        element.classList.add("visible");
      }
    });
  };

  // Function to handle scroll animations for cards
  // const cardsScrollAnimation = () => {
  //   document.querySelectorAll(".cards").forEach((element) => {
  //     if (isInViewport(element)) {
  //       element.classList.add("cards-scroll");
  //     }
  //   });
  // };

  // Function to handle image loading animations
  const handleImageLoad = () => {
    document.querySelectorAll("img").forEach((img) => {
      if (img.complete) {
        img.classList.add("loaded");
      } else {
        img.addEventListener("load", () => {
          img.classList.add("loaded");
        });
      }
    });
  };

  // Add scroll event listener
  window.addEventListener("scroll", handleScrollAnimations);

  // Initial check for elements in viewport
  handleScrollAnimations();

  // Handle image loading
  handleImageLoad();
});
