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


$(document).ready(function () {
    $('.slides').slick({ // initialiser le carousel
        speed: 300, // vitesse de défilement du carousel
        autoplay: true, // lecture auto du carousel
        dots: true, // petits points indiquant le nombre de photos du carousel
    })
});