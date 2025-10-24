class Snowflake{
  constructor(x,y,z){
    // Challenge 5: Create animation variables y and dy for the Snowflake to fall.  Set them to appropriate values.
    this.y = y;
    this.x = x;
    this.z = z;
    this.dy = -.05;
    this.obj = document.createElement("a-sphere");
    this.obj.setAttribute("radius", .15);
    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
    
    scene.append( this.obj );
  }
  fall(){
    this.y += this.dy;
    this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
  }
  //Challenge 6: Create a function fall() which decreases y by dy and updates the Snowflake object to that y position
}