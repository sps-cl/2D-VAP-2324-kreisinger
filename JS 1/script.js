let pocetRadku = document.getElementById("pocet-radku")
let pocetSloupcu = document.getElementById("pocet-sloupcu")
let tabulka = document.createElement("table");

function vytvoritTabulku(){
    let tabulka = document.createElement("table");
    let radek 
    let bunka 

    for (let i = 1; i < pocetRadku; i++) {
        radek = tabulka.insertRow();
        radek.innerText(i)
    }
    
}