import { slicer, animate } from "./helpers";


const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menuElement = document.querySelector("menu");
  const closeBtn = menuElement.querySelector(".close-btn");
  const menuItems = menuElement.querySelectorAll("ul>li>a");

animate({
  duration: 800,
  timing(timeFraction) {
    return timeFraction;
  },
  
  draw(progress) {
    menuElement.style.width = progress * 50 + '%';
  }
  
});

  const handleMenu = () => {
    menuElement.classList.toggle("active-menu");
  };

  menuBtn.addEventListener("click", handleMenu);

  closeBtn.addEventListener("click", handleMenu);

  menuItems.forEach((menuItem) =>
    menuItem.addEventListener("click", handleMenu)
  );
};

export default menu;
