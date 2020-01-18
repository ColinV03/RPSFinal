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


//main function
function game() {
    //iterating by one to simulate no more than 5 games. 
    for( i = 0; i <= 5; i++) {
        selections();
        playRound(); 
        scores();
    }
}
//player choice vs computer choice
function playRound(choice1, choice2){
//equavalent choices
    if(choice1 === choice2){
        return("The result is a tie");
    }
    if(choice1 === "rock"){
        if(choice2 === "scissors"){
            userScore++;
            return ("Rock Wins")
        } else {
            computerScore++;
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
    let userChoice = prompt("Rock, Paper, or Scissors");

    let computerChoice = Math.random();

    if(computerChoice<=0.33){
      computerChoice = "rock";
    } else if (0.34<=computerChoice <= 0.66){
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    choice1 = userChoice
    choice2 = computerChoice

}

function scores() {
    console.log("You picked " + choice1);
    console.log("The computer picked " + choice2);
    console.log(playRound(choice1,choice2));
    console.log(userScore + " is your Score");
    console.log(computerScore + " is the computer's score");
}

game();