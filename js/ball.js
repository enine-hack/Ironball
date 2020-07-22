class Ball {
    constructor() {
        this.x = W/2;
        this.y = H-115;
        this.dx = 5;
        this.dy = -5;
        this.radius = 20;
        this.color = 'yellow';
        this.colortrainee = 'rgba(255,255,255,0.3)';
        this.decalagetrainee = 10;
        
        
        

    }

    draw() {
        // Tracé de la balle
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();

        // // Tracé de la trainee de la balle
        // ctx.save();
        
        // ctx.beginPath();
        // ctx.arc(this.x - this.decalagetrainee, this.y - this.decalagetrainee, this.radius, 0, 2*Math.PI);
        // ctx.fillStyle = this.colortrainee;
        // ctx.closePath();
        
        //        // on va au centre de la balle
        // // ctx.translate(this.x,this.y)
        // // // on pivote
        // // ctx.rotate(8*Math.PI/10)
        // // on trace le rectangle depuis le centre pivoté
        

        // ctx.restore();

        

    }




};


