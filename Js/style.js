function fetchAllPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            return response.json();// analyser la réponse en JSON
        })
        .then(res => { //retour si resolve
            fillTheSection(res);
            console.log(res);
        })
        .catch(rej => {
            console.log(rej); // retour si reject
        });
}


function createPost(dataPost) {
    const section = document.createElement("section"); // création d'un élement section
    section.className = "post box"; // ajout class à la section créée
    section.style.width = "48%"; // taille de la section
    section.style.backgroundColor = "red";
    const title = document.createElement("h2");
    title.style.color = "black";
    title.innerHTML = dataPost.title.toUpperCase(); // insérer le titre en maj de notre API dans la balise h2 de notre code html
    section.appendChild(title); // ajoute un noeud enfant h2 à ma section
    const body = document.createElement("div");
    body.style.color = "white";
    body.innerHTML = dataPost.body;
    title.appendChild(body);

    return section; // balises section > h2 > div  (retourne aussi les enfants)
}


function fillTheSection(data) {// fonction pour manipuler les données récupérer
    const main = document.querySelector('main'); // sélection de la balise main
    data.forEach((post, i) => {
        if (i < 5) { // limiter à 5 posts
            main.appendChild(createPost(post, i)); // créer un enfant, avec la fonction createPost, au main
        }
    });
}

fetchAllPosts();


// Utilisation du carousel
$(document).ready(function () {
    $('.slides').slick({ // initialiser le carousel
        speed: 300, // vitesse de défilement du carousel
        autoplay: true, // lecture auto du carousel
        dots: true, // petits points indiquant le nombre de photos du carousel
    })
});

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

//-------------------------------------


//FORMULAIRE EVENEMENT

let postArticle = document.querySelector('#submit');
postArticle.addEventListener('click', function () {
    let main = document.querySelector("main");
    let title = document.querySelector("#title").value;
    let body = document.querySelector("#body").value;
    console.log(title);


    function addArticle(title, body) {
        let post = {title: title, body: body};
        return post;
    }

    let post = addArticle(title, body);

    let createArticle = createPost(post);
    main.appendChild(createArticle);
});

// FORMULAIRE
// function ajout(element){
//     let formulaire = document.formulaireDynamque;
//     // On clone le bouton d'ajout
//     let ajout = element.cloneNode(true);
//     // Crée un nouvel élément de type "input"
//     let champ = document.createElement("input");
//     // Les valeurs encodée dans le formulaire seront stockées dans un tableau
//     champ.name = "champs[]";
//     champ.type = "text";
//
//     let sup = document.createElement("input");
//     sup.value = "supprimer un champ";
//     sup.type = "button";
//     // Ajout de l'événement onclick
//     sup.onclick = function onclick(event)
//     {suppression(this);};
//
//     // On crée un nouvel élément de type "p" et on insère le champ l'intérieur.
//     let bloc = document.createElement("p");
//     bloc.appendChild(champ);
//     formulaire.insertBefore(ajout, element);
//     formulaire.insertBefore(sup, element);
//     formulaire.insertBefore(bloc, element);
// }
//
// function suppression(element){
//     var formulaire = document.formulaireDynamque;
//     // Supprime le bouton d'ajout
//     formulaire.removeChild(element.previousSibling);
//     // Supprime le champ
//     formulaire.removeChild(element.nextSibling);
//     // Supprime le bouton de suppression
//     formulaire.removeChild(element);
// }