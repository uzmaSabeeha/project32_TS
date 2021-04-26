class SlingShot{

    constructor(bA,pB){

        var op = {
            bodyA:bA,
            pointB: pB,
            stiffness:0.04,
            length: 20
        }
        this.pointB = pB;
        this.sling = Matter.Constraint.create(op);
        World.add(world,this.sling);

    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(b){
        this.sling.bodyA = b;
    }

    display(){
        if(this.sling.bodyA){
            var a1 = this.sling.bodyA.position;
            var a2 = this.pointB;
            strokeWeight(4);
            line(a2.x,a2.y,a1.x,a1.y);
        }
        
    }


}
/*class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}*/