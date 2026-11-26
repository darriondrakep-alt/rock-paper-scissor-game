let humanScore = 0;
let computerScore = 0;
let draw = 0;
const w = "You win!";
const l = "You lose!";
const d = "Draw!"

   
    const buttons = document.querySelectorAll('.btns');
    buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
            console.log('Clicked:', event.currentTarget.textContent);
            const computerSelection = getComputerChoice();
            playRound(button.id, computerSelection);
        });      
    });

function getComputerChoice(){
    
    const options = ["rock", "paper", "scissors"]; 
    const answer = Math.floor(Math.random() * options.length);
    return options[answer];
}
    
    const scoreboard = document.querySelector("#scoreboard");  

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

    if (humanScore === 5){
        console.log(w);
    } else if (computerScore === 5){
        console.log(l);
    };

    /*const announcer = document.createElement("div");
    const winner = document.createElement("div");
    winner.textContent("Congratulations you win!");
    const loser = document.createElement("div");
    loser.textContent("Sorry you lose!")
    announcer.appendChild(winner);
    announcer.appendChild(loser);*/
};