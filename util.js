const API_KEY = '9a2f31c4';
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

export async function getMovies(titre, page = 1){
    const reponse = await fetch(`https://www.omdbapi.com/?apikey=9a2f31c4&s=${titre}&page=${page}`);
    const movies = await reponse.text();
    const moviesJson = JSON.parse(movies);

    return moviesJson.Search || [];
}