// // ''
// // /***** Funktionen 01 *****/
// // // 1. Kapselung von Codeblöcken
// // let firstName;

// // function ausgabeNamen() {
// //     let firstName = "Kevin";
// //     console.log("Hallo, " + firstName + "!");
// // }

// // console.log(firstName); ///SCOPE


// // /***** Funktionen 02b *****/
// // // 2b. Parametrisierung + Datenübergabe von AUSSEN

// // ausgabeNamen2("Kevin");
// // ausgabeNamen2("Klaus");
// // ausgabeNamen2("Ibrahim");

// // function ausgabeNamen2(firstName2) // Parameter
// // { 
// //     console.log("Hallo, " , firstName2, "!");
// // }

// //  /***** Funktionen 02c *****/
// // // 2c. Mehrere Parameter / Argumente

// // ///Argumente werden von prompt() geliefert.
// // const prompt = require('prompt-sync')({sigint: true}); 
// // ausgabeNamen3(prompt("Vorname :"), prompt("Nachname :"));

// // ausgabeNamen3("Max", "Mütze");
// // ausgabeNamen3("Maxine", "Mützerich");


// // function ausgabeNamen3(firstName2, familyName) // Parameter
// // { 
// //     console.log("Hallo, " , firstName2, "", familyName,"!");
// // }

// // // Argumente werden von prompt() geliefert --> Input


// // /***** Funktionen 03a *****/
// // // 03a. Vorbereitung -Trennen der Verantwortlichkeiten
// // // Postulat: one function = one job (uncle Bob)
// // // SRP single responsibility principle

// // ausgabeNamenSRP("Max", "Mütze");

// // function ausgabeNamenSRP(firstName, familyName) {
    
// //     //1st responsibility: string composing


// const prompt = require('prompt-sync')({sigint: true}); 

// output(getString("Max", "Mütze"));
// output(getString(prompt("vorname?:"), prompt("Name=:")));

// function getString(firstName, familyName) {
//     const GAP = " ";
//     let outputStr = "Hallo," + firstName + GAP + familyName + "!";
//     return outputStr;    
// }
    
//     //2nd responsibility:''


const prompt = require('prompt-sync')({sigint: true}); 
function output(outputData) { ///wrapper

    console.log(outputData);
}

let cheeseburger = 0;
let hamburger = 0;
let chickenburger = 0;
let cola = 0;
let fanta = 0;
let sprite = 0;


getOrder = prompt("Bitte gebe deine bestellung ein: (1) Cheeseburger, (2) Hamburger (3) Chickenburger");

getOrder = parseFloat(getOrder);

output(getOrder);

Order_Food()

function Order_Food(){
    if (parseFloat(getOrder == 1)) 
        {cheeseburger += 1, output(cheeseburger) }
    if (getOrder == 2) 
        {hamburger += 1}
    if (getOrder == 3)
    {chickenburger +=1}
    else 
        output("Falsche eingabe bitte versuchen Sie es nocheinmal")
        return (Order_Food)
}
    





