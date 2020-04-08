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

// function getComputerChoice() {
//     function getRandomInt(min, max) {
//         min = Math.ceil(1);
//         max = Math.floor(4);
//         return Math.floor(Math.random() * (4 - 1)) + 1;
//     }
//
//     computerChoice = getRandomInt();
//     if (computerChoice === 1) {
//         computerChoice = 'rock';
//         // console.log(computerChoice);
//         let parentChoix = document.querySelector('#computer');
//         let image = document.createElement('img');
//         let urlImage = './Images/pierre.png';
//         image.src = urlImage;
//         parentChoix.appendChild(image);
//         return image;
//
//     } else if (computerChoice === 2) {
//         computerChoice = 'paper';
//         // console.log(computerChoice);
//         return computerChoice;
//     } else {
//         computerChoice = 'scissors';
//         // console.log(computerChoice);
//         return computerChoice;
//     }
// }

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


/* INTERFACE GRAPHIQUE DU JEU
 */

// L'utilisateur sélectionne une action
let choixUtilisateur = document.querySelector('.game');
choixUtilisateur.addEventListener('click', function (event) {

    // cette condition me permet de supprimer ma précédente action (si je fais pierre au tour 1, au deuxième tour, mon action 1 est remplacée par l'action 2
    if (document.querySelector('#userChoice img') != null) {
        let divRemove = document.querySelector('#userChoice img');
        divRemove.remove();
    }
    if (document.querySelector('#computer img') != null) {
        let divRemove = document.querySelector('#computer img');
        divRemove.remove();
    }

    // Affichage de mon choix dans la div userChoice
    if (event.target.classList.contains('pierre')) {
        let pierre = document.querySelector('.pierre');
        console.log(pierre);

        let parentChoix = document.querySelector('#userChoice');
        let image = document.createElement('img');
        let urlImage = './Images/pierre.png';
        image.src = urlImage;
        parentChoix.appendChild(image);
        // userChoice = 'pierre';
        // return userChoice;
    }
    if (event.target.classList.contains('feuille')) {
        let feuille = document.querySelector('.feuille');
        console.log(feuille);

        let parentChoix = document.querySelector('#userChoice');
        let image = document.createElement('img');
        let urlImage = './Images/feuille.png';
        image.src = urlImage;
        parentChoix.appendChild(image);
        // userChoice = 'feuille';
        // return userChoice;
    }
    if (event.target.classList.contains('ciseaux')) {
        let ciseaux = document.querySelector('.ciseaux');
        console.log(ciseaux);

        let parentChoix = document.querySelector('#userChoice');
        let image = document.createElement('img');
        let urlImage = './Images/ciseaux.png';
        image.src = urlImage;
        parentChoix.appendChild(image);
        // userChoice = 'ciseaux';
        // return userChoice;
    }

    function getRandomInt(min, max) {
        min = Math.ceil(1);
        max = Math.floor(4);
        return Math.floor(Math.random() * (4 - 1)) + 1;
    }

    computerChoice = getRandomInt();
    if (computerChoice === 1) {
        computerChoice = 'rock';
        // console.log(computerChoice);
        let parentChoix = document.querySelector('#computer');
        let image = document.createElement('img');
        let urlImage = './Images/pierre.png';
        image.src = urlImage;
        parentChoix.appendChild(image);
        return computerChoice;

    } else if (computerChoice === 2) {
        computerChoice = 'paper';
        let parentChoix = document.querySelector('#computer');
        let image = document.createElement('img');
        let urlImage = './Images/feuille.png';
        image.src = urlImage;
        parentChoix.appendChild(image);
        return computerChoice;
    } else {
        computerChoice = 'scissors';
        let parentChoix = document.querySelector('#computer');
        let image = document.createElement('img');
        let urlImage = './Images/ciseaux.png';
        image.src = urlImage;
        parentChoix.appendChild(image);
        return computerChoice;
    }

    // determineWinner(userChoice, computerChoice);

});


// getComputerChoice();
// console.log(computerChoice);
