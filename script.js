

/** ----- SHI-FU-MI EN JAVASCRIPT ----- **/

// let playerInput = prompt("Your choice ( rock, paper, scissors) ?").toLowerCase;

// function getPlayerChoice(playerInput){
//     playerInput = playerInput
//     if(playerInput !== 'rock' && playerInput !== 'paper' && playerInput !== 'scissors' && playerInput !== 'bomb'){
//         console.log('Please write one of these choices : "rock", "paper", "scissors"');
//     } else {
//         console.log('You choose : ' + playerInput)
//         return(playerInput);
//     }
// }

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
//   }

// function getComputerChoice(){
//     const number = getRandomInt(3);
//     if (number === 0){
//         console.log('Computer choose : rock');
//         return ('rock');
//     } else if(number === 1){
//         console.log('Computer choose : paper');
//         return('paper');
//     }else {
//         console.log('Computer choose : scissors');
//         return('scissors');
//     }
// }

// function findWinner(playerChoice, computerChoice){
//     if(playerChoice === computerChoice){
//         return 'Tied !'
//     } else {
//         if (playerChoice === 'rock' && computerChoice === 'scissors'){
//             return 'You win !'
//         } else if(playerChoice === 'paper' && computerChoice === 'rock') {
//             return 'You win !'
//         } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
//             return 'You win !'
//         } else if (playerChoice === 'bomb') {
//             return 'You win !'
//         }else {
//             return 'You loose !'
//         }
//     }
// }


// function playGame(){
//     let uChoice = getPlayerChoice(playerInput);
//     let computerChoice = getComputerChoice();
//     console.log(findWinner(uChoice, computerChoice));
// }

// playGame();

/** --------------------------------------------------- **/

/** ----- SHI-FU-MI EN ALPINE.JS ----- **/

document.addEventListener('alpine:init', () => {
    console.log('alpine')
    Alpine.data('game', () => ({
        openRock: true,
        openPaper: true,
        openScissors: true,
        userChoice: "",
        computerChoice: "",
        result: "",

        rock: {
            ['@click'](e) {
                const endGame = playingGame(e)
                console.log(endGame);
                this.userChoice = endGame.userChoice
                this.computerChoice = endGame.computerChoice
                this.result = endGame.result 
                this.openPaper = ! this.openPaper
                this.openScissors = ! this.openScissors
            },
        },
        paper: {
            ['@click'](e) {
                const endGame = playingGame(e)
                console.log(endGame);
                this.userChoice = endGame.userChoice
                this.computerChoice = endGame.computerChoice
                this.result = endGame.result 
                this.openRock = ! this.openRock
                this.openScissors = ! this.openScissors
            },
        },
        scissors: {
            ['@click'](e) {
                const endGame = playingGame(e)
                console.log(endGame);
                this.userChoice = endGame.userChoice
                this.computerChoice = endGame.computerChoice
                this.result = endGame.result 
                this.openPaper = ! this.openPaper
                this.openRock = ! this.openRock
            },
        },

        resultRock: {
            ['x-show']() {
                return this.openRock
            },
        },
        resultPaper: {
            ['x-show']() {
                return this.openPaper
            },
        },
        resultScissors: {
            ['x-show']() {
                return this.openScissors
            },
        },
        resultGame: {
            ['x-text']() {
                return this.result
            },
        }
    }))
})


// Fonction de déroulement du jeu
function playingGame(e){
    choice= getPlayerChoice(e.target.innerHTML)
    choicePC= getComputerChoice()
    return { 
        userChoice: choice,
        computerChoice: choicePC,
        result: findWinner(choice, choicePC)
    }
}

// Fonction choix du joueur
function getPlayerChoice(playerInput){
    playerInput = playerInput
    if(playerInput !== 'rock' && playerInput !== 'paper' && playerInput !== 'scissors' && playerInput !== 'bomb'){
        console.log('Please write one of these choices : "rock", "paper", "scissors"');
    } else {
        console.log('You choose : ' + playerInput)
        return playerInput;
    }
}

//Fonction choix de l'ordinateur
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getComputerChoice(){
    const number = getRandomInt(3);
    if (number === 0){
        console.log('Computer choose : rock');
        return ('rock');
    } else if(number === 1){
        console.log('Computer choose : paper');
        return('paper');
    }else {
        console.log('Computer choose : scissors');
        return('scissors');
    }
}

function findWinner(playerChoice, computerChoice){
    if(playerChoice === computerChoice){
        return 'Tied !'
    } else {
        if (playerChoice === 'rock' && computerChoice === 'scissors'){
            return 'You win !'
        } else if(playerChoice === 'paper' && computerChoice === 'rock') {
            return 'You win !'
        } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
            return 'You win !'
        } else if (playerChoice === 'bomb') {
            return 'You win !'
        }else {
            return 'You loose !'
        }
    }
}

// Rechargement de la page
$('#restart').click(() => {
    console.log('ouaaaai')
    location.reload();
})
