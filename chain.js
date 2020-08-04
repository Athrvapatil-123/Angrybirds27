class Chain{
constructor(bodyA,bodyB){
var option={
    bodyA:bodyA,
    bodyB:bodyB,
    stiffnes:0.04,
    length:10

}
this.Chain=Constraints.create(option)
World.add(world,this.Chain)
}
display(){
    var positionA=this.Chain.bodyA.position;
    var positionB=this.Chain.bodyB.position;
    push()
line(positionA.x,positionA.y,positionB.x,positionB.y)
}

} 