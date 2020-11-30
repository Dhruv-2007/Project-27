class Rope{
    constructor(bodyA, bodyB,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetX, y:this.offsetY},
            length: 200
        }
        this.string = Matter.Constraint.create(options);

        World.add(world, this.string);
    }

    display(){
        var pointA = this.string.bodyA.position;
        var pointB = this.string.bodyB.position;

        strokeWeight(4);
        fill("black");
        line(pointA.x, pointA.y, pointB.x+this.offsetX, pointB.y+this.offsetY);
    }
    
}


