////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

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

function getComputerMove(move) {
  if ( move == 'Rock' || move == 'Scissors' || move == 'Paper') {
    return move;
  }
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    var player = getPlayerMove();
    var computer = getComputerMove();

    if (player == computer) {
        winner = "tie";
    };

    if (player == "Rock") {
        if (computer == 'Scissors') {
            winner = "player";
        } else if (computer == 'Paper') {
            winner = 'computer'
        }
    };

    if (player == 'Scissors') {
        if (computer == 'Rock') {
            winner = "computer";
        } else if (computer == "Paper") {
            winner = 'player'
        }
    };

    if (player == 'Paper') {
        if (computer == 'Rock') {
            winner = 'player';
        } else if (computer == 'Scissors') {
            winner = 'computer';
        }
    };

    return winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
}

function playToFive() {
  // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
  /* YOUR CODE HERE */
  console.log("Let's play Rock, Paper, Scissors");
  
  var playerWins = 0;
  var computerWins = 0;

  while ( playerWins != 5 && computerWins != 5) {
    var winner = getWinner();
    if (winner == 'player') {
      playerWins += 1;
    } else if (winner == 'computer') {
      computerWins += 1;
    }

    if (playerWins == 5 || computerWins == 5) {
      if (playerWins ==5) {
        winner = 'player';
      } else if (computerWins == 5) {
        winner = 'computer';
      }; 
    return [playerWins, computerWins];     
    } ;  
  };
}

