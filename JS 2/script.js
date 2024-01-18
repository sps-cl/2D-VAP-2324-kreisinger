let platno = document.getElementById("platno");
let kontext = platno.getContext("2d");
let stredKruhuX = 100;
let stredKruhuY = 100;



platno.onmousemove = move()

function move(event){
    stredKruhuX = event.clientX;
    stredKruhuY = event.clientY;
}



function Nakresli(){
    kontext.clearRect(0,0,700,700)
    kontext.beginPath();
    kontext.fill();
    kontext.arc(stredKruhuX,stredKruhuY,50,0,Math.PI * 2)
}