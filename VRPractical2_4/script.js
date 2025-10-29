let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;
let rockets = [];
let ufos = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 

   for(let i = 0; i < 100; i++){
    let x = rnd(-20,30);
    let z = rnd(-20,30);
    let y = rnd(-5,-10);
    let rocket = new Rocket(x, y, z);
    rockets.push(rocket);
  }

  for(let i = 0; i < 15; i++){
    let x = rnd(-20,30);
    let y = rnd(30, 50);
    let z = rnd(-20,30);
    let ufo = new UFO(x, y, z);
    ufos.push(ufo);
  }

  for(let i = 0; i < 20; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let tree = new Tree(x, -1 , z);
    tree.scale(rnd(1,4));
  }

  loop();
})

function loop(){
  for(let rocket of rockets){
    rocket.launch();
  }

  for(let ufo of ufos){
    ufo.invade();
  }

  
  window.requestAnimationFrame( loop );
}
