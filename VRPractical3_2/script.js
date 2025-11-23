let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;
let car, UFO = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  car = document.getElementById("car");
  UFO = document.getElementById("UFO");
  car.g = -15;
  car.gr = .01;
  UFO.y = 10;
  UFO.dy= -.1;
  UFO.fall = false;
  
  car.addEventListener("click", function(){
    car.drive = true;
  })

  UFO.addEventListener("mouseenter", function(){
    UFO.fall = true;
  })

  loop();
})

function loop(){
  // click the body of the car to make it drive
  if(car.drive){
    car.g += car.gr;
    car.setAttribute("position", {x:car.g, y:1, z:0});
  }
  
  if(UFO.fall){
    UFO.y += UFO.dy
    UFO.setAttribute("position",{x:0, y:UFO.y, z:0})
  }
  window.requestAnimationFrame(loop);
}