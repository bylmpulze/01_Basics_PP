

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : 
*/

const ERROR_STR_DIV = "Teilen durch 0 nicht möglich";
const Error_Str_GEN = "Irgendwas ging schief!"; 


const prompt = require('prompt-sync')({sigint: true});

startApp()
function startApp() {
	output(calculator(getNum1(),getNum2(),getOp()));
}

function getNum1() {
	return parseInt(prompt("Zahl1?: "));
}

function getNum2() {
	return parseInt(prompt("Zahl2?: "));
}

function getOp() {
	return prompt("OP?: ");
}


function addition(a,b) {
	return a + b;
}

function subtract(a,b) {
	return a - b;
}

function multiplication(a,b){
	return a * b;
}

function  division (a,b) {
	if (b ==0) {
		return ERROR_STR_DIV;
}	else {
	return a / b;
	}
}


function calculator(a,b,op) {
	switch(op) {
		case "+":
			return addition(a,b);
		case "-":
			return subtract(a,b);
		case "*":
			return multiplication(a,b);
		case "/":
			return division(a,b);
		default:
			return Error_Str_GEN
	}
}
a = 3
b = 7
go = true







// module: output | test:
function output(outputData) {
	console.log(outputData);
}
  