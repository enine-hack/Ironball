class Ball {
    constructor() {
        this.x = W/2;
        this.y = H-50;
        this.vx = 5;
        this.vy = 2;
        this.radius = 18;
        this.color = 'yellow';


    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();

    }

    
    moveUp() {
        // clear tout ??
        this.y-=200;
        this.draw();
        
        }




    speedUp(){

    }
};




// canvas.addEventListener('mouseover', function(e){
//   raf = window.requestAnimationFrame(draw);
// });

// canvas.addEventListener("mouseout",function(e){
//   window.cancelAnimationFrame(raf);
// });



// if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
//   ball.vy = -ball.vy;
// }
// if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
//   ball.vx = -ball.vx;
// }








//ANIMATION
// function speed() {
//   ctx.clearRect(0,0, canvas.width, canvas.height);
//   ball.draw();
//   ball.x += ball.vx;
//   ball.y += ball.vy;
//   raf = window.requestAnimationFrame(draw);
// }


// class obstacles {
//     constructor() {
        
//     }

//     hits(ball){

//     }
// }

// class bonus {
//     constructor() {
       
//         this.nbPoint = 0;
        
//     }

//     hits(ball){

//     }
// }

// class lives {
//     constructor() {

//     }
// }