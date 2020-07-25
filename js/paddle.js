class Paddle {
    constructor() {

        this.l = 370;
        this.h = 30;
        this.x = (W - this.l) /2;
        this.y = H-90;
        this.color = 'blue';
        this.dx = 7;
        
        this.r = this.x + this.l;
        this.b = this.y + this.h;
        this.radius = 10;

        // Commun yeux
        this.eyescolor = "pink"
        this.eyeradius = 10
        
        // Oeil gauche
        this.xLeftEye = this.x + 20
        this.yLeftEye = this.y + 30;


    }
    


    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.moveTo(this.x+this.radius, this.y);
        ctx.lineTo(this.r-this.radius, this.y);
        ctx.quadraticCurveTo(this.r, this.y, this.r, this.y+this.radius);
        ctx.lineTo(this.r, this.y+this.h-this.radius);
        ctx.quadraticCurveTo(this.r, this.b, this.r-this.radius, this.b);
        ctx.lineTo(this.x+this.radius, this.b);
        ctx.quadraticCurveTo(this.x, this.b, this.x, this.b-this.radius);
        ctx.lineTo(this.x, this.y+this.radius);
        ctx.quadraticCurveTo(this.x, this.y, this.x+this.radius, this.y);
        ctx.fill();
        ctx.closePath();

  

      }
    
        

}


