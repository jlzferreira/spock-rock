import { startConfetti, stopConfetti, removeConfetti } from "./confetti.js"

const playerScoreEl = document.getElementById('playerScore')
const playerChoiceEl = document.getElementById('playerChoice')

const computerScoreEl = document.getElementById('computerScore')
const computerChoiceEl = document.getElementById('computerChoice')

const resultText = document.getElementById('resultText')

const playerRock = document.getElementById('playerRock')
const playerPaper = document.getElementById('playerPaper')
const playerScissors = document.getElementById('playerScissors')
const playerLizard = document.getElementById('playerLizard')
const playerSpock = document.getElementById('playerSpock')

const computerRock = document.getElementById('computerRock')
const computerPaper = document.getElementById('computerPaper')
const computerScissors = document.getElementById('computerScissors')
const computerLizard = document.getElementById('computerLizard')
const computerSpock = document.getElementById('computerSpock')

const allGameIcons = document.querySelectorAll('.far')

const choices = {
  rock: { name: 'rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'spock', defeats: ['scissors', 'rock'] },
}

let playerScoreNumber = 0
let computerScoreNumber = 0
let computerChoice = '';

// Reset 'selected'
function resetSelected() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove('selected')
  })
  stopConfetti()
  removeConfetti()
}

// Reset Placar e Escolhas
function resetAll() {
  playerChoiceEl.textContent = ""
  playerScoreEl.textContent = 0
  playerScoreNumber = 0

  computerChoiceEl.textContent = ""
  computerScoreEl.textContent = 0
  computerScoreNumber = 0

  resultText.textContent = "Faça sua jogada!"

  resetSelected()
}

window.resetAll = resetAll

// Escolha aleatoria do computador
function computerRandomChoice() {
  const computerChoiceNumber = Math.random()
  if (computerChoiceNumber < 0.2) {
    computerChoice = 'rock'
  } else if (computerChoiceNumber <= 0.4) {
    computerChoice = 'paper'
  } else if (computerChoiceNumber <= 0.6) {
    computerChoice = 'scissors'
  } else if (computerChoiceNumber <= 0.8) {
    computerChoice = 'lizard'
  } else {
    computerChoice = 'spock'
  }
}

// Checa resultado, aumenta score, atualiza o Placar
function updateScore(playerChoice) {
  if (playerChoice === computerChoice) {
    resultText.textContent = "Empate."
  } else  {
    const choice = choices[playerChoice]
    //console.log(choice.defeats.indexOf(computerChoice))
    if (choice.defeats.indexOf(computerChoice) >-1) {
      resultText.textContent = "Você Venceu."
      startConfetti();
      playerScoreNumber++
      playerScoreEl.textContent = playerScoreNumber
    } else {
      resultText.textContent = "Você Perdeu."
      computerScoreNumber++
      computerScoreEl.textContent = computerScoreNumber
    } 
  }
}

// Chama as funçoes para processar o turno
function checkResult(playerChoice) {
  resetSelected()
  computerRandomChoice()
  displayComputerChoice()
  updateScore(playerChoice)
}

// Passa a escolha do jogador e estiliza os icones
function select(playerChoice) {
  checkResult(playerChoice)
  // add 'selected' para estilizar a escolha do jogador
  switch(playerChoice){
    case 'rock':
      playerRock.classList.add('selected')
      playerChoiceEl.textContent = ' --- Pedra'
      break
    case 'paper':
      playerPaper.classList.add('selected')
      playerChoiceEl.textContent = ' --- Papel'
      break   
    case 'scissors':
      playerScissors.classList.add('selected')
      playerChoiceEl.textContent = ' --- Tesoura'
      break    
    case 'lizard':
      playerLizard.classList.add('selected')
      playerChoiceEl.textContent = ' --- Lagarto'
      break    
    case 'spock':
      playerSpock.classList.add('selected')
      playerChoiceEl.textContent = ' --- Spock'
      break 
    default:
      break    
  }
}
window.select = select

// Passa a escolha do computador e estiliza os icones
function displayComputerChoice() {
  switch(computerChoice){
    case 'rock':
      computerRock.classList.add('selected')
      computerChoiceEl.textContent = ' --- Pedra'
      break
    case 'paper':
      computerPaper.classList.add('selected')
      computerChoiceEl.textContent = ' --- Papel'
      break   
    case 'scissors':
      computerScissors.classList.add('selected')
      computerChoiceEl.textContent = ' --- Tesoura'
      break    
    case 'lizard':
      computerLizard.classList.add('selected')
      computerChoiceEl.textContent = ' --- Lagarto'
      break    
    case 'spock':
      computerSpock.classList.add('selected')
      computerChoiceEl.textContent = ' --- Spock'
      break 
    default:
      break    
  }
}

// Define valores iniciais
resetAll()