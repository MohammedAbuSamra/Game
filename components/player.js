import { animation, breathingAnimation, clearAnimation, walkingAnimation } from "../DOM/animator.js";
const gameContainer = document.getElementById("game");

function createPlayerElement(player) {
  const playerDiv = document.createElement("div");
  playerDiv.className = "player";
  playerDiv.style.cssText =
    `
      top:${player.y}px;
      left:${player.x}px;
      transform: rotateY(${player.direction === "right" ? "0" : "180"}deg);
  `;

  return playerDiv;
}

export default function Player(x, y, direction = "right") {

  this.x = x;
  this.y = y;
  this.currentFrameImage;
  this.currentWalkingFrame = 0;
  this.direction = direction;
  this.element = createPlayerElement(this);
  this.currentAnimation = breathingAnimation(this);
  this.status = "idle";

  gameContainer.appendChild(this.element);


  this.update = () => {

    this.element.style.cssText =
      `
      top:${this.y}px;
      left:${this.x}px;
      transform: rotateY(${this.direction === "right" ? "0" : "180"}deg); 
  `;
    this.element.style.backgroundImage = "url('" + this.currentFrameImage + "')";
  }

  this.walk = function () {
    clearAnimation(this.currentAnimation);
    this.currentAnimation = walkingAnimation(this);
  }

  this.idle = () => {
    clearAnimation(this.currentAnimation);
    this.currentAnimation = breathingAnimation(this);
  }

}



