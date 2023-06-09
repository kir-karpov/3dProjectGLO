import { slicer, animate } from "./helpers";


const modal = () => {
  const modalPopup = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const closeBtn = modalPopup.querySelector(".popup-close");

  const isMobile = window.innerWidth < 768;


animate({
  duration: 3000,
  timing(timeFraction,) {
    return timeFraction;
  },
  draw(progress) {
    modalPopup.style.width = progress * 300 + '%';
  }
});


  const showModal = () => {
    modalPopup.style.display = "block";
    if (!isMobile) {
      animateModal(0, 1);
    }
  };

  const hideModal = () => {
    if (!isMobile) {
      animateModal(1, 0, () => {
        modalPopup.style.display = "none";
      });
    } else {
      modalPopup.style.display = "none";
    }
  };

  const animateModal = (start, end, callback) => {
    const duration = 500;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const opacity = start + (end - start) * progress;

      modalPopup.style.opacity = opacity;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        if (typeof callback === "function") {
          callback();
        }
      }
    };

    requestAnimationFrame(animate);
  };

  document.addEventListener("click", (e) => {
    if (e.target.closest(".popup-btn")) {
      showModal();
    } else if (e.target === closeBtn || !e.target.closest(".popup-content")) {
      hideModal();
    }
  });
};

export default modal;
