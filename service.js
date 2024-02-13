import { api, urls } from "./api";
import { createElement } from "./manipulationDomMethods";
import { changeLocation } from './utils';
const { TRENDING_MOVIES_URL, MOVIE_CATEGORIES_URL } = urls //endpoints

export async function sendTrendingMovies(rootElement, numPage = 1){
    const { data } = await api(`${TRENDING_MOVIES_URL}?page=${numPage}`);
    const movies = data.results
    movies.forEach(item => {
        
        const img = createElement('img', {
            class:'movie-img',
            src:`https://image.tmdb.org/t/p/w300/${item.poster_path}`
        })
        /* console.log(item) */
        const text = document.createTextNode(item.title)
        const p = createElement('p', {class:'movie-title'}, text)
        const li = createElement('li', {class:'movie-container'}, img, p)
        rootElement.appendChild(li)
    })
}

export async function sendGenreMovies(rootElement){
    const { data } = await api(MOVIE_CATEGORIES_URL);
    const genres = data.genres
    
    genres.forEach(item => {
        
        const p = createElement('p', {class:'genre__text'}, document.createTextNode(item.name))
        const li = createElement('li', {class:'genre-movie-container'}, p)
        li.addEventListener("click", (e) => {
            changeLocation('genre', `${e.target.innerText}-${item.id}`)

        })
        rootElement.appendChild(li)
    }) 
}

export async function sendMoviesByGenre (id, rootElement){
    const list = document.createElement('ul')
    list.classList.add('movies-by-genre')
    const { data } = await api('discover/movie', {
                    params : {
                        with_genres : id
                    }
                })
    const movies = data.results
    movies.forEach(movie => {
        const img = document.createElement('img')
        img.src = `https://image.tmdb.org/t/p/w300${movie.poster_path}`
        const li = document.createElement('li')
        
        li.appendChild(img)
        list.appendChild(li)
    });
    
    const genreMovieSection = document.querySelector('.genre-movie-section')
    rootElement.appendChild(list)
}