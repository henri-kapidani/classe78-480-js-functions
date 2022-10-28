const varEsterna = prompt('che operazione eseguire');
const primoNumero = parseInt(prompt('primo numero'));
const secondoNumero = parseInt(prompt('secondo numero'));

const risultato = operazione(primoNumero, secondoNumero, varEsterna);
if (risultato > 0) {
	alert('Numero positivo');
} else if (risultato < 0) {
	alert('Numero negativo');
} else {
	alert('ZERO!!!!!');
}

alert(risultato);

function operazione(num1, num2, testo) {
	// console.log(testo);
	if (testo == 'somma') {
		return num1 + num2;
	} else if (testo == 'differenza') {
		return num1 - num2;
	}

	return 'ciao';

	return 'irraggiungibile';
}
