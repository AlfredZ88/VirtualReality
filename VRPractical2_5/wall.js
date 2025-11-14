class Wall{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;

    this.obj = document.createElement("a-box");
    this.obj.setAttribute("height", "20");
    this.obj.setAttribute("width", "5");
    this.obj.setAttribute("depth", "5");
    this.obj.setAttribute("src", "walls.avif");
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append(this.obj);
    }
}