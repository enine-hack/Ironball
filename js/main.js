let paddle;
let rightPressed = false;
let leftPressed = false;

let ball;
let gameover = false;
let $gameoverNotif = document.querySelector('.game-over');
let win = false;
let $winNotif = document.querySelector('.win');

let bricksArray = [];
//CREATION BRIQUES MANUEL
// ROW01
// let brick00;
// let brick01;
// let brick02;
// let brick03;
// let brick04;
// let brick05;
// let brick06;
// let brick07;
// ROW 02
// let brick10;
// let brick11;
// let brick12;
// let brick13;
// let brick14;
// let brick15;
// let brick16;
// let brick17

let speedUpItems;

const ctx = document.getElementById('canvas').getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;


function drawAll() {
  //dessiner mon plateau
  paddle.draw();

  //dessiner ma balle
  ball.draw();

  //dessiner mon tableau de briques
  for (const bricks of bricksArray) {
    if (!bricks.hitted){
      bricks.draw();
    }
  }

  // dessiner mon petit plateau : temporalité différente
  if (frames % 500 === 0) {
    speedUpItems = new SpeedUpItem();
  }
  speedUpItems.draw();
 
}

// faire bouger mon plateau
document.addEventListener('keydown', keyDownPress, false);
document.addEventListener('keyup', keyUpRelease, false);
 
function keyDownPress(direction) {
  if(direction.keyCode === 39) {
      rightPressed = true;
  } else if(direction.keyCode === 37) {
      leftPressed = true;
  }
}

function keyUpRelease(direction) {
  if(direction.keyCode === 39) {
      rightPressed = false;
  } else if(direction.keyCode === 37) {
      leftPressed = false;
  }
}

// sound
function playBrickPopSound() {
  let brickPopSound = document.getElementById('pop');
  brickPopSound.play();
}

function playAmbianceSound() {
  let ambianceSound = document.getElementById('ambiance');
  ambianceSound.play();
   
}

function pauseAmbianceSound() {
  let ambianceSound = document.getElementById('ambiance');
  ambianceSound.currentTime = 0;
  ambianceSound.pause();
}


let raf;
let frames = 0;
function animLoop() {
  frames++;

  // effacer le canvas
  ctx.clearRect(0,0,W,H)
  
  // tout redessiner
  drawAll();

  // faire bouger le paddle droite-gauche
  if(rightPressed && paddle.r < W && paddle.x < W-paddle.x+paddle.r) {
    paddle.x += paddle.dx;
    paddle.r += paddle.dx;    
  } else if(leftPressed && paddle.x > 0) {
    paddle.x -= paddle.dx;
    paddle.r -= paddle.dx;
  }

  // faire rebondir la balle dans le canvas sauf le bord bas
    // si la position x est > à la largeur du canvas ou si elle est < à 0
  if(ball.x + ball.dx >= W - ball.radius || ball.x + ball.dx <= ball.radius) {
    // inverser la direction de x
    ball.dx = -ball.dx; 
  }

    // si la position y est < à la hauteur du canvas (ordonnees y inversées !)
  if(ball.y + ball.dy <= ball.radius) {
    // inverser la direction de y
    ball.dy = -ball.dy;
    // si la position y est > à la position y depasse le canvas en bas (ordonnees y inversées !)
  } else if(ball.y + ball.dy > paddle.y - ball.radius) {
    // si la balle atteri sur le paddle => si la balle est à droite du bord gauche du paddle ET < au bord droit du paddle
      if(ball.x > paddle.x && ball.x < paddle.x + paddle.l) {
        // inverser la direction de y
        ball.dy = -ball.dy;
      } else if(ball.y + ball.dy >= H + ball.radius) {
        // afficher gameover
        gameover = true;
      }
  }

  //ajouter la valeur de direction x et y (speed)
  ball.x += ball.dx;
  ball.y += ball.dy;

//ball.x > bricksArray[i].x - ball.radius && ball.x + ball.dx < bricksArray[i].x + bricksArray[i].l + bricksArray[i].paddingRight && 
// ball.y > bricksArray[i].y - ball.radius && ball.y < bricksArray[i].y + bricksArray[i].h*2.6 + bricksArray[i].paddingBottom

//  COLLISION
  function collision () {
    for(let i = 0 ; i < bricksArray.length ; i ++) {
      let n = 1; // le nombre de brique à supprime
      // si la balle touche une brique
      if (
        // le cote droit de la balle depasse le cote gauche de la brique (elle est rentree horizontalement dedans)
        ball.x + ball.radius > bricksArray[i].x &&
        // le cote gauche de la balle est rentree par la droite de la brique
        ball.x - ball.radius < bricksArray[i].x + bricksArray[i].l &&
        // le bas de ma balle est rentree par le haut de ma brique
        ball.y + ball.radius > bricksArray[i].y &&
        // le haut de ma balle est rentree par le bas de ma brique
        ball.y - ball.radius < bricksArray[i].y + bricksArray[i].h*2
      ) {
        console.log('balle en collision avec', bricksArray[i])
        // emettre le son
        playBrickPopSound();
        // changer de direction
        ball.dy = -ball.dy;
        ball.dx = -ball.dx;
        // la brique est touchée
        bricksArray[i].hitted = true;
        // la brique est supprimée du tableau
        bricksArray.splice(bricksArray.indexOf(bricksArray[i]), n);
      }
    }
    return bricksArray;
  }
    
  collision();
  
// s'il n'y a plus de briques dans mon tableau
  if(bricksArray.length === 0) {
      win = true;
      console.log(win);
  }

//  si la balle touche un petit plateau
  if(ball.x > speedUpItems.x && ball.x < speedUpItems.x + speedUpItems.l
    && ball.y > speedUpItems.y && ball.y < speedUpItems.y + speedUpItems.h*3) {
      ball.dx = 7;
      ball.dy = -7;
  }

// NOT GAMEOVER 
if (!gameover) {
  raf = requestAnimationFrame(animLoop);
  }

// GAMEOVER OR WIN
  if (gameover) {

    // si game over, afficher notif game over
    $gameoverNotif.style.display = 'flex';
    // couper le son de l'ambiance
    pauseAmbianceSound();
  } 
  
  if (win) {
    // si win, effacer le canvas puis afficher notif win
    cancelAnimationFrame(raf);
    ctx.clearRect(0, 0, W, H);
    $winNotif.style.display = 'flex';
    // couper le son de l'ambiance
    pauseAmbianceSound();
  }

}

