class Ball {
    constructor() {
        this.x = W/2;
        this.y = H-115;
        this.dx = 5;
        this.dy = -5;
        this.radius = 20;
        this.color = '#fffc2e';
        this.colortrainee1 = 'rgba(255, 255, 255, 0.4)';
    }

    draw() {
        // Tracé de la balle
        ctx.beginPath();
        ctx.fillStyle = this.colortrainee1;
        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
            ctx.save();

        //faire changer de position de la trainee selon la direction de la balle
        //Tracé de la trainee de la balle
        if(ball.x += ball.dx) {

            ctx.beginPath();
            ctx.arc(this.x, this.y , this.radius, 0, 2*Math.PI);
            ctx.fillStyle = this.color;
            ctx.closePath();
            ctx.fill()
        }
    }
};


