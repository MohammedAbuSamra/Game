const player = document.getElementById("player");
let left = 0;
let numOfFrame = 0;
const stepsOfWalk = 4;
const lastOfPage = document.body.offsetWidth - 100;
const overlay = document.getElementById("overlay");
let breathingFrame = 0;
let breathingTimer = null;


function breathing() {
  function breath(timestamp) {
    player.style.backgroundImage = "url('Idle/" + breathingFrame + ".png')";
    // window.requestAnimationFrame(step);
  }
  window.requestAnimationFrame(breath);

  function nextFrameBreathing() {
    if (breathingFrame == 11) {
      breathingFrame = 0;
    }
    breathingFrame++;
  }
  breathingTimer = timer;
}

function stopBreathing() {
  clearInterval(breathingTimer);
}

function loadingFolder(folderName, numOfImgs, currentImg, next){
  if (currentImg > numOfImgs) {
    next();
    return;
  }
  const image = new Image();
  image.src = "./" + folderName + "/" + currentImg + ".png";
  image.onload = loadingFolder.bind(this, folderName, numOfImgs, currentImg + 1, next);
}

function loadingGame() {
  let numOfFolders = 2;
  let loadedFolders = 0;

  function next() {
    loadedFolders++;
    if (loadedFolders == numOfFolders) {
      startGame();
    }
  }
  loadingFolder("Walking", 17, 0, next);
  loadingFolder("Idle", 11, 0, next);
}

function startGame() {
  breathing();
  overlay.style.display = "none";

  function nextFrame() {
    stopBreathing();
    if (numOfFrame == 17) {
      numOfFrame = 0;
      updatePlayer();
      return;
    }
    numOfFrame++;
    updatePlayer();
  }

  function updatePlayer() {
    player.style.backgroundImage = "url('Walking/" + numOfFrame + ".png')";
  }

  function walkToRight() {
    if (left + stepsOfWalk > lastOfPage) {
      return;
    }
    nextFrame();
    left += stepsOfWalk;
    player.style.left = left + "px";
    player.style.transform = "rotateY(0deg)";
  }

  function walkToLeft() {
    if (left - stepsOfWalk < 0) {
      return;
    }
    nextFrame();
    left -= stepsOfWalk;
    player.style.left = left + "px";
    player.style.transform = "rotateY(180deg)";
  }

  document.addEventListener("keydown", function (event) {
    if (event.key == "ArrowRight") {
      walkToRight();
    }
    if (event.key == "ArrowLeft") {
      walkToLeft();
    }
  })

  document.addEventListener(
    "keyup", function (event) {
      if (event.key == "ArrowRight" || event.key == "ArrowLeft") {
        breathing();
      }
    }
  )
}
//startGame();

loadingGame();