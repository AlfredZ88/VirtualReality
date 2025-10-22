class Cloud{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    let sphere = document.createElement("a-sphere");
    sphere.setAttribute("position","4 2 0");
    this.obj.append( sphere );
  
    let sphere1 = document.createElement("a-sphere");
    sphere1.setAttribute("position", "4.8, 2, 0");
    this.obj.append( sphere1 );

    let sphere2 = document.createElement("a-sphere");
    sphere2.setAttribute("position", "5.8, 2, 0");
    sphere2.setAttribute("color", "white");
    this.obj.append(sphere2);
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
}