let maze = [
  "xoxxxxT-xxxxxooxxxooxx",
  "xo-x--x--xxxx--------x",
  "xo-x----------x--x-xxx",
  "xo-x--xxxxxxx-x--x-xox",
  "x-----xo-T-ox-x--x-x-x",
  "x-----xo-T-ox-x--x-x-x",
  "x--xxxxo-T-ox-x--x-x-x",
  "x-----xxxxxxx-x--x---x",
  "x-x-----------x--xxxxx",
  "x-xxxxxx-x-T--------xx",
  "x------x-xxxxxxxxxxxTx",
  "xxxxxxxx-oooooooooooox",
];
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let r = 0; r < maze.length; r++){
    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "x"){
        new Block(c,0,r)
      }
      else if(cols[c] == "T"){
        new Tree(c,1.5,r);
      }else if(cols[c]=="o"){
        new Rock(c,0,r)
      }
    }

  }

})