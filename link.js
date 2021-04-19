class Link {
 constructor(bodyA1,bodyB1){
  var options ={
      bodyA: bodyA1,
      bodyB: bodyB1,
      length: 50,
      stiffness: 0.5
  }
  this.link = Matter.Constraint.create(options)
  World.add(world,this.link)
 }
 display(){
     var pointA = this.link.bodyA.position
     var pointB = this.link.bodyB.position
     line(pointA.x,pointA.y,pointB.x,pointB.y)
 }
}
