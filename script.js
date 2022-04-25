// JavaScript Document
function increaseBlur() {
  const overlay = document.querySelector('.overlay');
  const currentLevel = parseInt(overlay.dataset.blurlevel, 10);
  const increasedLevel = currentLevel + 1;
  overlay.dataset.blurlevel = increasedLevel;
  overlay.style.backdropFilter = `blur(${increasedLevel}px)`;
}