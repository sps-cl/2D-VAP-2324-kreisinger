let platno = document.getElementById("platno");
let kontext = platno.getContext("2d");
let stredKruhuX = 100;
let stredKruhuY = 100;
let čtverecX = 350;
let čtverecY = 350;


platno.onmousemove = function (event){
    stredKruhuX = event.clientX;
    stredKruhuY = event.clientY;
}


function Nakresli(){
    kontext.clearRect(0,0,700,700)
    kontext.beginPath();
    
    if(stredKruhuY >= čtverecY && stredKruhuY <= čtverecY + 100 && stredKruhuX >= čtverecX && stredKruhuX <= čtverecX + 100){
        kontext.fillStyle = "purple"
        kontext.arc(stredKruhuX,stredKruhuY,50,0,Math.PI * 2)
    } else { 
        kontext.fillStyle = "black";
        kontext.arc(stredKruhuX,stredKruhuY,50,0,Math.PI * 2)}
    kontext.fill();
    kontext.fillRect(čtverecX,čtverecY,100,100)
    
    
    requestAnimationFrame(Nakresli)
}



Nakresli()