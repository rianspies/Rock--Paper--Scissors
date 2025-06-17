const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
let humanScore = document.getElementById('humanScore');
let computerScore = document.getElementById('computerScore');
const outcome = document.getElementById('outcome');
let human = ''
let humanCount = 0;
let computerCount = 0;


const rockClick = () =>{
    human = 'rock';
    play();
};

const paperClick = () =>{
    human = 'paper';
    play();
};

const scissorsClick = () =>{
    human = 'scissors'
    play();
}

const play = () =>{
    const result = Math.ceil(Math.random()*3);
    let computer = '';
    if (result == 1){
        computer = 'rock'
    } else if(result == 2){
        computer = 'paper'
    } else {
        computer = 'scissors'
    };

    if (computer == 'rock' && human == 'scissors' || computer == 'scissors' && human == 'paper' || computer == 'paper' && human == 'rock' ){
        outcome.innerText = 'Computer wins'
        computerCount++
    } else if ( computer == human){
        outcome.innerText = 'Its a Tie. Go again'
    } else {
        outcome.innerText = 'Human wins'
        humanCount++
    }
    humanScore.innerText = humanCount;
    computerScore.innerText = computerCount
};

rock.addEventListener('click', rockClick);
paper.addEventListener('click', paperClick);
scissors.addEventListener('click', scissorsClick);