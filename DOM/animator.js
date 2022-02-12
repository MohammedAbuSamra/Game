export function animation(animator, duration) {
  let start;
  this.animationId = null;
  const move = (timestamp) => {
    if (timestamp - start < duration) {
      this.animationId = requestAnimationFrame(move);
      return;
    }

    start = timestamp;
    animator();
    this.animationId = requestAnimationFrame(move);
  }
  this.animationId = requestAnimationFrame(move);
}


export function clearAnimation(animationObj) {
  cancelAnimationFrame(animationObj.animationId);
}


export function breathingAnimation(player) {
  let breathingFrame = 0;

  function nextFrameBreathing() {
    if (breathingFrame == 11) {
      breathingFrame = 0;
    }
    breathingFrame++;
  }

  function breath() {
    player.currentFrameImage = `Idle/${breathingFrame}.png`
    player.update();
    nextFrameBreathing();
  }

  const animationObj = new animation(breath, 200);

  return animationObj;
}

export function walkingAnimation(player) {

  let walkingFrame = 0;
  const nextFrame = () => {
    if (walkingFrame == 17) {
      walkingFrame = 0;
      return;
    }
    walkingFrame++;
  }



  function walk() {
    if (player.direction == "right") {
      player.x += 5;
    }
    if (player.direction == "left") {
      player.x -= 5;
    }
    player.currentFrameImage = `Walking/${walkingFrame}.png`
    player.update();
    nextFrame();
  }


  const animationObj = new animation(walk, 50);

  return animationObj;
}


export function jumpingAnimation() {

}
export function attacingAnimation() {

}
export function damagingAnimation() {

}