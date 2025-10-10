function rnd(l, u){
  return Math.floor(Math.random()*(u-l) + l);
}


window.addEventListener("DOMContentLoaded",function() {
  //Challenge 1: Create a variable scene for the <a-scene> component in the HTML
    let scene = document.querySelector("a-scene");

  //Challenge 2: Create a variable for <a-dodecahedron>
    let dodecahedron = document.createElement("a-dodecahedron");
 
  //Challenge 3: Change the <a-dodecahedron>'s position, radius and color
    dodecahedron.setAttribute("color","red");
    dodecahedron.setAttribute("position", {x: 0, y: 5, z: -3});
    dodecahedron.setAttribute("radius", "4");

  //Challenge 4: Add the <a-dodecahedron> to the scene
    scene.append(dodecahedron);

  /* Challenge Bonus
  1) Use a for loop to create a lot of <a-dodecahedron>
  2) Change each <a-dodecahedron>'s position to a random x, y, and z location
  3) Change each <a-dodecahedron>'s to a random color.  Hint: Use rgb( ) and string interpolation
  */

  function createDode(x, y, z){
    let entity = document.createElement("a-entity");

    let dodecahedron = document.createElement("a-dodecahedron");
    entity.append(dodecahedron);
    entity.setAttribute("position",{x:x, y:y, z:z});
    scene.append( entity );
  }


    for(let i = 0; i < 30; i++){
      let x = rnd(-20,20);
      let y = rnd(-20,20);
      let z = rnd(-20,20);
      createDode(x, y, z);
  }
})