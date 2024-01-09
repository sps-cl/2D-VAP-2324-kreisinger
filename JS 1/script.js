let pocetRadku = document.getElementById("pocet-radku")
let pocetSloupcu = document.getElementById("pocet-sloupcu")

function vytvoritTabulku(){
    let tabulka = document.createElement("table");
    let radek 
    let bunka 
    let k =0;
    for (let i = 0; i < pocetRadku.value; i++) {
        radek = tabulka.insertRow();
        for (let j = 0; j < pocetSloupcu.value; j++) {
            
            bunka = radek.insertCell();
            bunka.innerText = k;
            k += 1;
            
        }
        
    }
    
    document.body.appendChild(tabulka)
    
}