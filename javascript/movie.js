import { getMovieDetails } from "./util.js";

const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');

/**
 * Fonction qui affiche les détails d'un film
 */
async function displayMovieDetails() {
    const movieDetails = await getMovieDetails(movieId);

    document.getElementById("moviePoster").src = movieDetails.Poster;
    document.getElementById("movieTitle").textContent = movieDetails.Title;
    document.getElementById("movieGenre").textContent = movieDetails.Genre;
    document.getElementById("moviePlot").textContent = movieDetails.Plot;
    document.getElementById("movieActors").textContent = movieDetails.Actors;
}

displayMovieDetails();