class Ball {
    constructor() {
        this.x = W/2;
        this.y = H-115;
        this.dx = 5;
        this.dy = -5;
        this.radius = 20;
        this.color = 'yellow';
        
        

    }

    draw() {

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
        ctx.save();
        const w = 150;
        const h = 100;

        // // on va au centre du canvas
        // ctx.translate(W/2,H/2)
        // // on pivote
        // ctx.rotate(8*Math.PI/10)
        // // on trace le rectangle depuis le centre pivoté
        // ctx.fillRect(-w/2,-180,w,h)

        // ctx.restore();

        

    }




};


