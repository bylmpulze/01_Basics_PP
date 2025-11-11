// // Entscheidungsstrukturen | control flow

// // Deklaration + Assignment
const ageJohn = 30;
const ageMark = 30;

// // Deklaration
// let isJohnOlder, isJohnEqual;

// // Test | Logische Aussage
// isJohnOlder = (ageJohn > ageMark);
// isJohnEqual = (ageJohn == ageMark);

// // Ausgabe
// console.log("ageJohn: " + ageJohn);
// console.log("ageMark: " + ageMark);
// // console.log("isJohnOlder: " + isJohnOlder);
// // console.log("isJohnEqual: " + isJohnEqual);
// console.log("------------------");

// // if(true) Wahrheitswert
// // if(false)
// // if (isJohnOlder)
// if (ageJohn >ageMark) //  direkter Test     
// {
//   console.log("John ist älter");  
// // }
// if (ageJohn > ageMark) {
//       console.log("John ist älter"); 
// } 
// else 
// {
//       console.log("John ist jünger"); 
// }

// console.log( (isJohnOlder) ? "john is older" : "mark is older");

// if (isJohnOlder) {
//       console.log("John ist älter"); 
// } 
// else if(isJohnEqual)
// {
//       console.log("John ist genauso alt wie Marc");
// }
// else 
// {
//       console.log("John ist jünger"); 
// }


// const firstName = "jane";
// // let job;

// // job = "driver"; 
// // // job = "diver";

// // switch (job)
// //    {
// //       case "driver":
// //             console.log("fährt taxi");
// //             break;
// //       case "diver":
// //             console.log("Taucht im Rhein");
// //             break;
// //       default:
// //             break;
// //    }#

/******** Fallunterscheidung / SWITCH|CASE 2 *******/

const cond = true;
const value = 10;

switch (cond) {
    case (value < 5):
        console.log("Value hat den Wert 1.");
        break;
    case (value > 5):
        console.log("Value hat den Wert 2.");
        break;
    default:
        console.log("Value hat einen anderen Wert.");
        break;
}


