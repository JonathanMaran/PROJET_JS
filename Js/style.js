function fetchAllPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            return response.json();
        }) // analyser la réponse en JSON
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
    section.className = "post box"; //
    section.style.width = "48%";
    section.style.backgroundColor = "red";
    const title = document.createElement("h2");
    title.style.color = "black";
    title.innerHTML = dataPost.title.toUpperCase();
    section.appendChild(title);
    const body = document.createElement("div");
    body.style.color = "white";
    body.innerHTML = dataPost.body;
    title.appendChild(body);

    return section; // balise section > h2 > div vidéo (retourne aussi les enfants)
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