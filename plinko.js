class plinko{
    constructor(x,y){

        var options={
            restitution:1,
            friction:0,
            isStatic:true,
        }
        this.r=10;
        this.body=Bodies.circle(x,y,10,options);
        World.add(world,this.body);
    }
    display(){
        fill("white")
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,10,10);

    }
}