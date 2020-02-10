// // second Canvas
// const canvas2 = document.querySelector('#winCanvas');
// // determine width and height variables
// canvas2.width = window.innerWidth; 
// canvas2.height = window.innerHeight;
// // set context of animation
// const ctx2 = canvas2.getContext('2d');
var rainDensity = 0.5; 
// alter rain density(inverted, so higher density is smaller number) and speed of movement when speed reaches certain objectives.
let rain =[];
function storm (){
  let raincolor ='white';
  rain.forEach((drop, i) =>{
    if(drop.y >= canvas.height) rain.splice(i, 1);
    ctx.fillStyle= raincolor;
    ctx.fillRect(drop.x, drop.y+=10, drop.width, drop.height);
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
    
    thunderArr.push(createThunder("images/backgrounds/thunder1.png","thunder"));
    thunderArr.push(createThunder("images/backgrounds/thunder2.png","thunder"));
    thunderArr.push(createThunder("images/backgrounds/thunder3.png","thunder"));
    thunderArr.push(createThunder("images/backgrounds/thunder4.png","thunder"));
    thunderArr.push(createThunder("images/backgrounds/thunder5.png","thunder"));
    thunderArr.push(createThunder("images/backgrounds/thunder6.png","thunder"));
    thunderArr.push(createThunder("images/backgrounds/thunder1.png","thunder"));
    thunderArr.push(createThunder("images/backgrounds/thunder2.png","thunder"));
    thunderArr.push(createThunder("images/backgrounds/thunder3.png","thunder"));
    thunderArr.push(createThunder("images/backgrounds/thunder4.png","thunder"));
    thunderArr.push(createThunder("images/backgrounds/thunder5.png","thunder"));
    thunderArr.push(createThunder("images/backgrounds/thunder6.png","thunder"));
    let fps = 0;
    let thunTimer = 400
    let tornadoModulator = 2;

// DEATH BY HURRICANE IS OPERATIONAL through code in line 73
// initial value of hurricaneMovVar is ideally -1650;
      let hurricaneMovVar = (-1650); 
      let thundertiming = Math.floor(Math.random()*thunTimer)
  function thunderstorm(){
    fps++;
    let hurricanex = (hurricaneMovVar+fps*1.35);
    console.log(hurricanex)
    if(hurricanex > 380){
      killerspeed=4.8;
    }
    if(fps % tornadoModulator == 1){  
      ctx.drawImage(hurricaneFactory[Math.floor(Math.random()*36)], hurricanex, 0, canvas.width, canvas.height).animate([ { opacity: 7, easing: 'ease-out' },
      { opacity: 0.1, easing: 'ease-in' },
      { opacity: 1 }],
      1);
    }
    if(fps % thundertiming == 0){  
      ctx.drawImage(thunderArr[Math.floor(Math.random()*12)], 0, 0, canvas.width, canvas.height)
    }
  }
  
// hurricano factory
let hurricaneFactory = [];
let createTropicalStorm = function(src, title){
  let twister = new Image();
    twister.src = src;
    twister.alt = title;
    twister.title=title
    return twister;
}
    hurricaneFactory.push(createTropicalStorm("images/tornado/tornado1.png","tornado"));
    hurricaneFactory.push(createTropicalStorm("images/tornado/tornado2.png","tornado"));
    hurricaneFactory.push(createTropicalStorm("images/tornado/tornado3.png","tornado"));
    hurricaneFactory.push(createTropicalStorm("images/tornado/tornado4.png","tornado"));
    hurricaneFactory.push(createTropicalStorm("images/tornado/tornado5.png","tornado"));
    hurricaneFactory.push(createTropicalStorm("images/tornado/tornado6.png","tornado"));
    hurricaneFactory.push(createTropicalStorm("images/tornado/tornado7.png","tornado"));
    hurricaneFactory.push(createTropicalStorm("images/tornado/tornado8.png","tornado"));
    hurricaneFactory.push(createTropicalStorm("images/tornado/tornado9.png","tornado"));
    hurricaneFactory.push(createTropicalStorm("images/tornado/tornado10.png","tornado"));
    hurricaneFactory.push(createTropicalStorm("images/tornado/tornado11.png","tornado"));
    hurricaneFactory.push(createTropicalStorm("images/tornado/tornado12.png","tornado"));
    hurricaneFactory.push(createTropicalStorm("images/tornado/tornado13.png","tornado"));
    hurricaneFactory.push(createTropicalStorm("images/tornado/tornado14.png","tornado"));
    hurricaneFactory.push(createTropicalStorm("images/tornado/tornado15.png","tornado"));
    hurricaneFactory.push(createTropicalStorm("images/tornado/tornado16.png","tornado"));
    hurricaneFactory.push(createTropicalStorm("images/tornado/tornado17.png","tornado"));
    hurricaneFactory.push(createTropicalStorm("images/tornado/tornado18.png","tornado"));
    hurricaneFactory.push(createTropicalStorm("images/tornado/tornado1.png","tornado"));
    hurricaneFactory.push(createTropicalStorm("images/tornado/tornado2.png","tornado"));
    hurricaneFactory.push(createTropicalStorm("images/tornado/tornado3.png","tornado"));
    hurricaneFactory.push(createTropicalStorm("images/tornado/tornado4.png","tornado"));
    hurricaneFactory.push(createTropicalStorm("images/tornado/tornado5.png","tornado"));
    hurricaneFactory.push(createTropicalStorm("images/tornado/tornado6.png","tornado"));
    hurricaneFactory.push(createTropicalStorm("images/tornado/tornado7.png","tornado"));
    hurricaneFactory.push(createTropicalStorm("images/tornado/tornado8.png","tornado"));
    hurricaneFactory.push(createTropicalStorm("images/tornado/tornado9.png","tornado"));
    hurricaneFactory.push(createTropicalStorm("images/tornado/tornado10.png","tornado"));
    hurricaneFactory.push(createTropicalStorm("images/tornado/tornado11.png","tornado"));
    hurricaneFactory.push(createTropicalStorm("images/tornado/tornado12.png","tornado"));
    hurricaneFactory.push(createTropicalStorm("images/tornado/tornado13.png","tornado"));
    hurricaneFactory.push(createTropicalStorm("images/tornado/tornado14.png","tornado"));
    hurricaneFactory.push(createTropicalStorm("images/tornado/tornado15.png","tornado"));
    hurricaneFactory.push(createTropicalStorm("images/tornado/tornado16.png","tornado"));
    hurricaneFactory.push(createTropicalStorm("images/tornado/tornado17.png","tornado"));
    hurricaneFactory.push(createTropicalStorm("images/tornado/tornado18.png","tornado"));

            // NON OPERATATIONAL:
            // let stormTimer = 0;
            // function tropicalStorm(){
            //   stormTimer++;
            //   console.log(stormTimer)
            //   if(stormTimer % tornadoModulator == 0){  
            //     ctx.drawImage(hurricaneFactory[Math.floor(Math.random()*10)], 0, 0, 915, 377)
            //   }
            // }