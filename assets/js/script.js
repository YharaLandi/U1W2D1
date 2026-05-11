/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- In alternativa: nel terminale, `node script.js`.
- Cerca nei motori di ricerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

/* ESERCIZIO 1 — Saluto personalizzato
   Crea due const "nome" e "cognome".
   Stampa con un template literal: "Ciao, mi chiamo Mario Rossi."
*/

const nome = 'Mario';
const cognome = 'Rossi';
console.log(`Ciao, mi chiamo ${nome} ${cognome}.`);


/* ESERCIZIO 2 — Calcolatrice base
   Due numeri "a" e "b".
   Stampa le 6 operazioni nel formato "10 + 3 = 13":
   somma, differenza, prodotto, divisione, resto (%), elevamento (**).
*/

const a = 10;
const b = 3;
console.log(`${a + b} è il risultato della somma`);
console.log(`${a - b} è il risultato della sottrazione`);
console.log(`${a * b} è il risultato della moltiplicazione`);
console.log(`${a / b} è il risultato della divisone`);
console.log(`${a % b} è il risultato della percentuale`);
console.log(`${a ** b} è il risultato dell'elevazione`);

/* ESERCIZIO 3 — Età nel tempo
   const annoNascita (scegli un anno).
   const annoCorrente = 2026.
   Stampa: età oggi, età tra 10 anni, età 5 anni fa.
   Formato: "Tra 10 anni avrai 35 anni."
*/

const annoNascita = 1994;
const annoCorrente = 2026;
const etaOggi = annoCorrente - annoNascita;
console.log(`Oggi hai ${etaOggi} anni.`);
console.log(`Tra 10 anni avrai ${etaOggi + 10} anni.`);
console.log(`5 anni fa avevi ${etaOggi - 5} anni.`);


/* ESERCIZIO 4 — Maggiorenne?
   Variabile "eta".
   Calcola "maggiorenne" come "eta >= 18".
   Stampa: "Età: 25 — Maggiorenne: true"
*/

let eta = 25;
let maggiorenne = eta >= 18;
console.log(`Età: ${eta} — Maggiorenne: ${maggiorenne}`);


/* ESERCIZIO 5 — Tipo del valore
   Cinque variabili: una string, una number, una boolean, una null, una undefined.
   Stampa per ognuna: "nome è di tipo: string" usando typeof.
   In commento sopra la variabile null: spiega cosa ritorna typeof null e perché.
*/

let string = 'ciao';
let number = 42;
let boolean = true;
// typeof null ritorna "object" — è un bug storico di JavaScript rimasto per compatibilità
let typeNull = null;
let typeundefined;

console.log(typeof string);
console.log(typeof number);
console.log(typeof boolean);
console.log(typeof typeNull); //uscirà object, cvedi slide prof
console.log(typeof typeundefined);

/* ESERCIZIO 6 — === vs ==
   numero = 5
   stringa = "5"
   Stampa il risultato di "numero == stringa" e "numero === stringa".
   In commento, una riga: spiega la differenza.
*/

let numero = 5;
let stringa = '5';
console.log(numero == stringa);   // true
console.log(numero === stringa);  // false
// == confronta solo il valore O tipo, === confronta valore E tipo


/* ESERCIZIO 7 — Conversioni implicite
   Senza eseguire il codice, prevedi in commento il risultato di queste 4 espressioni.
   Poi stampale per verificare.
   - "5" + 3-----------"53"  (il + con una stringa concatena)
   - "5" - 3-----------2     (il - converte anche la stringa in numero)
   - true + 1-----------2     (true assume valore di 1)
   - "10" * "2"-----------20    (come il - converte le stinghe in numeri perchè le stinghe non si possono sottrarre o moltiplicare ma concatenare sì)
*/

console.log('5' + 3);
console.log('5' - 3);
console.log(true + 1);
console.log('10' * '2');


/* ESERCIZIO 8 — Classificazione numero
   Variabile "n".
   Usando % e operatori logici, stampa tre righe:
   "n è pari: true/false"
   "n è divisibile per 3: true/false"
   "n è pari E divisibile per 3: true/false"
*/

let n = 45;
let numPari = n % 2 === 0;
let numDivisibile = n % 3 === 0;
console.log(`n è pari: ${numPari}`);
console.log(`n è divisibile per 3: ${numDivisibile}`);
console.log(`n è pari E divisibile per 3: ${numPari && numDivisibile}`);


/* --EXTRA-- ESERCIZIO 9 — Triangolo
   Tre const "a", "b", "c" (lunghezze dei lati).
   Calcola perimetro.
   Determina il tipo: "equilatero", "isoscele", "scaleno".
   Stampa: "Triangolo isoscele, perimetro 15"
*/

const latoA = 5;
const latoB = 3;
const latoC = 7;
const perimetro = latoA + latoB + latoC;
let tipoTriangolo;

switch(true) {
    case latoA === latoB && latoB === latoC: 
        tipoTriangolo = 'equilatero';//tutte le cost devono essere uguali in pratica
        break;
    case latoA === latoB || latoB === latoC || latoA === latoC:
        tipoTriangolo = 'isoscele'; //se una delle due cons(i lati) sono uguali
        break;
case latoA !== latoB && latoB !== latoC && latoC !== latoA:
        tipoTriangolo = 'scaleno'; //tutti i lati diversi (!== per disuguaglianza e && per confronto)
        break;
}

console.log(`Triangolo ${tipoTriangolo}, perimetro ${perimetro}`);
console.log(`Triangolo ${tipoTriangolo}, perimetro ${perimetro}`);