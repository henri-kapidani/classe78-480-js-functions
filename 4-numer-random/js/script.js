/*
**numeri random**: generare 10 numeri random tra 1 e 100 (con un for o con un while) attraverso una funzione (copiamola da w3schools) e stamparli a schermo
*/

for (let i = 0; i < 10; i++) {
	console.log(getRandomInteger(1, 100));
}

function getRandomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}
