let pocetRadku = document.getElementById("pocet-radku")
let pocetSloupcu = document.getElementById("pocet-sloupcu")
let tabulka = document.createElement("table");

function vytvoritTabulku(){
    let tabulka = document.createElement("table");
    let radek 
    let bunka 

    for (let i = 1; i < pocetRadku; i++) {
        radek = tabulka.insertRow();
        for (let j = 1; j < pocetSloupcu; j++) {
            bunka = radek.insertCell()
            bunka.innerText(i)
            
        }
    }
    document.body.appendChild(tabulka)
    
}