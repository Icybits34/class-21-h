class ground{
    constructor(x,y,w,h){
        var ground_options={
         isStatic:true
        }
      this.x=x
      this.y=y
      this.w=w
      this.h=h  
      this.body = Bodies.rectangle(x,y,w,h,ground_options)
      World.add(world,this.body)

    }
    display(){
       var groundPosition = this.body.position
       push()
       translate(groundPosition.x,groundPosition.y)
       rectMode(CENTER)
       strokeWeight(4)
       fill(255,255,0)
       rect(0,0,this.w,this.h)
       pop()
    }
}
