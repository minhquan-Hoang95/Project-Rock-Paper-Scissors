
let pointHuman = 0;
let pointComputer = 0;
const buttons = document.querySelectorAll('button');
const div = document.querySelector('div');
const para = document.querySelector('p');
const countScore = document.createElement('div');
const declareWinner = document.createElement('div');

buttons.forEach(button => button.addEventListener('click', () => {
    playRound(`${button.id}`);
}));

function playRound(playerSelection) {

    let computer = computerPlay();

    if (pointHuman < 5 && pointComputer < 5) {

        if (playerSelection == 'rock') {

            if(computer == 'rock'){
                para.textContent = 'It is a tie Rock-Rock, try one more time !';
            }
            else if (computer == 'scissors') {
                pointHuman++;
                para.textContent = 'You win! Rock beats Scissors!';
            }
            else {
                pointComputer++;
                para.textContent = 'You lose! Paper beats Rock!';
            }
        }
        else if (playerSelection == 'paper') {

            if(computer == 'paper'){
                para.textContent = 'It is a tie Paper - Paper, try one more time!';
            }
            else if (computer == 'rock') {
                pointHuman++;
                para.textContent = 'You win! Paper beats Rock!';
            }
            else {
                pointComputer++;
                para.textContent = 'You lose! Scissors beats Paper!';
            }
        }
        else if (playerSelection == 'scissors') {

            if(computer == 'scissors'){
                para.textContent = 'It is a tie Scissors - Scissors, try one more time!';
            }
            else if (computer == 'paper') {
                pointHuman++;
                para.textContent = 'You win! Scissors beats Paper!';
            }
            else {
                pointComputer++;
                para.textContent = 'You lose! Rock beats Scissors!';
            }
        }
        console.log(pointComputer);
        console.log(pointHuman);
    }
    else if (pointHuman == 5 || pointComputer == 5) {
            chooseWinner();
        }
    
    countScore.textContent = ` Player point : ${pointHuman} and Computer point : ${pointComputer}`;
    div.appendChild(countScore);
    div.appendChild(declareWinner);

}

function computerPlay() {

    let random = Math.floor(Math.random()*3);
    if(random == 1) {
        return 'rock';
    }
    else if (random == 2){
        return 'paper';
    }
    else {
        return 'scissors';
    }

}  

function chooseWinner() {

    if ( pointHuman < pointComputer){
        declareWinner.textContent = `The winner is Computer with ${pointComputer} `;
        declareWinner.setAttribute('style', 'color : gray');
    }
    else if (pointHuman > pointComputer) {
       declareWinner.textContent = `The winner is you with ${pointHuman} `;
       declareWinner.setAttribute('style','color : red');
    }    
}


 
 


 
 




