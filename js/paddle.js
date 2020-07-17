class Paddle {
    constructor() {

        this.l = 160;
        this.h = 25;
        this.x = (W - this.l) /2;
        this.y = H-90;
        this.color = 'blue';

    }
    
    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.l, this.h);
    }


        

}


