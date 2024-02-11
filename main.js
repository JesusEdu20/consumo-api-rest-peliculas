import { createElement } from './manipulationDomMethods';
 import { changeLocation } from './utils';
/* import { navigator } from './navigation' */; 

const API_KEY = '9c3b989e925346e1d15585302f9d420e';
const TRENDING_MOVIES_URL = `/trending/movie/day` 
const MOVIE_CATEGORIES_URL = `/genre/movie/list`;

export const api = new axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {'Content-Type': 'application/json;charset=utf-8'},
    params : { 'api_key' : API_KEY } 
})

const root = document.getElementById('app');
const trendingMovieList = document.getElementById('app-trending-movie__list'); 
const genreMovieList = document.getElementById('app-genre-movie__list');
const trendingViewMoreButton = document.getElementById('trending-movie-list-button__view-more');
const trendingMovieTitle = document.querySelector('.trending-movie-title');
const genreTitle = document.querySelector('.genre-movie-title')

export async function getTrendingMovies(rootElement){
  
    const { data } = await api(TRENDING_MOVIES_URL);
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

/* export async function getGenreMovies(){
    const { data } = await api(MOVIE_CATEGORIES_URL);
    const genres = data.genres
    
    genres.forEach(item => {
        
        const p = createElement('p', {class:'genre__text'}, document.createTextNode(item.name))
        const li = createElement('li', {class:'genre-movie-container'}, p)
        li.addEventListener("click", (e) => {
            changeLocation('genre', `${e.target.innerText}-${item.id}`)

        })
        genreMovieList.appendChild(li)
    }) 
}
 */
//Events

/* trendingViewMoreButton.addEventListener('click', ()=>{//trending section
    changeLocation('trending')
}) */

/* trendingMovieTitle.addEventListener('click', () => {// home section
    changeLocation('')
})

genreTitle.addEventListener('click', () => {
    changeLocation('')
})
 */