function startGame() {
  playAmbianceSound()
  gameover = false;
  win = false;
  if (raf) {
    cancelAnimationFrame(raf);
  }

  paddle = new Paddle();
  ball = new Ball();
  for (let i = 0; i < 7; i++) { //7
    // i: 0
    for (let j = 0; j < 14; j++) { // 10
      // i:0, j:0
      // i:0, j:1

      // i:1, j:0
      // i:1, j:1

      // i:2, j:0
      // i:2, j:1

      // i:3, j:0
      // ...
      // bricksArray.push(new Bricks(i*165 +5, j*55 -35));
      bricksArray.push(new Bricks(i*165 +5+22, j*55 -35+10));
    }
  };
  // bricksArray.push(new Bricks(800,55))
  //brickxy = newBricks(x,y)
  //brick00 = new Bricks(5,-35)
  // brick01 = new Bricks(170,-35);
  // brick02 = new Bricks(335,-35);
  // brick03 = new Bricks(500,-35);
  // brick04 = new Bricks(665,-35);
  // brick05 = new Bricks(830,-35);
  // brick06 = new Bricks(995,-35);
  // bricksArray.push(brick00, brick01, brick02, brick03, brick04, brick05, brick06); // bricksArray [brick01, brick02..]
  
  // brick10 = new Bricks(5,20); //+60
  // brick11 = new Bricks(170,20);
  // brick12 = new Bricks(335,20);
  // brick13 = new Bricks(500,20);
  // brick14 = new Bricks(665,20);
  // brick15 = new Bricks(830,20);
  // brick16 = new Bricks(995,20);
  // bricksArray.push(brick10, brick11, brick12, brick13, brick14, brick15, brick16);

  speedUpItems = new SpeedUpItem();

  animLoop();
     
};

// ON CLICK GAME OVER OU WIN

$gameoverNotif.addEventListener('click', () => {
  // si on me clique dessus sans que je sois gameover, STOP
  if (!gameover) return;
  
  // sinon
  $gameoverNotif.style.display = 'none';
  startGame();
});

$winNotif.addEventListener('click', () => {
  console.log('cliqué'); //ca fonctionne
  
  // si on me clique dessus sans que je sois win, STOP
  if (!win) return;
  
  // sinon
  $winNotif.style.display = 'none';
  startGame();

});




let $bouton = document.querySelector('#start-button');
$bouton.addEventListener('click', () => {
  // masquer la div
  document.querySelector(".start-item").style.visibility = "hidden";
  // jouer le son d'ambiance
  playAmbianceSound();
  // démarrer le jeu
  startGame();

});





