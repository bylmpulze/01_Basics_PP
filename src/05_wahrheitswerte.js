
/* Berechnung Alter */

// Deklaration
let ageJohn, ageMark;
const birthYearJohn = 1990;
const birthYearMark = 1980;

// Berechnung Alter
let year = new Date().getFullYear();
console.log("Jahr: ", year);
ageJohn = year - birthYearJohn;
ageMark = year - birthYearMark;

// Ausgabe
console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);


 //Deklaration

let isJohnOlder =(ageJohn > ageMark);

if  (isJohnOlder == false)  {
    console.log ("mark ist Älter als john");
}else {
    console.log ("John ist älter als mark");
}

