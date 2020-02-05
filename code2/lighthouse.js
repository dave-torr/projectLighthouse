let lightHs = new Image();
lightHs.src = "../images/backgrounds/lightHsFnl.png";

let backgroundImage = {
    img: lightHs,

}
let positionIn = 0;

function lightHouseEnd(){
    ctx.drawImage(lightHs, positionIn, 180, 3960, 532)

}    

let lighhouseWin = new Image();
lighhouseWin.src = '../images/backgrounds/arrivalLh.png'
function arrival(){
    ctx.drawImage(lighhouseWin, 0, 180, 728, 532)
    
} 

