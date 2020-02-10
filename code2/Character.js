  //   Character Rendering:
let keeper = new Image()
keeper.src = 'images/character/keeper2.png'
let keeperWidth = 63.88// 575px width
let keeperHeight = keeper.height //0px height

// let walk = 0;
let counter = 0;
let canvasPositionX = 500; 
let canvasPositionY = 590; 

function charMovement(){     
    let frame = Math.floor(counter % 9); //0, 1, 2, 3, 4, 5, 0, 1, 2, 3, ... 
    let step = frame*63.88; //0, 200, 400, 600, 800, 1000, 1200, 1400, 0, 200, ... 
    ctx.clearRect(0,0,canvas.width, canvas.height);
    // ctx.
    ctx.drawImage(keeper, step, 0, keeperWidth, keeperHeight, canvasPositionX, canvasPositionY, 80, 90)
}
  // Game engine
    // accelerator calculator. 
    // If character is going too fast, torch dies.
    // velocity = change in x over counter of time, 
    // while keypress right, generate array with digits that get summed into v (velocity). 
    // upon release, array is emptied.
    // if V > 5km/h,

let velocity = 0;
let distance = 100;
let KeepersPath = 0;

// right movement
document.onkeydown = function(e) { 
  switch (e.keyCode) { 
      case 39: velocity+=0.05; lampy-=0.11; KeepersPath+=1; 
      canvasPositionY-=0.11; positionIn-=5; 
      counter+=1; distance-=velocity;   
    //   console.log(`${distance} left`);  
      break;
  } }
document.onkeyup = function(e) { 
  switch (e.keyCode) { 
      case 39: velocity = 0; counter=0; ctx.globalAlpha= 1; break;
  } }

//   LEFT MOVEMENT
//   document.onkeydown = function(e) { 
//     switch (e.keyCode) { 
//         case 37: velocity+=0.05;  positionIn-=5; counter+=1; distance+=velocity; console.log(`${distance} left`);  break;
//     } }
//   document.onkeyup = function(e) { 
//     switch (e.keyCode) { 
//         case 37: velocity = 0; counter=0; break;
//     } }
  
function velocityCheck(){
    console.log(velocity);
  if (velocity > 0 && velocity <1.5){
    positionIn-=1;
  } else if (velocity > 1.5 && velocity <4){
    positionIn-=2;
    counter+=3;   
  } else if (velocity > 4.5){
    // console.log("DEATH", distance);
  } }

  // GAME OVER
  let gameOver = new Image();
    gameOver.src = 'images/gameOverScreen.png'
    function deathBySpeed(){
      ctx.drawImage(gameOver, (canvas.width/2-220), 0, );
      canvas.style.opacity= "1";
      document.onkeydown = function(e) { 
        switch (e.keyCode) { 
            case 32: location.reload();   
            break;
        } }
    }

