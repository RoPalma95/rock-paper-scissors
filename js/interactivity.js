const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const results = document.querySelector('.results');
const scoreboard = document.querySelector('.scoreboard');
const finalResult = document.querySelector('.final-result');
const restart = document.querySelector('button:last-of-type');

let playerWins = 0;
let computerWins = 0;
let ties = 0;

function updateScore(result) {
	if(result.includes('ganas!')) playerWins += 1;
	else if (result.includes('pierdes!')) computerWins += 1;
	else ties += 1;
	scoreboard.textContent = `Jugador: ${playerWins}  Computadora: ${computerWins}  Empates: ${ties}`;
} 

function checkWinner() { //returns true if the winner, the computer or the ties have reached 5
	if(playerWins === 5) {
		finalResult.textContent = '¡GANASTE!';
		restart.classList.remove('restart');
		return true;
	}
	else if(computerWins === 5) {
		finalResult.textContent = '¡PERDISTE!';
		restart.classList.remove('restart');
		return true;
	}
	else if(ties === 5) {
		finalResult.textContent = 'Es un empate.';
		restart.classList.remove('restart');
		return true;
	}
	return false;
}

function resetGame() { //shows Restart button and returns all divs and scores to their default values
	resetScores();
	restart.classList.add('restart');
	scoreboard.textContent = 'Jugador: 0  Computadora: 0  Empates: 0';
	results.textContent = '';
	finalResult.textContent = '';
}

function game(e) {
	if(!checkWinner()){  //stops updating the screen when a winner has been established
		results.textContent = playRound(e.target.textContent, computerPlay());
		updateScore(results.textContent);
	}
	checkWinner(); //checks if there is a winner at the end of each round
}

rock.addEventListener('click', game);
paper.addEventListener('click', game);
scissors.addEventListener('click', game);
restart.addEventListener('click', resetGame);

