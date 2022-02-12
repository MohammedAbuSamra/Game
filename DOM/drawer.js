import configs from "../config.js";


export function initialize() {
  const gameDiv = document.getElementById("game");
  const backgroundSrc = configs.background.src;
  gameDiv.style.backgroundImage = `url(${backgroundSrc})`;
}