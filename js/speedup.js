function random(from, to) {
    return Math.floor(from + Math.random()*(to - from));
  }
  
  class speedUpItem {
    constructor() {
      this.l = 70;
      this.h = 10;
      this.x = random(0, W-this.l + 3);
      this.y = random(H/2, 3/4*H); // between 1/2 and 3/4 of H
      this.color = 'green';
        
      this.r = this.x + this.l;
      this.b = this.y + this.h;
      this.radius = 5;

      this.dx += 5;
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