class Ball {
  constructor(x, y, r) {
    var options = {
      
        'restitution':0.8,
        'friction':0.5,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y,r/2, options);
    //this.x = x;
    //this.y = y;
    this.r=r;
    
    World.add(world, this.body);
  }
  display(){
   //var pos =this.body.position;
    push();
   // translate(pos.x,pos.y);
  
    rectMode(CENTER);
    fill(255);
    ellipse(this.body.position.x, this.body.position.y, this.r, this.r);
    pop();
  }
};
