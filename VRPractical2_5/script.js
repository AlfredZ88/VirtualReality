/* Note
   Feel free to use classes from past classwork and practical activities.  You may also create new classes.  
   If you wish to use objects from Unit 1, you can use cloneNode( ) to duplicate them.  As an added bonus you 
   can also incorporate classes that have animations integrated into them. 
*/

/* Challenge 1
   Add appropriate classes to use as objects in your maze.  Choose characters to represent these objects and 
   position them in the maze.   In Challenge 3 and 4, you will generate the maze along with any other object 
   you chose to put in the maze.  Get Creative!
*/
let maze = [
  "x--xxxxxxxxxxxxxxxxxxxxx",
  "x-----x--------x-------x",
  "xxxxx-xxxxxxxx-xxx-xxx-x",
  "x---x------------xxxxx-x",
  "x-x-xxxxxxxxxxx-xxxx-xxx",
  "x-x-x--x--------x-x-xx-x",
  "x-xxxx-xxxxxxxx------x-x",
  "x--x-x--------x-x--x-x-x",
  "x-xx-x--xxxxx-xxxxxx-x-x",
  "x----x-xx---x--x-----x-x",
  "x-xx-x-x--xxx--xxxx--x-x",
  "x--x---x---x----x-x--x-x",
  "x--xxxxx--xx-xxxx-x--x-x",
  "x-xx------x--x-x--x--x-x",
  "x--xx-xxxxx--x-x--x--x-x",
  "xx-x--x---x----xx-xx-x-x",
  "x--x--x--xx--------x-x-x",
  "x--x--x--x--xxxx-x---x-x",
  "x-xx--x--x--x--x-x-x-x-x",
  "x-x---------x--x-x--xx-x",
  "x-----x---xxx--x-xx--x-x",
  "x---xxxxxx------x-xxxx-x",
  "x----------------------x",
  "xxxxxxxxxxxxxxxxxxxxx--x",
];

/* Challenge 2
   Add appropriate classes to use as objects in your map.  Choose characters to represent these objects and position them on the map.   In Challenge 5 and 6, you will generate the map using the character representation of the objects you chose to place in the world. Get Creative!
*/

let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;
let ufos = [];
let mechs = [];

window.addEventListener("DOMContentLoaded",function() {
  mech = document.getElementById("mech-1");
  scene = document.querySelector("a-scene");


  for(let r = 0; r < maze.length; r++){
    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "x"){
        new Wall(c * 5,0,r*5)
      }
      }
    /* Challenge 3
      Choose a technique to traverse the each character in the string.
    */ 
    /* Challenge 4
       Make an appropriate decision based on the characters you chose to enter 
       in the maze.  Create an instance of the corresponding object.
    */
  }
  for(let i = 0; i < 150; i++){
    let x = rnd(-150,200);
    let y = rnd(40, 70);
    let z = rnd(-150,200);
    let ufo = new UFO(x, y, z);
    ufos.push(ufo);
  }

  for(let i = 0; i < 25; i++){
    let x = rnd(-150,200);
    let y = rnd(40, 70);
    let z = rnd(-150, 200);
    let mech = new Mech(x, y, z);
    mechs.push(mech);
  }
  loop();

function loop(){
  for(let m of mechs){
    m.launch();
  }
  window.requestAnimationFrame( loop );
}

scene = document.querySelector("a-scene");
})