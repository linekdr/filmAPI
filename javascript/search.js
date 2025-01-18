import { getMovies } from "./util.js";

const search = document.getElementById("search");
const moviesContainer = document.getElementById("movies-container");


search.addEventListener('input', async () => {

    moviesContainer.innerHTML = '';
    const valeur = search.value;

    if (valeur) {
        const movies = await getMovies(valeur, 1);

        movies.forEach(movie => {
            const movieDiv = document.createElement('div');
            movieDiv.innerHTML =  `<img src="${movie.Poster}" style="width: 50px; height: 50px;"> <br /> Titre:  <a href="movie.html?id=${movie.imdbID}">${movie.Title}</a>`;
    
            moviesContainer.appendChild(movieDiv);
        });
    }
});