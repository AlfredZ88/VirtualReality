class UFO{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
    this.x = x;
    this.y = y;
    this.z = z;
    this.dz = 1;
    this.dy = -.1;

  
    let body = document.createElement("a-torus");
    body.setAttribute("position","0 0 0");
    body.setAttribute("color","gray");
    body.setAttribute("rotation", "90 0 0")
    body.setAttribute("height", "2");
    this.obj.append( body );

    let pit = document.createElement("a-sphere");
    pit.setAttribute("position", "0 .4 0");
    pit.setAttribute("color", "#39FF14");
    pit.setAttribute("radius", ".85")
    this.obj.append( pit );

    let beam = document.createElement("a-cone");
    beam.setAttribute("rotation", "0 0 0");
    beam.setAttribute("position", "0 0 0");
    beam.setAttribute("color", "green");
    beam.setAttribute("opacity", ".7")
    beam.setAttribute("height", "2.2");
    beam.setAttribute("radius-bottom", "1.2")
    this.obj.append( beam );

  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
    }

    invade(){
    this.y += this.dy;
    this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
    if(this.y < 0){
        this.y = 0;
    }
    }

 }
    