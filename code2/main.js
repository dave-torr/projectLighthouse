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

function animate(){
    let loop = window.requestAnimationFrame(animate);
    ctx.clearRect(0,0,canvas.width, canvas.height);

    
        velocityCheck(); // character speed
        charMovement(); // character movement
        lightHouseEnd(); // testing
        storm(); // draws rain
        hurricane(); // creates rain objects and adds to array
        thunderstorm(); // creates thunder
        darknessBreaker(); 
    if(distance > -3950) {
        
    }
}

