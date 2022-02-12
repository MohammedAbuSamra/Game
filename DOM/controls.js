export function setControls(player, options) {
  let lastKey = null;

  document.addEventListener("keydown", event => {

    if (event.key == lastKey) {
      return;
    }


    switch (event.key.toLowerCase()) {
      case options.walkToRight.toLowerCase():
        player.direction = "right";
        player.walk();
        lastKey = options.walkToRight;
        break;
      case options.walkToLeft.toLowerCase():
        player.direction = "left";
        player.walk();
        lastKey = options.walkToLeft;
        break;
    }


  })


  document.addEventListener("keyup", event => {

    if (event.key != lastKey) {
      return;
    }
    lastKey = null;
    switch (event.key.toLowerCase()) {
      case options.walkToRight.toLowerCase():
        player.direction = "right";
        player.idle();
        break;
      case options.walkToLeft.toLowerCase():
        player.direction = "left";
        player.idle();
        break;
    }

  })
}



export const WASD = { walkToRight: "d", walkToLeft: "a" }

export const ARROWS = { walkToRight: "ArrowRight", walkToLeft: "ArrowLeft" }