// 
// 
// let userChoice = prompt("Rock, Paper, or Scissors");
// 
// let computerChoice = Math.random();
// 
// if(computerChoice<=0.33){
//     computerChoice = "rock";
// } else if (0.34<=computerChoice <= 0.66){
//     computerChoice = "paper";
// } else {
//     computerChoice = "scissors";
// }
// 
// let computerScore = 0;
// let userScore = 0;
// 
// 
// choice1 = userChoice
// choice2 = computerChoice
// 
// allows computer and user to select, variables stored as strings **//


//Scoring, global variables
let userScore = 0;
let computerScore = 0;

//objective in this section now is to remove looping section and declare winner after a 5 rounds still. 

//main function
//function game() {
//    //iterating by one to simulate no more than 5 games. 
//    for( i = 0; i <= 5; i++) {
//        selections();
//        playRound(); 
//        scores();
//    }
//}

//

//main event listener for the buttons. 
const buttons = document.querySelectorAll('button')
buttons.forEach(button => button.addEventListener('click',game)); 

//this section is for the updating of the Choices
//functional
function displaySelections(choice1, choice2) {
    let pSelections = document.getElementById('userSelection');
    pSelections.textContent = 'The User Selection Is ' + choice1;

    let cSelections = document.getElementById('compSelection');
    cSelections.textContent = 'The Computer Chose ' + choice2;  
}

//function below intended to display winner of each round. 
//functional
const winners = document.getElementById('.score')

function displayWinner(roundWinner) {


	let winner = document.getElementById('winner')
    winner.textContent = roundWinner; 

   // document.appendChild(roundWinner);
    
}

//clickable button for player selection. 
//successful implementation of the this. call. 

function playerSelection() {
    const choice1 = this.id;
    console.log(choice1);
    return choice1;
}


//Reset game score, invoked after the 5th victory. 
// functional
// fixed syntax errors and function called successfully after Scores(); 

function resetScore() {
	userScore = 0;
	computerScore = 0; 
}
// Main call for the event listener. Main container function to invoke other individual functions. 
//semi-functioning currently. 1.21.2020
function game(e) {
    
	let choice1 = e.target.id;
	let choice2 = selections();
	displaySelections(choice1, choice2);
    playRound(choice1,choice2);
    displayWinner(roundWinner); 
    scores(); 
	if(userScore == 5){
		console.log("Game Over, Player Wins!");
		resetScore(); 
	}else if(computerScore == 5) {
		console.log("Game Over, Computer Wins!");
		resetScore();
	}else {
		return; 
	}
	
		
}

//player choice vs computer choice
function playRound(choice1, choice2){
//equavalent choices
	console.log(choice1 + " is the pick of the user")
	console.log(choice2 + " is the pick of the computer")
    if(choice1 === choice2){
        console.log("Tie!")
		return roundWinner = 'Tie!'
        //return("The result is a tie");
    }
    if(choice1 === "rock"){
        if(choice2 === "scissors"){
            userScore++;
            return roundWinner = 'Player!'
            //return ("Player Wins")
        } else {
            computerScore++;
            return roundWinner = 'computer!'
            //return("Computer Wins!")
        }
    }

    if(choice1 === "paper"){
        if(choice2 === "rock"){
            userScore++;
            return roundWinner = "Player!"
        } else {
            computerScore++;
            return roundWinner = "Computer!"
        }
    }

    if(choice1 === "scissors"){
        if(choice2 === "paper"){
            userScore++;
            return roundWinner = "Player!"
        } else {
            computerScore++;
            return roundWinner = "Computer!"
        }
    }
    return roundWinner; 
}

//allowing both user and computer selections
function selections() {
    

    let computerChoice = Math.random();

    if(computerChoice<=0.33){
      computerChoice = "rock";
    } else if (0.34<=computerChoice <= 0.66){
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    let choice2 = computerChoice
    return choice2; 
}

const gScores = document.querySelector('#scores')

//function returns the scores in both the console, and the DOM. 
//Functional. 
//addressed syntax errors in calling the gScores section previously stated. 

function scores() {
 	console.log(userScore);
    console.log(computerScore);
    

    let cScore = document.getElementById('cScore');
    cScore.textContent = "Computer Score: " + computerScore;

    let pScore = document.getElementById('pScore');
    pScore.textContent = "User Score: " + userScore;

    gScores.appendChild(cScore, pScore)
}

