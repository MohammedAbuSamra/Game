import Player from "./components/player.js";
import configs from "./config.js";
import { initialize } from "./DOM/drawer.js";
import { setControls, WASD, ARROWS } from "./DOM/controls.js"

const ground = configs.background.startY;

initialize();

const player1 = new Player(0, ground, "right");

const player2 = new Player(370, ground, "left");



setControls(player1, WASD);
setControls(player2, ARROWS);
 

