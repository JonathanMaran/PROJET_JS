/* --------------------------------------*/
/* Quand l'utilisateur clique sur le boutton,
basculer entre masquer et afficher le contenu du menu déroulant */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Ferme le menu si l'utilisateur clique en dehors de celui ci
window.onclick = function (event) { //onclick représente le gestionnaire d'évènement onClick de l'élément courant,evenement MouseEvent (intéraction de l'utilisateur avec un appareil de pointage, type souris)
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content"); // on récupère les éléments de la classe dropdown-content
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) { // si la class dropdown-content contient aussi la classe show
                openDropdown.classList.remove('show'); // alors on supprime la classe show, ce qui retire l'affichage du menu dropdown
            }
        }
    }
};
/*GALLEry*/

let mosaicButton = document.querySelector('#mosaic-button');
mosaicButton.addEventListener('click', function (event) {
    let mosaic = document.querySelector('.full-img');
    mosaic.style.columns = 6;
});

let listButton = document.querySelector('#list-button');
listButton.addEventListener('click', function (list) {
    let koko = document.querySelector('.full-img');
    koko.style.columns = '3';
});

