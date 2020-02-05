document.onload = function() { //Start button is clicked 
    startGame() //calls startGame
  }
  
  document.onclick = function(e){ //
    console.log(e.x, e.y)
  }
  
  
  const canvas = document.querySelector('#canvas'); //Get the canvas
  var img = new Image(); //load an image element
  var meteor = new Image();
  
  canvas.width = window.innerWidth/1.7; //Set canvas width and height
  canvas.height = 600
  
  const ctx = canvas.getContext('2d'); //Get the context 
  
  
  
  
  function startGame(){  
    console.log("START") 
    img.onload = function() {
        ctx.drawImage(img, ship.x, ship.y, ship.width, ship.height); //Load the ship for the first time 
    }
    img.src = "./images/spaceship.png";
  
    meteor.onload = function() {
        ctx.drawImage(meteor, (Math.random()*canvas.width), 40, 50, 80)
    }
    meteor.src = "./images/meteor.png";
    
    window.requestAnimationFrame(animate) //Starts the animation infinite loop
  }
  
  // let Backgrobckgrnd = new Image();
  // space.src = "/module1/lab10raceship/lab-canvas-race-ship//starter_code/images/Background.png";
  // space.onload = function() {
  //     ctx.drawImage(space, 0, 0, canvas.width, canvas.height);
  // }
  
  
  function drawBoard() {
    ctx.fillStyle = 'black'
    ctx.fillRect(0,0,canvas.width, canvas.height) //draws the road 
  }
  
  let ship = {  //ship object - also can be converted to a Class 
    x:canvas.width/2,
    y:400,
    width: 50,
    height: 80,
  }
  
  function drawship() {
    ctx.drawImage(img, ship.x, ship.y, ship.width, ship.height); //draws the ship depending on the coords in the obj above 
  }
  
  let meteorShr = {  //ship object - also can be converted to a Class 
    x:(Math.random()*canvas.width),
    y:0,
    width: 50,
    height: 80,
  }
  function meteorCreator() {
    ctx.drawImage(meteor, meteorShr.x, meteorShr.y, meteorShr.width, meteorShr.height); //draws the meteor depending on the coords in the obj above 
    meteorShr.y+=15;
    if (meteorShr.y === canvas.height){
      meteorShr.y = 0;
      meteorShr.x =(Math.random()*canvas.width)
    }
  }
  
  
  let stars =[];
  function spaceFill (){
    stars.forEach(star =>{
      ctx.fillStyle= 'white'
      ctx.fillRect(star.x, star.y+=6, star.width, star.height)
    })
  }
  function spaceMovement(){
    setInterval(()=>{
      let star = {
        x: (Math.random()*canvas.width),
        y: 0,
        width: (Math.random()*1),
        height: (Math.random()*15),
      }
      stars.push(star)
    }, 700)
  }
  
  document.onkeydown = function(e) { //controls -- up down left and right ... 
    switch (e.keyCode) { //changes the ship object 
      case 38: ship.y-=25;   console.log('up',  ); break;
      case 40: ship.y+=25;   console.log('down',); break;
      case 37: ship.x-=25;   console.log('left',); break;
      case 39: ship.x+=25;   console.log('right'); break;
    }
  }
  
  
  
  // let submitScore = document.getElementById("SubScore");
  // submitScore.onclick = function (){
  //       let newScore = document.getElementById("scores")[0].cloneNode(true);
  //       let newName = document.querySelector("#scores > tfoot > tr > td:nth-child(1) > input[type=text]").value;
  //       newScore.querySelector('.name span').innerText = newName;
  //       newScore.querySelector("td.pu > span").innerText = playerScore;
  //      document.getElementsByTagName("tbody")[0].appendChild(newProd);
  //     }
  
  let counter = document.querySelector('.counter span')
  let c = 0; 
  
  function animate(){
    if (ship.x < meteorShr.x +40 &&
      ship.x + ship.width > meteorShr.x &&
      ship.y < meteorShr.y + meteorShr.height &&
      ship.y + ship.height > meteorShr.y) {
      console.log("SPACE DEATH");
      // ctx.clearRect(0,0,canvas.width, canvas.height);
        let playerScore = document.querySelector("body > div.counter > span").innerHTML;
        console.log(playerScore)
        document.querySelector("#scores > tfoot > tr > td:nth-child(2) > span").innerHTML = playerScore;
  
      } else {
      console.log(counter, typeof counter, Number(counter.innerHTML))
      c++;
      if(c % 87 == 0){
      counter.innerHTML = Number(counter.innerHTML) + 1 
      }
    
        let loop = window.requestAnimationFrame(animate) //continues the loop
        
        ctx.clearRect(0,0,canvas.width, canvas.height) //clears the whole canvas, the ship, the board everything in the canvas
        
        drawBoard()  //redraws the board over and over and over again
        spaceMovement() //fills the stars array
        spaceFill () //
        // drawship()   //redraws the ship over and over and over again
        // meteorCreator()
        // obstacleDetection()
  }
  }
  
  