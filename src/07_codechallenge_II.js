/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */
const prompt = require('prompt-sync')({sigint: true});

firstName = prompt("bitte gebe deinen namen ein");
getAge = prompt("bitte gebe dein alter ein");

getAge = parseFloat(getAge);
const cond = true;
switch (cond) {
    case (getAge >= 0 && getAge <= 5):
        console.log(firstName, "Trinkt Milch.");
        break;
    case (getAge <= 12):
        console.log(firstName, "Trinkt Saft.");
        break;
    case (getAge <=17):
        console.log(firstName, "Trinkt Cola.");
        break;
    case (getAge >=18):
        console.log(firstName, "Trinkt wein.");
        break;
    default:
        console.log(firstName, "ungültige eingabe.");
        break;
}

