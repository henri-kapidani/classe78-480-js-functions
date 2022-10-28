function saluta() {
	alert('ciao');
}

function somma5a10() {
	return 5 + 10;
}

function calcoloComplesso() {
	let random = Math.random();
	random = random * 7;
	const somma = random + 15;
	console.log('prima del return');
	return 100;
	console.log('dopo il return'); // mai eseguito perche' viene dopo il return
}

let ciao = 'ciao';
function somma3numeri(num1, num2, num3) {
	/*
	let num1 = 5;
	let num2 = 10;
	let num3 = 15;
	*/
	console.log(ciao); // le variabili esterne sono visibili all'interno delle funzioni
	const somma = num1 + num2 + num3;
	return somma;
}


const somma = 20 + calcoloComplesso();
console.log(somma);

const somma4 = 100 + somma3numeri(5, 10, 15); // 100 + 30 ------ 130
console.log(somma4);
