class Rocket{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = Math.random() * .5 + .1;

    let tip = document.createElement("a-cone");
    tip.setAttribute("color","red");
    tip.setAttribute("position","0 0 -2");
    tip.setAttribute("height","1");
    tip.setAttribute("radius-top", "0");
    tip.setAttribute("radius-bottom", ".5");
    this.obj.append( tip );
  
    let body = document.createElement("a-cylinder");
    body.setAttribute("position","0 -1.5 -2");
    body.setAttribute("color","gray");
    body.setAttribute("radius","0.5");
    body.setAttribute("height", "2");
    this.obj.append( body );

    let fire = document.createElement("a-cone");
    fire.setAttribute("radius-top", "0");
    fire.setAttribute("radius-bottom", ".25");
    fire.setAttribute("height", "2");
    fire.setAttribute("color", "orange");
    fire.setAttribute("position", "0 -3.5 -2");
    fire.setAttribute("rotation", "-180 0 0");
    this.obj.append(fire);
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
    }
    
    launch(){
    this.y += this.dy;
    this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z})
  }

}
