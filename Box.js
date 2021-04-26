class Box{
    constructor(x,y,w,h){
        
        var options = {
            'restitution':0.4
        
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
        this.visibility = 255;
        
        World.add(world, this.body);
    }

    display(){

        if(this.body.speed<5)
        {
            var pos =this.body.position;
            var angle = this.body.angle;
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0, 0, this.width, this.height);
            pop();
        }
        else{

            World.remove(world, this.body);
            push();
            this.visibility = this.visibility -2;
            tint(255,this.visibility)
            pop();
        }
        
    }
    scoreVal(){
        if(this.visibility <0 && this.visibility>-5){
            score +=10;
        }
    }
}