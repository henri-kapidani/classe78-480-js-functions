const btn = document.createElement('button');
btn.addEventListener('click', function(event) {
	event.preventDefault();
});

// possibile implementazione didattica dell'event listener
function addEventListener(action, instructionBlock) {
	/*
		let action = 'click';
		let instructionBlock = function ...
	*/

	if (action === 'click') {
		// collega l'instructionBlock al click
	} else if (action === 'submit') {
		// collega l'instructionBlock al submit
	}
}
