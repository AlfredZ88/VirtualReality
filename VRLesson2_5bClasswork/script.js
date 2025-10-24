let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, snowmen = [ ];
let clouds = [ ];
let snowflake = [];


window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 20; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let tree = new Tree(x, 0 , z);
    tree.scale(rnd(1,4));
  }
  
  for(let i = 0; i < 20; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let snowman = new Snowman(x,z);
    snowmen.push(snowman);
  }



  //Challenge 1: Create an array to store 20 clouds in random positions
  for(let i = 0; i < 20; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let c = new Cloud(x, 10, z);
    clouds.push(c);
  }
  //Challenge 3: Create an array to store 100 snowflakes in random positions
  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let s = new Snowflake(x, 10, z);
    snowflake.push(s);
  }
  loop();
})

function loop(){
  for(let snowman of snowmen){
    snowman.spin();
  }
  for(let c of clouds){
    c.fly();
  }
  for(let s of snowflake){
    s.fall();
  }

  //Challenge 2: Traverse your array of clouds and make each cloud fly

  //Challenge 4: Traverse your array of snowflakes and make each snowflake fall
  
  window.requestAnimationFrame( loop );
}
