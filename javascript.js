//Get computer choice to get a random rps
//player seclection of rps 
//function to check who wins, and logs the winner 

function getComputerChoice(){
    const choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random()* choice.length)];
}

function play(playerSelection, computerSelection){
    alert("Computer has chosen" + " " + computerSelection);
    if(playerSelection==computerSelection){
        return alert("It's a Tie");
    }
    else if(playerSelection == "rock" && computerSelection=="scissors"){
        return alert("player wins");
    }
    else if(playerSelection == "rock" && computerSelection=="paper"){
        return alert("player loses");
    }
    else if(playerSelection == "scissors" && computerSelection=="paper"){
        return alert("player wins");
    }
    else if(playerSelection == "scissors" && computerSelection=="rock"){
        return alert("player loses");
    }
    else if(playerSelection == "paper" && computerSelection=="scissors"){
        return alert("player loses");
    }
    else if(playerSelection == "paper" && computerSelection=="rock"){
        return alert("player wins");
    }
}
function game(){
    for (let i = 0; i<5; i++){
        let playerSelection = window.prompt("Please select Rock, Paper or Scissors.");
        if (playerSelection === null){
            return;
        }
        computerSelection = getComputerChoice();
        play(playerSelection, computerSelection);
    }
}

console.log(game());