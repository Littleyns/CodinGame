/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
let initialTx = parseInt(inputs[2]); // Thor's starting X position
let initialTy = parseInt(inputs[3]); // Thor's starting Y position

// game loop
while (true) {
    const remainingTurns = parseInt(readline()); 
  if(lightX == initialTx && lightY < initialTy){
console.log('N');
initialTy-=1;
  }
  if(lightX == initialTx && lightY > initialTy){
      console.log('S');
      initialTy+=1;
  }
  if(lightY == initialTy && lightX > initialTx){
    console.log('E');  
    initialTx+=1;
  }
  if(lightY == initialTy && lightX < initialTx){
    console.log('W'); 
    initialTx-=1; 
  }
  if(lightX > initialTx && lightY < initialTy){
     console.log('NE'); 
     initialTx+=1;
     initialTy-=1;
  }
  if(lightX < initialTx && lightY < initialTy){
      console.log('NW');
      initialTx-=1; 
      initialTy-=1;
  }
  if(lightX > initialTx && lightY > initialTy){
    console.log('SE');  
    initialTx+=1;
     initialTy+=1;
  }
  if(lightX < initialTx && lightY > initialTy){
      console.log('SW');
       initialTy+=1;
      initialTx-=1; 
  }
    
}