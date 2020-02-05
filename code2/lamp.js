// Lamp rendering
let flameMax = new Image();
let flameReg = new Image();
let flameSml = new Image();
let flameBlu = new Image();

flameMax.src = '/module1/project1/images/flame/flameMax.png';
flameReg.src = '/module1/project1/images/flame/flameReg.png';
flameSml.src = '/module1/project1/images/flame/flameSml.png';
flameBlu.src = '/module1/project1/images/flame/flameBlu.png';

let flameWidth = 63;
let flameHeight = 80;

function darknessBreaker(){
    if (velocity == 0){
        ctx.drawImage(flameMax, 0, 570, flameWidth, flameHeight);
      } else if (velocity > 0 && velocity <1.5){
        ctx.drawImage(flameReg, 0, 570, flameWidth, flameHeight);
        console.log("flameReg");
      } else if (velocity > 1.5 && velocity <4){
        ctx.drawImage(flameSml, 0, 570, flameWidth, flameHeight);
        console.log("flameSml");
      } else if (velocity > 4){
        ctx.drawImage(flameBlu, 0, 570, flameWidth, flameHeight);
        console.log("flameBlu");
      }
}
