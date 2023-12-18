console.log("JS OK")

/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */

/* 
- Creare in pagina l'elemento
- Chiedere all'utente il numero di km
- Chiedere all'utente l'età del passeggero
- Calcolare il totale prezzo del viaggio 
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
let sale = ""

if (age <= 17 || age >= 65) {
    if (age <= 17) {
        sale = price * 0.2;

    } else{
        sale = price * 0.4;
    }
    } else {
       let newPrice = price
    }

// Calcolo nuovo prezzo scontato
let newPrice = price - sale;
console.log("sconto", sale, "prezzo scontato", price );

// Impostare massimo due decimale dopo la virgola e Richiamare l'elemento in pagina

document.getElementById("target").innerHTML = "Il Tuo biglietto costa " + `<strong>${newPrice.toFixed(2)}€</strong>`