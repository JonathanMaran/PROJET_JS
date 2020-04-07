// you can write js here
console.log('exo-3');

/* récupérer le choix de l'utilisateur
 */


function getUserChoice(userInput) {
    if (userInput === 'rock' | userInput === 'paper' | userInput === 'scissors' | userInput === 'bomb') {
        // console.log(userInput);
        return userInput;
    } else {
        // console.log('Erreur, veuillez saisir ROCK, PAPER or SCISSORS');
        return ('Erreur veuillez saisir rock, paper ou scissors');
    }
}

/* récupérer le choix du programme
 */

function getComputerChoice() {
    function getRandomInt(min, max) {
        min = Math.ceil(1);
        max = Math.floor(4);
        return Math.floor(Math.random() * (4 - 1)) + 1;
    }

    computerChoice = getRandomInt();
    if (computerChoice === 1) {
        computerChoice = 'rock';
        // console.log(computerChoice);
        return computerChoice;

    } else if (computerChoice === 2) {
        computerChoice = 'paper';
        // console.log(computerChoice);
        return computerChoice;
    } else {
        computerChoice = 'scissors';
        // console.log(computerChoice);
        return computerChoice;
    }
}

/* comparer les choix /*
 */

function determineWinner(userChoice, computerChoice) {
    let result = '';

    if (userChoice === 'bomb') {
        result = 'Won';
    } else if (userChoice === computerChoice) {
        result = 'Tied';
    } else if (userChoice === 'rock') {
        if (computerChoice === 'scissors') {
            result = 'Won';
        } else {
            result = 'Lost';
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            result = 'Lost';
        } else {
            result = 'Won';
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            result = 'Lost';
        } else {
            result = 'Won';
        }
    }
    return result;
}

function playGame() {
    let uChoice = getUserChoice('paper');
    let cChoice = getComputerChoice();
    console.log(uChoice);
    console.log(cChoice);

    determineWinner(uChoice, cChoice);
    console.log(determineWinner(uChoice, cChoice))
}

(playGame());


/* INTERFACE GRAPHIQUE DU JEU
 */

// L'utilisateur sélectionne une action
let choixUtilisateur = document.querySelector('.game');
choixUtilisateur.addEventListener('click', function (event) {
    if (event.target.classList.contains('pierre')) {
        let pierre = document.querySelector('.pierre');
        console.log(pierre);

        let parentChoix = document.querySelector('#userChoice');
        let image = document.createElement('img');
        let urlImage = './Images/pierre.png';
        image.src = urlImage;
        parentChoix.appendChild(image);
    }
    if (event.target.classList.contains('feuille')) {
        let feuille = document.querySelector('.feuille');
        console.log(feuille);

        let parentChoix = document.querySelector('#userChoice');
        let image = document.createElement('img');
        let urlImage = './Images/feuille.png';
        image.src = urlImage;
        parentChoix.appendChild(image);
    }
    if (event.target.classList.contains('ciseaux')) {
        let ciseaux = document.querySelector('.ciseaux');
        console.log(ciseaux);

        let parentChoix = document.querySelector('#userChoice');
        let image = document.createElement('img');
        let urlImage = './Images/ciseaux.png';
        image.src = urlImage;
        parentChoix.appendChild(image);
    }
});
