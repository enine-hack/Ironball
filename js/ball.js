class Ball {
    constructor() {
        this.x = W/2;
        this.y = H-115;
        this.dx = 5;
        this.dy = -5;
        this.radius = 25;
        this.color = 'yellow';
        
        

    }

    draw() {

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();

        

    }




};


