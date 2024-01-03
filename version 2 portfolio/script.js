document.addEventListener("DOMContentLoaded", function () {
  const elementsToAnimate = document.querySelectorAll(
    ".apparition-div-soft-skills, .apparition-div-compétences-techno"
  );

  function checkVisibility() {
    elementsToAnimate.forEach((element) => {
      const positionApparition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (positionApparition - windowHeight <= 0) {
        element.classList.add("visible");
      } else {
        element.classList.remove("visible");
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  window.addEventListener("resize", checkVisibility);

  // Initial check on page load
  checkVisibility();
});
