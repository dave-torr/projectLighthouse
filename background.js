// enter site, 
window.onload = function(){ 
    startGame()
    
}

const canvas = document.querySelector('#backgroundCanvas');

canvas.width = window.innerWidth; //Set canvas width and height
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

function startGame(){
    window.requestAnimationFrame(animate);
}

var rainDensity = 800;
// alter rain density and speed of movement when speed reaches certain objectives.
let rain =[];
function storm (){
  rain.forEach(drop =>{
    ctx.fillStyle= 'white';
    ctx.fillRect(drop.x, drop.y+=10, drop.width, drop.height)
  })
}
function hurricane(){
  setInterval(()=>{
    let drop = {
      x: (Math.random()*canvas.width),
      y: 0,
      width: (Math.random()*1),
      height: (Math.random()*15),
    }
    rain.push(drop)
  }, rainDensity);    
  }


  // Game engine
    // accelerator calculator. 
    // If character is going too fast, torch dies.
    // speed = change in x over counter of time, 
    // while keypress right, generate array with digits that get summed into v (velocity). 
    // upon release, array is emptied.
    // if V > 5km/h,
let speed = 0;
let distance = 1000;
document.onkeydown = function(e) { 
  switch (e.keyCode) { 
      case 39: speed+=0.05; distance-=speed; console.log(`${distance} left`);  break;
  } }
document.onkeyup = function(e) { 
  switch (e.keyCode) { 
      case 39: speed = 0; break;
  } }
  
function speedCheck(){
  if (speed > 0 && speed <2){
  console.log("mov 1")
  } else if (speed > 2 && speed <4){
    console.log("mov 2");
    rainDensity/3;
  } else if (speed > 4){
    console.log("DEATH")
  } }

// Distance counter:
// a total number, that takes away the speed varable form total.



//   let img;
// function thunder(){
//     setInterval(() => {
//         img = thunderStorm[~~(Math.random() * thunderStorm.length)];
//     }, 3000+Math.random()*7000)
//     // let th = ctx.drawImage(img, 0, 0, canvas.width-canvas.width/8, canvas.height- canvas.height/6);
//     // setTimeout(() => {
//     //     // ctx.clearRect(0,0,canvas.width, canvas.height)
//     //     window.cancelAnimationFrame
//     // }, 2000);
// }

// var thunder1 = new Image(369, 218);
// thunder1.src = '/module1/project1/images/backgrounds/Thunder/thunder1.png';
// var thunder2 = new Image(365, 210);
// thunder2.src = '/module1/project1/images/backgrounds/Thunder/thunder2.png';
// var thunder3 = new Image(447, 319);
// thunder3.src = '/module1/project1/images/backgrounds/Thunder/thunder3.png';
// var thunder4 = new Image(319, 447);
// thunder4.src = '/module1/project1/images/backgrounds/Thunder/thunder4.png';
// var thunder5 = new Image(365, 210);
// thunder5.src = '/module1/project1/images/backgrounds/Thunder/thunder5.png';
// var thunder6 = new Image(218, 369);
// thunder6.src = '/module1/project1/images/backgrounds/Thunder/thunder6.png';

// var thunderStorm = [thunder1, thunder2, thunder3, thunder4, thunder5, thunder6];

    // ctx.drawImage(this.thunder1, canvas.width, 0, 369, 218);
    // ctx.drawImage(this.thunder2, 0, 0, 365, 210);
    // ctx.drawImage(this.thunder3, 0, 0, 447, 319);
    // ctx.drawImage(this.thunder4, canvas.width, 0, 319, 447);
    // ctx.drawImage(this.thunder5, canvas.width, 0, 365, 210);
    // ctx.drawImage(this.thunder6, 0, 0, 218, 369);

// var lighthouse = new Image(728,532);
// lighthouse.src = "/module1/project1/images/backgrounds/animation-film-stop-motion-lighthouse.png";

function animate(){
    let loop = window.requestAnimationFrame(animate);
    ctx.clearRect(0,0,canvas.width, canvas.height);
    // img ? ctx.drawImage(img, 0, 0, canvas.width-canvas.width/8, canvas.height- canvas.height/6) :null;
    storm();
    hurricane();
    speedCheck()
    // thunder();
}





 

// can functions be called from other js documents?
// can excecutions be stopped for functions in other documents?

