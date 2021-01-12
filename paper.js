class paper extends base{
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
     }

     Matter.Bodies.circle(100, 400, 0.5, [options], [maxSides])
    display(){
      var pos = this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
     super.display();
  
      
    }
  }