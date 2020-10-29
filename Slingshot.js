class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 5
        }
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(48,22,8);
            if(pointA.x <200){
            image(this.sling3,pointA.x-27.5,pointA.y-10,15,30);
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x+20,pointA.y,pointB.x+20,pointB.y);
            strokeWeight(7);
        }else{
            image(this.sling3,pointA.x+26.5,pointA.y-15,15,30);
            line(pointA.x+20, pointA.y, pointB.x+10, pointB.y);
            line(pointA.x-20,pointA.y,pointB.x-20,pointB.y);
            strokeWeight(2);
        }

        }
        image(this.sling1,225,25);
        image(this.sling2,195,22.5);

    }
    
}