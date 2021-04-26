class Ground{
    constructor(x,y,w,h){
        
        this.width = w;
        this.height = h

        this.body = Matter.Bodies.rectangle(x,y,w,h,{isStatic:true});
        Matter.World.add(world,this.body);

    }

    display(){

        push()
        rectMode(CENTER);
        translate(this.body.position.x,this.body.position.y)
       
        rect(0,0,this.width,this.height)
        pop()
    }
}