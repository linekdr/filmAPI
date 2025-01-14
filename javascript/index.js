import { getMovies } from './util.js';

const moviesContainer = document.getElementById('movies-container');
const loadMoreButton = document.getElementById('load-more');
let page  = 1;

async function displayMovies() {
    console.log("Page :" + page)
    const movies = await getMovies("2024", page);
    
    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.innerHTML =  `<img src="${movie.Poster}" style="width: 50px; height: 50px;"> <br /> Titre:  ${movie.Title}`;

        moviesContainer.appendChild(movieDiv);
    });
}

loadMoreButton.addEventListener('click', () => {
    page++;
    displayMovies();
});

displayMovies();