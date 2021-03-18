class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        //this.sling1=loadImage("sprites/sling1.png");
        //this.sling2=loadImage("sprites/sling2.png");
        //this.sling3=loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(){
        this.sling.bodyA = body;
    }
    
    display(){
        image(this.sling1,200,100);
        image(this.sling2,170,100);
        

        if(this.sling.bodyA){

            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            if (pointA.x<220){
            strokeWeight(4);
            line(pointA.x-10, pointA.y+10, pointB.x-10, pointB.y+30);
            line(pointA.x+25, pointA.y+10, pointB.x+20, pointB.y+30);
            image(this.sling3,pointA.x-35,pointA.y-20,10,30);
            }
            else{
                strokeWeight(4);
                stroke(48, 22, 8);
                line(pointA.x-10, pointA.y+10, pointB.x-10, pointB.y+30);
                line(pointA.x+25, pointA.y+10, pointB.x+20, pointB.y+30);
                image(this.sling3,pointA.x+25,pointA.y,10,30);    
            }
        }   
    }
    
}