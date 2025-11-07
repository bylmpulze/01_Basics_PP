
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

const prompt = require('prompt-sync')({sigint: true});

let erste_zahl = prompt("bitte geben Sie die erste Zahl ein");
let zweite_zahl = prompt("bitte geben Sie Ihre Zweite Zahl ein");
erste_zahl = parseFloat(erste_zahl);
zweite_zahl = parseFloat(zweite_zahl);
summe = erste_zahl + zweite_zahl;
console.log("Hallo, die Summe der beiden Zahlen beträgt", summe);




        





