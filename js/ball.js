class Ball {
    constructor() {
        this.x = W/2;
        this.y = H-115;
        this.dx = 5;
        this.dy = -5;
        this.radius = 20;
        this.color = '#fffc2e';
        this.colortrainee1 = 'rgba(255, 252, 46, 0.7)'
        this.colortrainee2 = 'rgba(255, 252, 46, 0.5)'
        this.colortrainee3 = 'rgba(255, 252, 46, 0.3)' 
        this.decalagetrainee = 3;

        this.direction
        
        // 'rgba(255,255,255,0.3)';
        

    }

    draw() {
        // Tracé de la balle
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
            ctx.save();


        // Tracé de la trainee de la balle
        // if(this.x + this.dx > W-this.x+this.dx) {
        //     ctx.beginPath();
        //     ctx.arc(this.x - this.decalagetrainee, this.y + this.decalagetrainee, this.radius, 0, 2*Math.PI);
        //     ctx.fillStyle = this.colortrainee1;
        //     ctx.closePath();
        //     ctx.fill()
            
        // } else if(this.x+this.dx < W-this.x+this.dx){
        //     ctx.beginPath();
        //     ctx.arc(this.x+this.dx + this.decalagetrainee, this.y + this.decalagetrainee, this.radius, 0, 2*Math.PI);
        //     ctx.fillStyle = this.colortrainee1;
        //     ctx.closePath();
        //     ctx.fill()
                
        // }
        // ctx.save();

        // if(this.x+this.dx > W-this.x+this.dx) {
        //     ctx.beginPath();
        //     ctx.arc(this.x - this.decalagetrainee*2, this.y + this.decalagetrainee*2, this.radius, 0, 2*Math.PI);
        //     ctx.fillStyle = this.colortrainee2;
        //     ctx.closePath();
        //     ctx.fill()
            
        // } else if(this.x+this.dx < W-this.x+this.dx){
        //     ctx.beginPath();
        //     ctx.arc(this.x + this.decalagetrainee*2, this.y + this.decalagetrainee*2, this.radius, 0, 2*Math.PI);
        //     ctx.fillStyle = this.colortrainee2;
        //     ctx.closePath();
        //     ctx.fill()
                
        // }
        // ctx.save();

        // if(this.x+this.dx > W-this.x+this.dx) {
        //     ctx.beginPath();
        //     ctx.arc(this.x - this.decalagetrainee*3, this.y + this.decalagetrainee*3, this.radius, 0, 2*Math.PI);
        //     ctx.fillStyle = this.colortrainee3;
        //     ctx.closePath();
        //     ctx.fill()
            
        // } else if(this.x+this.dx < W-this.x+this.dx){
        //     ctx.beginPath();
        //     ctx.arc(this.x + this.decalagetrainee*3, this.y + this.decalagetrainee*3, this.radius, 0, 2*Math.PI);
        //     ctx.fillStyle = this.colortrainee3;
        //     ctx.closePath();
        //     ctx.fill()
                
        // }
        // ctx.save();


}

    

};


