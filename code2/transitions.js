
function fadeOut(){
    if (velocity >= 0 && velocity <1.5){
        canvas.style.opacity= "1";
    } else if (velocity > 1.5 && velocity <4){
        canvas.style.opacity= "0.7";
    } else if (velocity > 4){
        canvas.style.opacity= "0.5";
      }
}
