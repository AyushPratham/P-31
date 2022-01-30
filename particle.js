class particle{
    constructor(x,y){
        var options = {
            restitution:1
        }
        this.r = 8;
        this.body=Bodies.circle(x,y,8,options);
        World.add(world,this.body);
    }
    display(){
        fill('red')
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,8,8)

    }

}