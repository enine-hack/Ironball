class Bricks {
    constructor(x,y) {
        this.l = 160; // largeur 
        this.h = 50;  // hauteur
        this.paddingRight = 22; // espace à droite du rect
        this.paddingBottom = 10; // espace en dessous du rect
        this.x = x; // position x
        this.y = y; // position y
        
        this.color = '#ba1c1c';
        this.hitted = false;
        
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x+this.paddingRight, this.y+this.h+this.paddingBottom, this.l, this.h);
        ctx.closePath();
    }

}

// code pour disparition grossie + shadow
        // this.disappearing = false;
        // this.disappearingStep = 0; // grossi
    // draw() {
    //     if (this.disappearing) {
    //         switch (disappearingStep) {
    //           case 0:
    //             ctx.beginPath()
    //             ctx.fillStyle = 'green';
    //             ctx.closePath();
    //             break;
    //           case 1:
    //             ctx.beginPath()
    //             ctx.fillStyle = 'pink';
    //             ctx.closePath();
    //             break;
    //         }
    //         this.disappearingStep++;

    //     } else {
    //         ctx.beginPath();
    //         ctx.fillStyle = this.color;
    //         ctx.fillRect(this.x+this.paddingRight, this.y+this.h+this.paddingBottom, this.l, this.h);
    //         ctx.closePath();
    //     }
                
    // }