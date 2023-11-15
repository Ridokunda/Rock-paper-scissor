console.log("Hello world!");

let arr = ["Rock", "Paper", "Scissor"] ;

function getComputerChoice(){
    return arr[Math.floor(Math.random()*arr.length)];
}



function PlayRound(playerselection,computerselection){
    if(playerselection == "rock" && computerselection == "scissor"){
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
console.log(computerselection);
console.log(PlayRound(playerselection,computerselection));