class Bricks {
    constructor(x,y) {
        this.l = 160; // largeur 
        this.h = 50;  // hauteur
        this.paddingRight = 22; // espace à droite du rect
        this.paddingBottom = 10; // espace en dessous du rect
        this.x = x; // position x
        this.y = y; // position y
        
        this.color = 'red';
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x+this.paddingRight, this.y+this.h+this.paddingBottom, this.l, this.h);
        ctx.closePath();
                
    }


}


