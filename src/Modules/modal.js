const modal = () => {
  const modalPopup = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const closeBtn = modalPopup.querySelector(".popup-close");

  const isMobile = window.innerWidth < 768; 

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

  buttons.forEach((btn) => {
    btn.addEventListener("click", showModal);
  });

  closeBtn.addEventListener("click", hideModal);
};

export default modal;
