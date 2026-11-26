    let humanScore = 0;
    let computerScore = 0;
    let draw = 0;
   
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
    const announce = document.querySelector('#announce'); 
    announce.textContent = "Make your move!"


function playRound(humanChoice, computerChoice){

    if (humanChoice === "rock" && computerChoice === "scissors"){
        announce.textContent = "You win!";
        humanScore++
    } else if (humanChoice === "rock" && computerChoice === "paper"){
        announce.textContent = "You lose!"; 
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors"){
        announce.textContent = "You lose!";
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        announce.textContent = "You win!";
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
        announce.textContent = "You win!";
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock"){
        announce.textContent = "You lose!";
        computerScore++;
    } else { 
        announce.textContent = "Draw!";
        draw++;
    };

        scoreboard.textContent = `Score: ${humanScore} - ${draw} - ${computerScore}`;
        const playAgainContainer = document.querySelector('#play-again-con');
        const playAgainButton = document.createElement("button");
        playAgainButton.id = 'play-again-btn';

    if (humanScore === 5){
        announce.textContent = "You won the game!";
        document.documentElement.style.backgroundColor = 'green';
        buttons.forEach((button) => {
            button.disabled = true;
        });

        playAgainButton.textContent = "Play again";
        playAgainContainer.appendChild(playAgainButton);
        playAgainButton.addEventListener('click', () => {
            document.documentElement.style.backgroundColor = 'white';
            announce.textContent = "New game! Make your move.";
            playAgainButton.hidden = true;
            humanScore = 0;
            computerScore = 0;
            draw = 0;
            buttons.forEach((button) =>{
                button.disabled = false;
            });
        });
        
    } else if (computerScore === 5){
        announce.textContent = "You lose! Try again.";
        document.documentElement.style.backgroundColor = 'red';
        buttons.forEach((button) => {
            button.disabled = true;
        });

        playAgainButton.textContent = "Play again";
        playAgainContainer.appendChild(playAgainButton);
        playAgainButton.addEventListener('click', () => {
            document.documentElement.style.backgroundColor = 'white';
            announce.textContent = "New game! Make your move.";
            playAgainButton.hidden = true;
            humanScore = 0;
            computerScore = 0;
            draw = 0;
            buttons.forEach((button) =>{
                button.disabled = false;
            });
        });
    };
};