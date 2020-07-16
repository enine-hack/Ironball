let ball;
let bricks;


const ctx = document.querySelector('canvas').getContext('2d');

const W = ctx.canvas.width; // 1000
const H = ctx.canvas.height; //1530

function draw() {
    // gameboard outlines apparition
    // score
    
    ball.draw();
    
    // bricks
    bricks.draw();
    // lives
}






let state = {
  launchedGame: true, 
};



function renderEverything() {
  startItemsDisappear();
  startGame();
}

function startItemsDisappear() {
  startItems = document.querySelectorAll(".start-item").forEach(items => {
    if (state.launchedGame = !state.launchedGame ) { 
      items.style.visibility = 'hidden';
    } else {
      items.style.visibility = 'visible';
    }
  });
}


function startGame(){

  ball = new Ball();
    if (state.launchedGame) { 
      draw();
    }
  
  bricks = new Bricks()
  if (state.launchedGame) { 
    draw();
  }
  
  
};


document.onclick = function() {
    
  ball.moveUp();
  
  console.log('gooooo', ball)

};
 





renderEverything();

let $bouton = document.querySelector('#start-button');
$bouton.addEventListener('click', () => {
  startItemsDisappear();
  startGame();
  
});








  // ne pas oublier l'autostart



