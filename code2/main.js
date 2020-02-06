// create canvas
const canvas = document.querySelector('#backgroundCanvas');
// determine width and height variables
canvas.width = window.innerWidth; 
canvas.height = window.innerHeight;
// set context of animation
const ctx = canvas.getContext('2d');



window.onload = function(){ 
    window.requestAnimationFrame(animate);   
}


velocityCheck(); // character speed
let Speed = [0];
let killerspeed = 0;
// var killerSpeed = ;

function speedcheck(){
 
    Speed.push(Number(velocity.toFixed(2)));
    Speed.sort(function(a,b){return b-a});
    killerspeed = Speed[0];
    console.log(killerspeed)
}

function animate(){
    let loop = window.requestAnimationFrame(animate);
    ctx.clearRect(0,0,canvas.width, canvas.height);
    if (killerspeed < 4.8){
        if(KeepersPath < 685) {
            charMovement(); // character movement
            lanternDraw();
            lightHouseEnd(); // testing
            storm(); // draws rain
            hurricane(); // creates rain objects and adds to array
            thunderstorm(); // creates thunder
            darknessBreaker(); 
            fadeOut();
            speedcheck();
        } else if (KeepersPath = 685){
            arrival();
            thunderstorm();
        } 
    } else if (killerspeed = 4.8){
        deathBySpeed()
    }
}

// Lighthouse is at distance 685

// delay ending
// DEATH
