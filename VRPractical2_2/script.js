let sun;
let scene;
let pokeball;
let car;
let rocket;
let dude;


window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  pokeball = document.querySelector("#pokemonball");
  car = document.querySelector("#car");
  rocket = document.querySelector("#rocket");
  dude = document.querySelector("#dude");
  sun = document.querySelector("#sun");
  sun.a = 0;
  sun.da = .011;
  dude.a = 0;
  dude.da = .001;
  rocket.a = 0;
  rocket.da = .1;
  car.a = 0;
  car.da = -.1;
  pokeball.a = 0;
  pokeball.da = 1;

  loop();
})

function loop(){
  pokeball.a += pokeball.da;
  dude.a += dude.da;
  rocket.a += rocket.da;
  car.a += car.da;
  sun.a += sun.da;
  sun.setAttribute("opacity", sun.a);
  pokeball.setAttribute("rotation",{x:pokeball.a, y:0, z:0});
  dude.setAttribute("scale", {x:dude.a, y:dude.a, z:dude.a});
  car.setAttribute("position", {x:car.a, y:0, z:-8});
  rocket.setAttribute("position", {x:3, y:rocket.a, z:-4});
  window.requestAnimationFrame(loop);
}