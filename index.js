console.log("Hello world!");

let arr = ["rock", "paper", "scissor"] ;

function getComputerChoice(){
    const choice = arr[Math.floor(Math.random()*arr.length)]
    return choice;
}



function PlayRound(playerselection,computerselection,pscore,cscore){
    
    if(playerselection.toLowerCase() === "rock" && computerselection === "scissor"){
        pscore = pscore + 1;
        return "You win rock beats scissor!";
    }else if(playerselection.toLowerCase()=== "scissor" && computerselection === "rock"){
        cscore = cscore + 1;
        return "You lose rock beats scissor!";
    }else if(playerselection.toLowerCase() === "paper" && computerselection === "rock"){
        pscore = pscore + 1;
        return "You win paper beats rock!";
    }else if(playerselection.toLowerCase() === "rock" && computerselection === "paper"){
        cscore = cscore + 1;
        return "You lose paper beats rock!";
    }else if(playerselection.toLowerCase() === "scissor" && computerselection === "paper"){
        pscore = pscore + 1;
        return "You win scissor beats paper!";
    }else if(playerselection.toLowerCase() === "paper" && computerselection === "scissor"){
        cscore = cscore + 1;
        return "You lose scissor beats paper!";
    }else if(playerselection.toLowerCase() === computerselection){
        return "Draw. Try Again...";
    }  
}


//const outcome = PlayRound(playerselection,computerselection);

function game(){
    let pscore = 0;
    let cscore = 0;
    for(let i = 0; i < 5; i++){
        
        const playerselection = prompt("Choose rock, paper or scissor");
        const computerselection = getComputerChoice();
        const outcome = PlayRound(playerselection,computerselection,pscore,cscore);
        console.log(outcome);
        console.log(pscore);
        console.log(cscore);

        if(pscore > cscore){
            console.log("You won the game!"); 
        }
        if(cscore > pscore){
            console.log("You lost the game...");
        }
        if(cscore = pscore){
            console.log("Draw!!!");
        }
    }
}

game();