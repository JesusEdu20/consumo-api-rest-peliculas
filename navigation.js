import { changeLocation, View } from './utils.js';
import { getTrendingMovies, getGenreMovies, api} from './main';
window.addEventListener('hashchange', navigator);


//views
const genres = new View('.genre-movie-section', '.genre-movie-list-container', '.trending-movie-section');
const trendingViewMore = new View('.trending-movie-section', '.genre-movie-section')
const home = new View(null)

export function navigator () {
    
    const hash = location.hash
    if(hash.startsWith('#trending')){
       trendingViewMore.setView()
       
    }
    else if(hash.startsWith('#genre')){
       genres.setView() // display genre section 
       const title = document.querySelector('.genre-movie-title')
       const hashValue = window.location.hash;
       const [_, value] = hashValue.split('=')
       const [categoryName, id] = value.split('-')
       title.innerHTML = categoryName
       getMoviesByGenre(id)
    }
    else{
        home.displayElements('block', '.genre-movie-section', '.genre-movie-list-container', '.trending-movie-section')
        home.displayElements('none', '.movies-by-genre')
    }
}

async function getMoviesByGenre (id){
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
    genreMovieSection.appendChild(list)
}