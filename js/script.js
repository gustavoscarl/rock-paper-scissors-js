const options = ['rock','paper','scissors'];
// Computer Choice
let computerChoose;
function getComputerChoice(options) { 
   computerChoose = options[Math.floor(Math.random() * options.length)];
   return computerChoose
}
getComputerChoice(options);
// Player Choice

const getPlayerChoice = prompt('Choose your fighter! (rock, paper or scissors)')

const playerChoose = getPlayerChoice.toLowerCase()

function checkChoice() {
  if (playerChoose === 'rock' || 'paper' || 'scissors'){
    console.log('Okay!')
  } else {
    console.log('Your choice is invalid, please reload the page and type again')
  }
}

// Game

function game() {
  if(computerChoose === playerChoose) {
    console.log('Its a Draw!')
  }
  else if (computerChoose === 'rock' && playerChoose === 'paper') {
      console.log('You won!')
  }
  else if (computerChoose === 'paper' && playerChoose === 'rock') {
    console.log('Computer won!')
  }
    else if (computerChoose === 'scissors' && playerChoose === 'rock') {
  console.log('You won!')
  }
  else if (computerChoose === 'rock' && playerChoose === 'scissors') {
  console.log('Computer won!')
  }
  else if (computerChoose === 'rock' && playerChoose === 'paper') {
  console.log('You won!')
  }
  else if (computerChoose === 'scissors' && playerChoose === 'paper') {
    console.log('Computer won!')
  }
  else if (computerChoose === 'paper' && playerChoose === 'scissors') {
    console.log('You won!')
  }
  console.log('Computer chose', computerChoose)
}


