/*
**pari o dispari**: scrivere una funzione per verificare se un numero è pari o dispari, quindi chiedere un numero all'utente e comunicargli se è pari o dispari
*/

const userNumber = parseInt(prompt('dammi un numero'));
//tellUserDivisibility(userNumber);
if (isEven(userNumber)) {
	console.log('pari');
} else {
	console.log('dispari');
}


function tellUserDivisibility(number) {
	console.log(number);
	if (number % 2) { // number != 0
		console.log('dispari');
	} else {
		console.log('pari');
	}
}

function isEven(number) {
	console.log(number);
	if (number % 2) { // number != 0
		return false;
	} else {
		return true;
	}
}
