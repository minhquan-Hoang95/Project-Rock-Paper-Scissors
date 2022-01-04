
function computerPlay() {
    let random = Math.floor(Math.random()*3);
    if(random == 1) {
        return 'Rock';
    }
    else if (random == 2){
        return 'Paper';
    }
    else {
        return 'Scissors';
    }

}
function playRound(playSelection, computerSelection)
{

    
    playSelection = playSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if ((playSelection === 'rock' && computerSelection === 'rock') || (playSelection === 'paper' && computerSelection === 'paper') || (playSelection === 'scissors' && computerSelection === 'scissors')) {
         
         return (`It is a tie and we are the same ${playSelection}!`);
         
        //return 0; 
    }
    else if  (( playSelection === 'rock' && computerSelection === 'paper') || ( playSelection === 'paper' && computerSelection === 'scissors') || ( playSelection === 'scissors' && computerSelection === 'rock'))
    {
        pointComputer++;
        return (`You lose! ${computerSelection} beats ${playSelection}`);
        
        //return -1;
    }
    else {
        pointHuman++;
        return (`You win!  ${playSelection} beats ${computerSelection}`);
        
        //return 1;
    }
}
// const human = 'Scissors';
// const computer = computerPlay();
// console.log(playRound(human, computer));

    let pointHuman = 0;
    let pointComputer = 0;
function game(){
    
    for (let i = 1; i < 6 ; i++){
        let inputUser = prompt('Give me a thing!');
        let computer = computerPlay();
        console.log(playRound(inputUser.toLowerCase(), computer.toLowerCase()));
        console.log('Your point:', pointHuman);
        console.log('Computer\'s point: ', pointComputer);
    }
    if (pointHuman > pointComputer){
        return `You win! You have ${pointHuman}`;
    }
    else if (pointHuman < pointComputer){
        return `You lose! You have ${pointHuman}`;
    }
    else {
        return `Phew, not bad, hein!`;
    }
}



