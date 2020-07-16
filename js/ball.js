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
        // ctx.clearRect(0,0,W,H);
        this.y-=200;
        this.draw();
        
        }




    speedUp(){

    }
};


