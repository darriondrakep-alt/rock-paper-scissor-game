let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    
    const options = ["Rock", "Paper", "Scissors"]; 
    const answer = Math.floor(Math.random() * options.length);
    return options[answer];

}

function getHumanChoice(){

    let a = prompt("ROCK PAPER OR SCISSORS?");
    return a;
}

function playRound(humanChoice, computerChoice){
     
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === "rock" && computerChoice === "scissors"){
        console.log("You win!");
        humanScore++
    } else if (humanChoice === "rock" && computerChoice === "paper"){
        console.log("You lose!"); 
        computerScore++
    } else if (humanChoice === "paper" && computerChoice === "scissors"){
        console.log("You lose!");
        computerScore++
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        console.log("You win!");
        humanScore++
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You win!");
        humanScore++
    } else if (humanChoice === "scissors" && computerChoice === "rock"){
        console.log("You lose!");
        computerScore++
    } else { 
        console.log("Draw!");
    };

};

function playGame(){
    
   for (let i = 1; i <= 5; i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
   }

   if (humanScore > computerScore){
    console.log("You win!"); 
   } else if (humanScore < computerScore){
    console.log("You lose!");
   } else {
    console.log("Draw!");
    
   }

}


playGame();
