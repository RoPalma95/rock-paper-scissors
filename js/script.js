let moves = ['piedra', 'papel', 'tijera'];

function computerPlay() {
	return moves[Math.floor(Math.random() * 3)];

}

function playRound(playerSelection, computerSelection) {
	let playerMove = playerSelection.toLowerCase()	
	let message = '';
	if(playerMove === computerSelection) {
		message = 'Es un empate.';
	}
	else if (computerSelection === 'piedra' && playerMove === 'papel') {
		message = `¡Tú ganas! 
				   Papel vence a Piedra.`;
	} else if (computerSelection === 'papel' && playerMove === 'tijera') {
		message = `¡Tú ganas! 
				   Tijera vence a Papel.`;
	} else if (computerSelection === 'tijera' && playerMove === 'piedra') {
		message = `¡Tú ganas! 
				   Piedra vence a Tijera.`;
	} else {
		message = `¡Tú pierdes! 
			       ${capitalize(computerSelection)} vence a ${capitalize(playerMove)}`;
	}
	return message;
}

function capitalize(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function resetScores() {
	playerWins = 0;
	computerWins = 0;
	ties = 0;
}
