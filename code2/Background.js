// // second Canvas
// const canvas2 = document.querySelector('#winCanvas');
// // determine width and height variables
// canvas2.width = window.innerWidth; 
// canvas2.height = window.innerHeight;
// // set context of animation
// const ctx2 = canvas2.getContext('2d');


var rainDensity = 800;
// alter rain density and speed of movement when speed reaches certain objectives.
let rain =[];
function storm (){
  let raincolor ='white';

  rain.forEach(drop =>{
    ctx.fillStyle= raincolor;
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

  // Thunder Factory
  let thunderArr = [];
  let createThunder = function(src, title){
    let thundr = new Image();
      thundr.src = src;
      thundr.alt = title;
      thundr.title=title
      return thundr;
  }
  thunderArr.push(createThunder("images/backgrounds/thunder1.png", "thunder"));
  thunderArr.push(createThunder("images/backgrounds/thunder2.png","thunder"));
  thunderArr.push(createThunder("images/backgrounds/thunder3.png","thunder"));
  thunderArr.push(createThunder("images/backgrounds/thunder4.png","thunder"));
  thunderArr.push(createThunder("images/backgrounds/thunder5.png","thunder"));
  thunderArr.push(createThunder("images/backgrounds/thunder6.png","thunder"));
  let fps = 0;
  let thunTimer = 400
  let thundertiming = Math.floor(Math.random()*thunTimer)
  function thunderstorm(){
    fps++;
    if(fps % thundertiming == 0){  
      ctx.drawImage(thunderArr[Math.floor(Math.random()*6)], 0, 0, canvas.width, canvas.height)
    }
  }



