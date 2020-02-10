// Two things happedning here:
// creating island and lighthouse setting that moves according to char mov. 
//showing arrival to lighthouse (static overlayed images)
let lightHs = new Image();
lightHs.src = "images/backgrounds/lightHsFnl.png";
let finishTxt =new Image();
finishTxt.src = "images/arrivalTxt.png";
let lighhouseWin = new Image();
lighhouseWin.src = 'images/backgrounds/arrivalLh.png';
let hurricaneWin = new Image();
hurricaneWin.src = 'images/tornado/arrivalTornado.png';

let backgroundImage = {
    img: lightHs,
}
let positionIn = 0;
function lightHouseEnd(){
    ctx.drawImage(lightHs, positionIn, 180, 3960, 532);
}    
function arrival(){
    ctx.globalAlpha = 1;
    ctx.drawImage(hurricaneWin, 0, 0, canvas.width, canvas.height)
    ctx.drawImage(lighhouseWin, 0, 180, 864, 532);
    ctx.drawImage(flameMax, 144, 282, 13, 19);
    ctx.drawImage(finishTxt, canvas.width-450, 0, 450, 360);
    document.onkeydown = function(e) { 
        switch (e.keyCode) { 
            case 32: location.reload();   
            break;
        } }
} 
function fernel(){
    ctx.drawImage(flameMax, 144, 282, 13, 19);
}
