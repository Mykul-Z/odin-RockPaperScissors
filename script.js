
 
//  Initialize variables 

playerScoreCounter = 0;
computerScoreCounter = 0;
roundCounter = 0;

let playerScore = document.querySelector("#playerScore");
let computerScore = document.querySelector("#computerScore");
let roundNumber = document.querySelector("#roundNumber");

let currentRoundResult = document.querySelector("#currentRoundResult");

// Event listeners:

let playerOptions = document.querySelector("#playerOptions");

playerOptions.addEventListener("click", (event) =>

    {
        let target = event.target;

        switch(target.id)
        {
            case "rock":
                playerChoice = "rock";
                computerChoice = getComputerChoice();

                roundResult = playRound(playerChoice, computerChoice);
                changeScore(roundResult);
                currentRoundResult.textContent = "The result of the last round of RPS is: " + roundResult;

                break;
            case "paper":
                playerChoice = "paper";
                computerChoice = getComputerChoice();

                roundResult = playRound(playerChoice, computerChoice);
                changeScore(roundResult);
                currentRoundResult.textContent = "The result of the last round of RPS is: " + roundResult;

                break;
            case "scissors":
                playerChoice = "scissors";
                computerChoice = getComputerChoice();

                roundResult = playRound(playerChoice, computerChoice);
                changeScore(roundResult);
                currentRoundResult.textContent = "The result of the last round of RPS is: " + roundResult;

                break;

        }
    }
);

function changeScore(winner)
{
    roundCounter ++;
    roundNumber.textContent = roundCounter;

    if (winner == "player")
    {
        playerScoreCounter ++;
        playerScore.textContent = playerScoreCounter;
    }
    else if (winner = "computer")
    {
        computerScoreCounter ++;
        computerScore.textContent = computerScoreCounter;
    }
}






// This functions selects the computers choice in Rock Paper Scissors
function getComputerChoice ()
{   
    // Generates random value between 0 to 2 
    randomValue = Math.floor(Math.random() * 3)

    if (randomValue == 0) 
    {
        computerChoice = "Rock"
        
    }
    else if (randomValue == 1)
    {
        computerChoice = "Paper"

    }
    else {
        computerChoice = "Scissors"

    }

    return computerChoice
}

// This function gets the player's choice 
// This function was used before the UI was implemented 
function getPlayerChoice()
{
    playerChoice = prompt("Please enter your choice of Rock, Papers, or Scissors:");

    return playerChoice
}

// This function computes the winner of the round of RPS
function playRound(computerChoice, playerChoice)
{

    console.log("The computer chose " + computerChoice +" and the player chose " + playerChoice)
    // Game logic to decide winner

    if (computerChoice.toUpperCase() == playerChoice.toUpperCase())
    {
        return "tie"
    }
    else if(computerChoice.toUpperCase() == "ROCK")
    {
        console.log("Computer = " + computerChoice)
        if(playerChoice.toUpperCase() == "PAPER")
        {
            return "player"
        }
        else if(playerChoice.toUpperCase() == "SCISSORS")
        {
            return "computer"
        }
    }
    else if(computerChoice.toUpperCase() == "PAPER")
    {
        console.log("Computer = " + computerChoice)
        if(playerChoice.toUpperCase() == "SCISSORS")
        {
            return "player"
        }
        else if(playerChoice.toUpperCase() == "ROCK")
        {
            return "computer"
        }
    }
    else if(computerChoice.toUpperCase() == "SCISSORS")
    {
        console.log("Computer = " + computerChoice)
        if(playerChoice.toUpperCase() == "ROCK")
        {
            return "player"
        }
        else if(playerChoice.toUpperCase() == "PAPER")
        {
            return "computer"
        }
    }
    else 
    {
        return "No Winner"
    }
}


function playGame()
{
    // initialize variables 
    computerChoice = "new"
    playerChoice = "new"

    computerScore = 0
    playerScore = 0

    // Play 5 rounds
    for(let i = 1; i<2; i ++)
    {   

        // Get inputs
        computerChoice = getComputerChoice()
        playerChoice = getPlayerChoice()

        // computer winner and display score
        result = playRound(computerChoice, playerChoice).toUpperCase()
        console.log (result)

        if (result == "PLAYER")
        {
            console.log("Round: "+ i + " Winner is Player")
            playerScore ++ 
        }
        else if (result == "COMPUTER")
        {
            console.log("Round: "+ i + " Winner is Computer")
            computerScore ++ 
        }
        else if (result == "TIE")
        {
            console.log("Round: "+ i + " No winner, it's a tie")
        }

        console.log("Score: Computer: " + computerScore + " Player: " + playerScore)
    }
}



// playGame()