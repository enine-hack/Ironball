class Bricks {
    constructor() {
        this.x = 12; // position x
        this.y = 12; // position y
        this.l = 163; // largeur
        this.h = 50;  // hauteur
        this.e = 3; // epaisseur
        
        this.color = '#cf0000';
    }

    draw() {
        for (let i = 0; i < 6; i++) { // pour chaque colonne
            for(let j = 0; j < 10; j++) { // pour chaque ligne
                ctx.fillStyle = this.color;
                ctx.fillRect(this.x + i * this.l, this.y + j * this.h, this.l, this.h);
                ctx.lineWidth = this.e;
                ctx.strokeStyle = '#262626'
                ctx.strokeRect(this.x + i * this.l, this.y + j * this.h, this.l, this.h);
                
        }
    }
    }
}


    // burst() {

    // }