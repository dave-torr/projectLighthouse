
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
  thunderArr.push(createThunder("/module1/project1/images/backgrounds/thunder1.png", "thunder"));
  thunderArr.push(createThunder("/module1/project1/images/backgrounds/thunder2.png","thunder"));
  thunderArr.push(createThunder("/module1/project1/images/backgrounds/thunder3.png","thunder"));
  thunderArr.push(createThunder("/module1/project1/images/backgrounds/thunder4.png","thunder"));
  thunderArr.push(createThunder("/module1/project1/images/backgrounds/thunder5.png","thunder"));
  thunderArr.push(createThunder("/module1/project1/images/backgrounds/thunder6.png","thunder"));
  let fps = 0;
  let thunTimer = 400
  let thundertiming = Math.floor(Math.random()*thunTimer)
  function thunderstorm(){
    fps++;
    if(fps % thundertiming == 0){  
      ctx.drawImage(thunderArr[Math.floor(Math.random()*6)], 0, 0, canvas.width, canvas.height)
    }
  }

  
  function fadeout(){
    setInterval()
  }


