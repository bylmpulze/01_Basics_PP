
/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken
let firstName;

function ausgabeNamen() {
    let firstName = "Kevin";
    console.log("Hallo, " + firstName + "!");
}

console.log(firstName); ///SCOPE


/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

ausgabeNamen2("Kevin");
ausgabeNamen2("Klaus");
ausgabeNamen2("Ibrahim");

function ausgabeNamen2(firstName2) // Parameter
{ 
    console.log("Hallo, " , firstName2, "!");
}

 /***** Funktionen 02c *****/
// 2c. Mehrere Parameter / Argumente

///Argumente werden von prompt() geliefert.
const prompt = require('prompt-sync')({sigint: true}); 
ausgabeNamen3(prompt("Vorname :"), prompt("Nachname :"));

ausgabeNamen3("Max", "Mütze");
ausgabeNamen3("Maxine", "Mützerich");


function ausgabeNamen3(firstName2, familyName) // Parameter
{ 
    console.log("Hallo, " , firstName2, "", familyName,"!");
}

// Argumente werden von prompt() geliefert --> Input


/***** Funktionen 03a *****/
// 03a. Vorbereitung -Trennen der Verantwortlichkeiten
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle

ausgabeNamenSRP("Max", "Mütze");

function ausgabeNamenSRP(firstName, familyName) {
    
    //1st responsibility: string composing
    const GAP = " ";
    let outputStr = "Hallo, " + firstName + GAP + familyName + "!"

    //2nd responsibility:

    console.log(outputStr);
}
