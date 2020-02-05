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
if (velocity > 4.5){
    ctx.globalAlpha = 0.6;
};

function animate(){
    let loop = window.requestAnimationFrame(animate);
    ctx.clearRect(0,0,canvas.width, canvas.height);
    console.log(velocity);

    if(KeepersPath < 685) {
        charMovement(); // character movement
        lanternDraw();
        lightHouseEnd(); // testing
        storm(); // draws rain
        hurricane(); // creates rain objects and adds to array
        thunderstorm(); // creates thunder
        darknessBreaker(); 
    } else if (KeepersPath>=50){
        arrival()
    }


}

// Lighthouse is at distance 685