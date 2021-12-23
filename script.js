//default settings
let playerSelection = 'ROCK'
let computerSelection
let playerScore = 0
let computerScore = 0

function round() {
    choose()
    computer()
    result()
}
// player provides choice
function choose() {
    playerSelection = prompt('Rock, Paper, or Scissors?')
}
// create a random choice for computer
function computer() {
    let select
    select = Math.random()*3
    if (select>2) computerSelection = 'SCISSORS'
    if (select<=2 && select>1) computerSelection = 'PAPER'
    if (select<=1) computerSelection = 'ROCK'
}
// evalute winner
function result() {
    let capPlayer = playerSelection.toUpperCase()
    // Win Cases
    if (capPlayer == 'ROCK' && computerSelection == 'SCISSORS') {
        console.log('You Win! Rock beats Scissors!')
        playerScoreUp()
    }
    else if (capPlayer == 'PAPER' && computerSelection == 'ROCK') {
        console.log('You Win! Paper beats Rock!')
        playerScoreUp()
    }
    else if (capPlayer == 'SCISSORS' && computerSelection == 'PAPER') {
        console.log('You Win! Scissors beats Paper!')
        playerScoreUp()
    }
    // Tie Cases
    else if (capPlayer == 'ROCK' && computerSelection == 'ROCK') {
        console.log('Tie! Both Players picked Rock!')
        console.log(`Score ${playerScore}-${computerScore}`)
        round()
    }
    else if (capPlayer == 'PAPER' && computerSelection == 'PAPER') {
        console.log('Tie! Both Players picked Paper!')
        console.log(`Score ${playerScore}-${computerScore}`)
        round()
    }
    else if (capPlayer == 'SCISSORS' && computerSelection == 'SCISSORS') {
        console.log('Tie! Both Players picked Scissors!')
        console.log(`Score ${playerScore}-${computerScore}`)
        round()
    }
    // Lose Cases
    else if (capPlayer == 'ROCK' && computerSelection == 'PAPER') {
        console.log('You Lose! Paper beats Rock')
        computerScoreUp()
    }
    else if (capPlayer == 'PAPER' && computerSelection == 'SCISSORS') {
        console.log('You Lose! Scissors Beats Paper')
        computerScoreUp()
    }
    else {
        console.log('You Lose! Rock beats Scissors')
        computerScoreUp()
    }
}
// Track scores
function playerScoreUp() {
    playerScore++
    if (playerScore === 3) {
        console.log(`You won the Game! ${playerScore}-${computerScore}`)
        reset()
    }
    else {
    console.log(`Score ${playerScore}-${computerScore}`)
    round()
    }
}
function computerScoreUp() {
    computerScore++
    if (computerScore === 3) {
        console.log(`Game Over! ${playerScore}-${computerScore}`)
        reset()
    }
    else {
    console.log(`Score ${playerScore}-${computerScore}`)
    round()
    }
}
round()