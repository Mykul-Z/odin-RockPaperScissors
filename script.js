
// TO-DO
// Create function to accept human input 
// Create function to compare human vs computer choice and determine winner 

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

    return computerChoice.toUpperCase()
}


function getPlayerChoice()
{
    playerChoice = prompt("Please enter your choice of Rock, Papers, or Scissors:");

    return playerChoice.toUpperCase()
}




console.log(getComputerChoice());
console.log(getPlayerChoice());