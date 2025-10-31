let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;
let mechs = [];
let mech;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  
  mech = document.getElementById("mech-1");
 
  for(let i = 0; i < 20; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let m = new Mech(x, 13, z);
    mechs.push(m);
  }
  loop();
})
function loop(){
   for(let m of mechs){
     m.launch();
   }

  window.requestAnimationFrame( loop );
}
