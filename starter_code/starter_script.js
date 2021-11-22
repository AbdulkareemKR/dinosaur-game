/*              Select HTML DOM Elements            */

// Canvas
let canvas = document.getElementById("canvas");
let player;
let cactus;
let score = 0;
// Score Display Element

// Restart Button

/*              Audio Files                        */

// Audio Jump

// Audio hit(gameover)

/*              Define Constants                   */

// player image width
const PLAYER_WIDTH = 43;
// player image height
const PLAYER_HEIGHT = 47;
// cactus width
const CACTUS_WIDTH = 17;
// cactus height
const CACTUS_HEIGHT = 35;

/*              Classes                           */
// Cactus class to create cactus object
class Cactus {
  constructor(width, height, hitboxWidth, hitboxHeight) {
    this.width = width;
    this.height = height;
    this.hitboxWidth = hitboxWidth;
    this.hitboxHeight = hitboxHeight;
    this.element;
  }
}

// Player class to create cactus object
class Player {
  constructor(width, height, hitboxWidth, hitboxHeight) {
    this.width = width;
    this.height = height;
    this.hitboxWidth = hitboxWidth;
    this.hitboxHeight = hitboxHeight;
    this.element;
  }
}

/*              Functions                           */

// function to render Player DOM Element
function renderPlayer(player) {
  // create player DOM Element
  player.element = document.createElement("div");
  // set style width = player width
  player.element.style.width = player.width + "px";
  // set style height = player height
  player.element.style.height = player.height + "px";
  // set attribue id attribute

  // add css classes
  player.element.classList.add("player");
  // add event listeners for animation
  player.element.addEventListener("animationend", function () {
    player.element.classList.remove("player--jump");
  });
  // append to canvas
  canvas.appendChild(player.element);
}

// function to render Cactus DOM Element
function renderCactus(cactus) {
  // create player DOM Element
  cactus.element = document.createElement("div");
  // set style width = cactus width
  cactus.element.style.width = cactus.width + "px";
  // set style height = cactus height
  cactus.element.style.height = cactus.height + "px";
  // add css classes
  cactus.element.classList.add("cactus", "cactus--slide");
  // append to canvas
  canvas.appendchild(cactus.element);
}

// add event listern to spacebar key(jump)
function spaceKeyEvent(event) {
  if (event.code == "Space") {
    player.element.classList.add("player--jump");
    // jumpAudio()
  }
}

// game loop every 10ms
function gameLoop() {
  // setInterval to check game state
  let intervalID = setInterval(function () {
    let playerBox = player.element.getBoundingClientRect();
    let cactusBox = cactus.element.getBoundingClientRect();
  }, 10);

  if (
    playerBox.x < cactusBox.x + cactus.hitboxWidth &&
    playerBox.x + playerBox.hitboxWidth > cactusBox.x &&
    playerBox.y < cactusBox.y + cactus.hitboxHeight &&
    playerBox.y + playerBox.hitboxheight > ccactusBox.y
  ) {
    cactus.element.classList.add("pause");
  }

  if (!isGameOver) {
    socre++;
  }
  // collision detection
  // check cactus outside canvas
  // check if game over
}

// start, restart game function
function startGame() {
  // add keyup event listener
  document.addEventListener("keyup", spaceKeyEvent);
  // hide restart button
  // intiate player
  player = new Player(PLAYER_WIDTH, PLAYER_HEIGHT, PLAYER_WIDTH, PLAYER_HEIGHT);
  renderPlayer(player);
  // intiate cactus
  cactus = new Cactus(
    CACTUS_WIDTH,
    CACTUS_HEIGHT,
    CACTUS_WIDTH,
    CACTUS_WIDTH,
    CACTUS_WIDTH
  );
  renderCactus(cactus);
}

function resetGame() {
  // hide restart button
  // remove cactus
  // remove player
  // reset score
  // reset game over state
}

function gameOver() {
  // show restart button
  // remove spacebar key event listener
}

// restartBtn.addEventListener("click", function () {
//   // call reset game
//   // call start game
// });

startGame();
