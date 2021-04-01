class Ball {
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution:0.5,
            friction:0.5,
            density:1.2
        }

        this.x = x;
        this.y = y;
        this.radius = radius;

        this.body = Bodies.circle(this.x, this.y, this.radius, options)
        World.add(world, this.body)
    }

    display(){
        var ballPos = this.body.position

        push()
        translate(ballPos.x, ballPos.y)
        rectMode(CENTER)
        strokeWeight(2)
        fill("orange")
        ellipse(0,0,this.radius,this.radius)
        pop()
    }
}