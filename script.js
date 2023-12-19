console.log("JS OK")

/* 
- Creare in pagina l'elemento
- Chiedere all'utente il numero di km
- Chiedere all'utente l'età del passeggero
- Calcolare il totale prezzo del viaggio 
- Calcolare eventuale sconto (20% minorenni, 40% over 65)
- Impostare massimo due decimali dopo la virgola
- Richiamare l'elemento e inserire il risultato
*/

// Domande all'utente
const mileage = parseInt(prompt("Quanti chilometri vuoi percorrere?" , "23"));
const age = parseInt(prompt("Quanti anni ha il passeggero?" , "17"));
console.log("km", mileage, "età", age);

// Prezzo viaggio
let price = mileage * 0.21;
console.log(price);

// Calcolare eventuale sconto minorenni e over 65
let sale = "" //posso usa il valore null al posto delle ""
let newPrice = price

if (age < 18) {
    sale = price * 0.2;

} else if (age >= 65){
    sale = price * 0.4;
}


// Calcolo nuovo prezzo scontato
newPrice = price - sale;
console.log("sconto", sale, "prezzo scontato", price );

// Impostare massimo due decimale dopo la virgola e Richiamare l'elemento in pagina

document.getElementById("target").innerHTML = "Il Tuo biglietto costa " + `<strong>${newPrice.toFixed(2)}€</strong>`