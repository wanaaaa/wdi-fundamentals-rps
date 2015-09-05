
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "Rock";
    } else if (randomNumber < 0.66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getPlayerMove(move) {
	if ( move == 'Rock' || move == 'Scissors' || move == 'Paper') {
		return move;
	}
	while (true) {
		var move = prompt("choose one", "Rock, Scissors or Paper");
		if ( move == 'Rock' || move == 'Scissors' || move == 'Paper') {
		return move;
		} else {
			alert("You typed wrong");
		}
	}
}

function getComputerMove() {
	return randomPlay();
}

function getWinner() {
	var player = getPlayerMove();
	var computer = getComputerMove();
	var whoWin;

	if (player == computer) {
		whoWin = "tie";
	};

	if (player == "Rock") {
		if (computer == 'Scissors') {
			whoWin = "player";
		} else if (computer == 'Paper') {
			whoWin = 'computer'
		}
	};

	if (player == 'Scissors') {
		if (computer == 'Rock') {
			whoWin = "computer";
		} else if (computer == "Paper") {
			whoWin = 'player'
		}
	};

	if (player == 'Paper') {
		if (computer == 'Rock') {
			whoWin = 'player';
		} else if (computer == 'Scissors') {
			whoWin = 'computer';
		}
	};

	return whoWin;	
};

function playToFive() {
	var playerWinNum = 0;
	var computerWinNum = 0;
	var repeat = true ;
	while ( playerWinNum <= 5 && computerWinNum <= 5) {
		var winner = getWinner();
		if (winner == 'player') {
			playerWinNum += 1;
		} else if (winner == 'computer') {
			computerWinNum += 1;
		}

		$('h3').append(playerWinNum," ", computerWinNum).append("<br>");

		if (playerWinNum == 5 || computerWinNum == 5) {
			if (playerWinNum ==5) {
				winner = 'player';
			} else if (computerWinNum == 5) {
				winner = 'computer';
			};
		
		} ;
	return winner;
	};
};

$(function() {

  $('h2').click(function() {
  	var playerWinNum = 0;
		var computerWinNum = 0;
		var repeat = true ;

		while ( playerWinNum != 5 && computerWinNum != 5) {
			var winner = getWinner();
			if (winner == 'player') {
				playerWinNum += 1;
			} else if (winner == 'computer') {
				computerWinNum += 1;
			}

			$('h3').append(playerWinNum," ", computerWinNum).append("<br>");

			if (playerWinNum == 5 || computerWinNum == 5) {
				if (playerWinNum ==5) {
					winner = 'player';
				} else if (computerWinNum == 5) {
					winner = 'computer';
				};
			console.log(winner);			
			} ;
		
		};
  });
});
