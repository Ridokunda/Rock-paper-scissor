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
    
    if(playerselection === "rock" && computerselection === "scissor"){
        obj.pscore++;
        return "You win rock beats scissor!";
    }else if(playerselection.toLowerCase()=== "scissor" && computerselection === "rock"){
        obj.cscore++;
        return "You lose rock beats scissor!";
    }else if(playerselection === "paper" && computerselection === "rock"){
        obj.pscore++;
        return "You win paper beats rock!";
    }else if(playerselection === "rock" && computerselection === "paper"){
        obj.cscore++;
        return "You lose paper beats rock!";
    }else if(playerselection === "scissor" && computerselection === "paper"){
        obj.pscore++;
        return "You win scissor beats paper!";
    }else if(playerselection === "paper" && computerselection === "scissor"){
        obj.cscore++;
        return "You lose scissor beats paper!";
    }else if(playerselection === computerselection){
        return "Draw. Try Again...";
    }  
}

function getPlayerChoice() {
    return new Promise((resolve) => {
        document.getElementById('rock').onclick = (event) =>{
            event.preventDefault();
            resolve("rock");
        } 
        document.getElementById('paper').onclick = (event) =>{
            event.preventDefault();
            resolve("paper");
        }    
        document.getElementById('scissor').onclick = () =>{
            event.preventDefault();
            resolve("scissor");
        } 
    });
}

async function game(){
    let obj = {
        pscore : 0,
        cscore : 0
    }
    
    for(let i = 0; i < 5; i++){
        console.log(`Round ${i + 1}`);
        const playerselection = await getPlayerChoice();
        const computerselection = getComputerChoice();
        const outcome = PlayRound(playerselection,computerselection,obj);
        console.log(outcome);
        console.log('Player Score: '+obj.pscore);
        console.log('Computer Score: '+obj.cscore);
        
    }
    if(obj.pscore > obj.cscore){
        console.log("You won the game!"); 
    }
    if(obj.cscore > obj.pscore){
        console.log("You lost the game...");
    }
    if(obj.cscore == obj.pscore){
        console.log("Draw!!!");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    game();
});