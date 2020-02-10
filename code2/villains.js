// VILLAIN 
let persuitVillan = new Image();
persuitVillan = "/module1/project1/images/Villain/skeletonSpritemovement.png";
let persuitHeight = 69;
let persuitWidth = 64.22;

let movecounter = 0;
// let 
function persuit(){
    // let frame=Math.floor(movecounter % 9); 
    // let step = frame*persuitWidth;
    ctx.drawImage(persuitVillan, 100, 100)
    // movecounter+=1;
};

// VILLAIN DANCE MOVES
let villain1 = new Image();
villain1.src = "/module1/project1/images/Villain/skeletonSpriteDance.png";
let villainWidth = 64.57;
let villainHeight = 65.25;
let dance = 0;
// let danceCounter = 0;
let skeletonPositionX = (400);
let skeletonPositionY = 450;
let verticalMovement = 0;
let verticalFrame = 0;
let viewframe = 0;

function villainDance(danceCounter){
    viewframe = Math.floor(danceCounter%7);
    let steps = viewframe*villainWidth; // x position
    // let verticalMovement = Math.floor(dance%4);
    if(viewframe == 0){
        verticalMovement = Math.floor(dance%3);
        verticalMovement++;
        verticalFrame = verticalMovement*villainHeight;
    }
    ctx.drawImage(villain1, steps, verticalFrame, villainWidth, villainHeight, skeletonPositionX, skeletonPositionY, 100, 125);
    danceCounter+=1;
        dance+=1;
}
