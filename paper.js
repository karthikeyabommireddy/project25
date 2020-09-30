class Paper{
    constructor(x,y,r){
        this.x=x;
        this.y=y;
        this.r=r;
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
this.body=Bodies.circle(this.x,this.y,this.r,options);
    }
    display(){
      push();
      fill("blue");
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r)
        pop();
    }
}
