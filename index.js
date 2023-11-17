console.log("Hello world!");

let arr = ["rock", "paper", "scissor"] ;

function getComputerChoice(){
    const choice = arr[Math.floor(Math.random()*arr.length)]
    return choice;
}



function PlayRound(playerselection,computerselection){
    if(playerselection === "rock" && computerselection === "scissor"){
        return "You win rock beats scissor!";
    }else if(playerselection.toLowerCase()==="scissor" && computerselection === "rock"){
        return "You lose rock beats scissor!";
    }else if(playerselection.toLowerCase() === "paper" && computerselection === "rock"){
        return "You win paper beats rock!";
    }else if(playerselection.toLowerCase() === "rock" && computerselection === "paper"){
        return "You lose paper beats rock!";
    }else if(playerselection.toLowerCase() === "scissor" && computerselection === "paper"){
        return "You win scissor beats paper!";
    }else if(playerselection.toLowerCase() === "paper" && computerselection === "scissor"){
        return "You lose scissor beats paper!";
    }else if(playerselection === computerselection){
        return "Draw. Try Again...";
    }  
}

const playerselection = "rock";
const computerselection = getComputerChoice();
const outcome = PlayRound(playerselection,computerselection)
console.log(computerselection);
console.log(outcome);