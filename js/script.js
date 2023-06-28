const options = ['rock','paper','scissors'];
let counter = 0;
// Computer Choice
let computerChoose;
function getComputerChoice(options) { 
   computerChoose = options[Math.floor(Math.random() * options.length)];
   return computerChoose
}
getComputerChoice(options);

function game() {
  if(computerChoose === playerChoose) {
    drawResult();
  }
  else if (computerChoose === 'rock' && playerChoose === 'paper') {
    winResult();
  }
  else if (computerChoose === 'paper' && playerChoose === 'rock') {
    loseResult();
  }
    else if (computerChoose === 'scissors' && playerChoose === 'rock') {
      winResult();
  }
  else if (computerChoose === 'rock' && playerChoose === 'scissors') {
    loseResult();
  }
  else if (computerChoose === 'rock' && playerChoose === 'paper') {
    loseResult();
  }
  else if (computerChoose === 'scissors' && playerChoose === 'paper') {
    loseResult();
  }
  else if (computerChoose === 'paper' && playerChoose === 'scissors') {
    winResult();
  }
  getComputerChoice(options);
}

// Buttons

const buttons = document.querySelectorAll('button')

buttons.forEach ((button) =>{ 
    button.addEventListener('click', () => {
    playerChoose = button.id;
    game();
  });
});

// Results

const result = document.querySelector('#result')

function drawResult() {
  resultDraw = document.createElement('div');
  resultDraw.classList.add('content-draw');
  resultDraw.textContent = `It's a Draw, Computer chose ${computerChoose.charAt(0).toUpperCase() + computerChoose.slice(1)}`
  result.appendChild(resultDraw);
};


function winResult() {
const resultWin = document.createElement('div');
resultWin.classList.add('content-win');
resultWin.textContent = `You won!!! Computer chose ${computerChoose.charAt(0).toUpperCase() + computerChoose.slice(1)}`
result.appendChild(resultWin);
}

function loseResult() {
  const resultLose = document.createElement('div');
  resultLose.classList.add('content-lose');
  resultLose.textContent = `You lose, Computer chose ${computerChoose.charAt(0).toUpperCase() + computerChoose.slice(1)}`
  result.appendChild(resultLose);
  }
