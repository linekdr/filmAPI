import { getMovies } from "./util.js"; 

const search = document.getElementById("search");
const moviesContainer = document.getElementById("movies-container");
const loadMoreButton = document.getElementById('load-more');
let page = 1; 


async function loadMovies(query, pageNumber) {
    const movies = await getMovies(query, pageNumber);

    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.innerHTML = `<img src="${movie.Poster}" style="width: 50px; height: 50px;"> <br /> Titre: <a href="movie.html?id=${movie.imdbID}">${movie.Title}</a>`;
        moviesContainer.appendChild(movieDiv);
    });
}


search.addEventListener('input', async () => {
    moviesContainer.innerHTML = ''; 
    const query = search.value;

    if (query) {
        page = 1;
        loadMovies(query, page);

        // Affiche ou masque le bouton "Charger plus"
        loadMoreButton.style.display = 'block'; 
    }
});



loadMoreButton.addEventListener('click', () => {
    const query = search.value;

    if (query) {
        page++;
        loadMovies(query, page);
    }
});
