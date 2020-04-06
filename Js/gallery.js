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

/* Ajouter une image à la suite de la Galerie */
let addPicture = document.querySelector('#form-image'); // sélection du formulaire, qui est actuellment en display none
let open = document.querySelector('#open'); // sélection du bouton avec pour id open
    open.addEventListener('click', function () { // création d'événement au clic
    addPicture.style.display = addPicture.style.display === 'block' ? // opérateur conditionnel permettant d'afficher le formulaire ou de le masquer
        'none' : 'block';
});


let postPicture = document.querySelector('#publier'); // sélection du boutton ayant pour id publier
postPicture.addEventListener('click', function () { //création de l'événement pour poster la photo au clic sur le bouton
    let url = document.querySelector('#image').value; // récupération de la valeur de la balise ayant pour id image
    let parentUrl = document.querySelector('.full-img'); // sélection de la class parente
    let image = document.createElement("img");// création d'une balise img
    image.classList.add('displayed-img'); // ajout class à la balise img
    image.src = url; // insértion de l'url dans la source de la balise img
    parentUrl.appendChild(image); // ajout le noeud enfant img au noeuf parent parentUrl
});


/* Bouton permettant d'afficher la galerie en mosaic 3 colonnes*/
    let mosaicButton = document.querySelector('#mosaic-button');
mosaicButton.addEventListener('click', function (event) {
    let mosaic = document.querySelector('.full-img');
    mosaic.style.columns = 3;
});

/* Bouton permettant d'afficher la galerie en liste, 1 colonne*/
let listButton = document.querySelector('#list-button');
listButton.addEventListener('click', function (list) {
    let koko = document.querySelector('.full-img');
    koko.style.columns = 1;
});

