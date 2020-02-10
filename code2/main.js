// create canvas
const canvas = document.querySelector('#backgroundCanvas');
// determine width and height variables
canvas.width = window.innerWidth; 
canvas.height = window.innerHeight;
// set context of animation
const ctx = canvas.getContext('2d');


window.onload = function(){ 
    window.requestAnimationFrame(animate); 
    velocityCheck(); // character speed
    fadeOut();
    hurricane(); // creates rain objects and adds to array  
    // ambientSounds.play();
}

let Speed = [0];
let killerspeed = 0;
function speedcheck(){
    Speed.push(Number(velocity.toFixed(2)));
    Speed.sort(function(a,b){return b-a});
    killerspeed = Speed[0];
}

let frameRate = 0;

function animate(){
    let loop = window.requestAnimationFrame(animate);
    ctx.clearRect(0,0,canvas.width, canvas.height);
    frameRate++;  
    // persuit();
    if (killerspeed < 4.8){ //runs only if speed is too high
        if(KeepersPath < 633) {
            charMovement(); // character movement
            lanternDraw();  // draws lantern taken by keeper
            lightHouseEnd(); // endgoal and movement of setting
            storm(); // draws rain
            darknessBreaker();  // flame intensity indicator
            fadeOut();  //TESTS to fadeouts
            speedcheck();  // speed indicator
            thunderstorm();
            deathbytornado()
        } else if (KeepersPath = 633){
            arrival();  // arrival screen
            // thunderstorm(); // thunder at arrival screen
        } 
    } else if (killerspeed = 4.8){
        deathBySpeed(); 
        villainDance(frameRate);//if speed is too high 
    } 
}
// let ambientSounds = new sound("/module1/project1/sounds/thunderstorm-sound-effect.mp3");
// Lighthouse is at distance 685
// killerspeed = 4.8



