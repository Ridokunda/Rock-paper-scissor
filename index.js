let arr = ["rock", "paper", "scissor"]; 

function getComputerChoice(){
    return arr[Math.floor(Math.random()*arr.length)];
}

function PlayRound(playerselection, computerselection, obj){
    // normalize
    const p = playerselection.toLowerCase();
    const c = computerselection.toLowerCase();

    if(p === c){
        return "Draw. Try Again...";
    }

    if(p === "rock" && c === "scissor"){
        obj.pscore++;
        return "You win — rock beats scissor!";
    }
    if(p === "scissor" && c === "rock"){
        obj.cscore++;
        return "You lose — rock beats scissor!";
    }
    if(p === "paper" && c === "rock"){
        obj.pscore++;
        return "You win — paper beats rock!";
    }
    if(p === "rock" && c === "paper"){
        obj.cscore++;
        return "You lose — paper beats rock!";
    }
    if(p === "scissor" && c === "paper"){
        obj.pscore++;
        return "You win — scissor beats paper!";
    }
    if(p === "paper" && c === "scissor"){
        obj.cscore++;
        return "You lose — scissor beats paper!";
    }

    return "Invalid selection";
}

function getPlayerChoice() {
    return new Promise((resolve) => {
        // remove any previous handlers to avoid duplicate resolves
        const rockEl = document.getElementById('rock');
        const paperEl = document.getElementById('paper');
        const scissorEl = document.getElementById('scissor');

        rockEl.onclick = (event) =>{
            event.preventDefault();
            clearHandlers();
            resolve("rock");
        } 
        paperEl.onclick = (event) =>{
            event.preventDefault();
            clearHandlers();
            resolve("paper");
        }    
        scissorEl.onclick = (event) =>{
            event.preventDefault();
            clearHandlers();
            resolve("scissor");
        }

        function clearHandlers(){
            rockEl.onclick = null;
            paperEl.onclick = null;
            scissorEl.onclick = null;
        }
    });
}

function updateScoreUI(obj, round){
    document.getElementById('pScore').textContent = obj.pscore;
    document.getElementById('cScore').textContent = obj.cscore;
    document.getElementById('roundNum').textContent = `${round} / 5`;
}

function setRoundMessage(text){
    const el = document.getElementById('roundMsg');
    el.textContent = text;
}

function setResultMessage(text){
    const el = document.getElementById('resultMsg');
    el.textContent = text;
}

async function game(){
    const obj = { pscore: 0, cscore: 0 };
    setResultMessage('');

    for(let i = 1; i <= 5; i++){
        updateScoreUI(obj, i);
        setRoundMessage(`Round ${i}: Choose rock, paper or scissor`);

        const playerselection = await getPlayerChoice();
        const computerselection = getComputerChoice();

        const outcome = PlayRound(playerselection, computerselection, obj);
        setRoundMessage(`You chose ${playerselection}. Computer chose ${computerselection}.`);
        setResultMessage(outcome);
        updateScoreUI(obj, i);
    }

    // final result
    let finalText = '';
    if(obj.pscore > obj.cscore) finalText = 'You won the game!';
    else if(obj.cscore > obj.pscore) finalText = 'You lost the game...';
    else finalText = 'Game is a draw.';

    setRoundMessage('Game over');
    setResultMessage(finalText + ` (Player ${obj.pscore} : ${obj.cscore} Computer)`);

    // show replay
    const replay = document.getElementById('replay');
    replay.style.display = 'inline-block';
    replay.onclick = () => {
        replay.style.display = 'none';
        setResultMessage('');
        game();
    };
}

document.addEventListener('DOMContentLoaded', () => {
    game();
});