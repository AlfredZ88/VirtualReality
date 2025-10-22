class House{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    let body = document.createElement("a-box");
    body.setAttribute("color", "red");
    body.setAttribute("position","0, -3, 0");
    body.setAttribute("height", "3");
    body.setAttribute("width", "3");
    body.setAttribute("depth", "3");
    this.obj.append(body);
  
    let roof = document.createElement("a-cylinder");
    roof.setAttribute("segments-radial", "3");
    roof.setAttribute("color", "blue");
    roof.setAttribute("rotation", "30 0 90");
    roof.setAttribute("radius", "2.5");
    roof.setAttribute("height", "3.4");
    roof.setAttribute("position", "0, -.8, 0");
    this.obj.append(roof);
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
}