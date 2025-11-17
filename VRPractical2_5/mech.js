class Mech{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.dz = .2;
        this.obj = mech.cloneNode(true);

        this.obj.setAttribute("position",{x:x,y:y,z:z});
        this.obj.setAttribute("rotation", "45 0 0")
        scene.append(this.obj);
    }
    launch(){
        this.z += this.dz;
        this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
        
    }

}
