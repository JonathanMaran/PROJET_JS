function fetchAllPosts() {
    fetch("https://www.scorebat.com/video-api/v1/")
        .then(response => response.json())
        .then(res => {
            const article = document.querySelector(".article");
            res.forEach((post, i) => {
                if(i < 5) {
                    console.log(post);
                    const title = document.createElement("h2");
                    title.style.color = "white";
                    const paragraph = document.createElement("div");
                    title.innerHTML = post.title;
                    paragraph.appendChild(title);
                    const video = document.createElement('div');
                    video.innerHTML = post.embed;
                    paragraph.appendChild(video);
                    article.appendChild(paragraph);

                }
            });
        })
        .catch(error => console.log(error));
}

// function createPost(dataPost) {
//     const title = document.createElement("h2");
//     const paragraph = document.createElement("p");
//     title.innerHTML = dataPost.title;
//     paragraph.appendChild(title);
//     return paragraph;
// }
//
// function handleData(data) { // fonction pour manipuler les données récupérer
//     const article = document.querySelector(".article");
//     data.forEach(post => {
//         article.appendChild(createPost(post));
//     });
// }

fetchAllPosts();