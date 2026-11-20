let humanScore = 0;
let computerScore = 0;
const w = "You win!";
const l = "You lose!";
const d = "Draw!"

function getComputerChoice(){
    
    const options = ["Rock", "Paper", "Scissors"]; 
    const answer = Math.floor(Math.random() * options.length);
    return options[answer];

}

function getHumanChoice(){

    let a = prompt("ROCK PAPER SCISSORS SHOOT!");
    return a;
}

function playRound(humanChoice, computerChoice){
     
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === "rock" && computerChoice === "scissors"){
        console.log(w);
        humanScore++
    } else if (humanChoice === "rock" && computerChoice === "paper"){
        console.log(l); 
        computerScore++
    } else if (humanChoice === "paper" && computerChoice === "scissors"){
        console.log(l);
        computerScore++
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        console.log(w);
        humanScore++
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
        console.log(w);
        humanScore++
    } else if (humanChoice === "scissors" && computerChoice === "rock"){
        console.log(l);
        computerScore++
    } else { 
        console.log(d);
    };
}

function playGame(){
    
   for (let i = 1; i <= 5; i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
   }

   if (humanScore > computerScore){
    console.log(w);
   } else if (humanScore < computerScore){
    console.log(l);
   } else {
    console.log(d);
   }
}

playGame();
