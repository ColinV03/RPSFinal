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
const buttons = document.querySelectorAll('button')
buttons.forEach(button => button.addEventListener('click',game)); 

//this section is for the updating of the scores

function displaySelections(choice1,choice2) {
    let pSelections = document.getElementById('userSelection');
    pSelections.textContent('The user Selection is ' + choice1);

    let cSelections = document.getElementById('computerSelection');
    cSelections.textContent('The computer chose: ' + choice2);
}




function playerSelection() {
    const choice1 = this.id;
    console.log(choice1);
    return choice1;
}

function resetScore() {
	userScore = 0;
	computerScore = 0; 
}

function game(e) {
	let choice1 = e.target.id;
	let choice2 = selections();
    playRound(choice1,choice2);
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
        return("The result is a tie");
    }
    if(choice1 === "rock"){
        if(choice2 === "scissors"){
            userScore++;
            console.log("rock vs scissors");
            return ("Rock Wins")
        } else {
            computerScore++;
            console.log("rock vs paper");
            return("paper Wins!")
        }
    }

    if(choice1 === "paper"){
        if(choice2 === "rock"){
            userScore++;
            return ("paper Wins")
        } else {
            computerScore++;
            return("scissors Wins!")
        }
    }

    if(choice1 === "scissors"){
        if(choice2 === "paper"){
            userScore++;
            return ("Scissors Wins")
        } else {
            computerScore++;
            return("rock Wins!")
        }
    }
    
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

function scores() {
 	console.log(userScore);
	console.log(computerScore);
}

