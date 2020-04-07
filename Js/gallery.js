/* --------------------------------------*/



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
    let div = document.createElement("div");// création d'une balise div
    let button = document.createElement("button");// création d'une balise paragraph
    let image = document.createElement("img");
    div.className = "new-picture";
    button.textContent = "x";
    button.className = "delete-picture";
    image.classList.add('displayed-img'); // ajout class à la balise img
    image.src = url; // insértion de l'url dans la source de la balise img
    parentUrl.appendChild(div); // ajout le noeud enfant div au noeuf parent parentUrl
    div.appendChild(image); // ajout le noeud enfant img au noeuf parent div
    div.appendChild(button); // ajout le noeud enfant paragraph au noeuf parent div
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

/* croix permettant de supprimer un post photo*/
//let deleteButton = document.querySelector('.delete-picture'); // N'existe pas encore dans le dom
// il faut donc attacher l'envent listener sur un autre object que le bouton...
// lorsqu'on cible le bouton, il faut récupérer son parent et le retirer du dom
document.addEventListener('click', function (event) {
    // il faut récupérer le node correspondant à l'event
    console.log(event); // voir tout l'évent
    if(event.target.classList.contains('delete-picture')){
        event.target.parentElement.remove();
    }
});

