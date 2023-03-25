const cursorTracker = document.querySelector(".cursor-tracker");

const moveTracker = (e) => {
  const mouseY = e.clientY;
  const mouseX = e.clientX;

  cursorTracker.style.left = `${mouseX}px`;
  cursorTracker.style.top = `${mouseY}px`;
};

window.addEventListener("mousemove", moveTracker);
