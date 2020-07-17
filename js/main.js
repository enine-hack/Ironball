let paddle;
let rightPressed = false;
let leftPressed = false;

let ball;
let gameover = false;
let gameoverNotif = document.querySelector('.game-over');

// let numberOfRow = 3
// let numberOfColumn = 4
// let bricks = [];
// // creer le tableau 2D et attribuer des coordonnées x et y
// for(let c = 0; c < numberOfColumn; c++) {
//   bricks[c] = [];
//   for(let r = 0; r < numberOfRow; r++) {
//      bricks[c][r] = { x: 0, y: 0}; 
//      bricks[c][r].x = (c*(this.l + this.padding)) + this.x;
//      bricks[c][r].y = (r*(this.h + this.padding)) + this.y;
//   }
// }

const ctx = document.getElementById('canvas').getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;

function drawAll() {
  //dessiner mon plateau
  paddle.draw();
  //dessiner ma balle
  ball.draw();
  //dessiner mon tableau de briques
    // c pour colonne et r pour row
  // bricks.draw();
  
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


let raf; 
// let frames = 0;
function animLoop() {
  // frames++;
  // effacer le canvas
  ctx.clearRect(0, 0, W, H);

  // tout redessiner
  drawAll();

  // faire bouger le paddle droite-gauche
  if(rightPressed && paddle.x < W-paddle.l) {
    paddle.x += 7;
  } else if(leftPressed && paddle.x > 0) {
    paddle.x -= 7;
  }

  // faire rebondir la balle dans le canvas sauf le bord bas
    // si la position x est > à la largeur du canvas ou si elle est < à 0
  if(ball.x + ball.dx > W - ball.radius || ball.x + ball.dx < ball.radius) {
    // inverser la direction de x
    ball.dx = -ball.dx; 
  }

    // si la position y est < à la hauteur du canvas (ordonnees y inversées !)
  if(ball.y + ball.dy < ball.radius) {
    // inverser la direction de y
    ball.dy = -ball.dy;
    // si la position y est > à la position y depasse le canvas en bas (ordonnees y inversées !)
  } else if(ball.y + ball.dy > paddle.y - ball.radius) {
    // si la balle atteri sur le paddle => si la balle est à droite du bord gauche du paddle ET < au bord droit du paddle
      if(ball.x > paddle.x && ball.x < paddle.x + paddle.l) {
        // inverser la direction de y
        ball.dy = -ball.dy;
      } else if(ball.y + ball.dy > H + ball.radius) {
        // afficher gameover
        gameoverNotif.style.display = 'flex';
        return;
      }
  
  }

  //ajouter la valeur de direction x et y (speed)
  ball.x += ball.dx;
  ball.y += ball.dy;

  if (!gameover) {
    raf = requestAnimationFrame(animLoop);
  } else if (gameover);
    gameoverNotif.addEventListener('click',() => {
      gameoverNotif.style.display = 'none';
      startGame();
    });
 
}



function startGame() {
  if (raf) {
    cancelAnimationFrame(raf);
  }

  paddle = new Paddle();

  ball = new Ball();

  // bricks = new Bricks();
 
    
  animLoop();
     
};



let $bouton = document.querySelector('#start-button');
$bouton.addEventListener('click', () => {
  // masquer la div
  document.querySelector(".start-item").style.visibility = "hidden";
  // démarrer le jeu
  startGame();
  
});








  // ne pas oublier l'autostart



