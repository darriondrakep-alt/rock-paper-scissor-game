let humanScore = 0;
let computerScore = 0;
let draw = 0;
const w = "You win!";
const l = "You lose!";
const d = "Draw!"

   
    let rock = document.querySelector("#rock");
    rock.addEventListener('click', () => {
        const computerSelection = getComputerChoice();
        playRound("rock", computerSelection);
        
    });
    let paper = document.querySelector("#paper");
    paper.addEventListener('click', () => {
        const computerSelection = getComputerChoice();
        playRound("paper", computerSelection);
    });
    let scissors = document.querySelector("#scissors")
    scissors.addEventListener('click', () =>{
        const computerSelection = getComputerChoice();
        playRound("scissors", computerSelection);
    });

function getComputerChoice(){
    
    const options = ["rock", "paper", "scissors"]; 
    const answer = Math.floor(Math.random() * options.length);
    return options[answer];
}
    
    const scoreboard = document.querySelector("#scoreboard");
    /*const score = document.createElement("p");
    scoreboard.appendChild(score);*/
    
 

function playRound(humanChoice, computerChoice){
     

    if (humanChoice === "rock" && computerChoice === "scissors"){
        alert(w);
        humanScore++
    } else if (humanChoice === "rock" && computerChoice === "paper"){
        alert(l); 
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors"){
        alert(l);
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        alert(w);
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
        alert(w);
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock"){
        alert(l);
        computerScore++;
    } else { 
        alert(d);
        draw++;
    };
    scoreboard.textContent = `Score: ${humanScore} - ${draw} - ${computerScore}`;
    console.log(scoreboard);
}

