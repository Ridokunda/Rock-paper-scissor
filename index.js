console.log("Hello world!");

let arr = ["rock", "paper", "scissor"] ;

function getComputerChoice(){
    const choice = arr[Math.floor(Math.random()*arr.length)]
    return choice;
}

let obj = {
    pscore : 0,
    cscore : 0
}

function PlayRound(playerselection,computerselection,obj){
    
    if(playerselection.toLowerCase() === "rock" && computerselection === "scissor"){
        obj.pscore++;
        return "You win rock beats scissor!";
    }else if(playerselection.toLowerCase()=== "scissor" && computerselection === "rock"){
        obj.cscore++;
        return "You lose rock beats scissor!";
    }else if(playerselection.toLowerCase() === "paper" && computerselection === "rock"){
        obj.pscore++;
        return "You win paper beats rock!";
    }else if(playerselection.toLowerCase() === "rock" && computerselection === "paper"){
        obj.cscore++;
        return "You lose paper beats rock!";
    }else if(playerselection.toLowerCase() === "scissor" && computerselection === "paper"){
        obj.pscore++;
        return "You win scissor beats paper!";
    }else if(playerselection.toLowerCase() === "paper" && computerselection === "scissor"){
        obj.cscore++;
        return "You lose scissor beats paper!";
    }else if(playerselection.toLowerCase() === computerselection){
        return "Draw. Try Again...";
    }  
}


//const outcome = PlayRound(playerselection,computerselection);

function game(){
    let obj = {
        pscore : 0,
        cscore : 0
    }
    
    for(let i = 0; i < 5; i++){
        
        const playerselection = prompt("Choose rock, paper or scissor");
        const computerselection = getComputerChoice();
        const outcome = PlayRound(playerselection,computerselection,obj);
        console.log(outcome);
        console.log(obj.pscore);
        console.log(obj.cscore);
        
       
    }
    if(obj.pscore > obj.cscore){
        console.log("You won the game!"); 
    }
    if(obj.cscore > obj.pscore){
        console.log("You lost the game...");
    }
    if(obj.cscore = obj.pscore){
        console.log("Draw!!!");
    }
}

game();