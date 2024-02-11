import { createElement } from "../manipulationDomMethods";
import { sendGenreMovies, sendMoviesByGenre } from "../service";
/* import { section } from "./trendingMovieSection"; */

const section = createElement('section', { 
    id: 'genre-movie-section',
    class: 'genre-movie-section'},
        createElement('header', {class: 'genre-header'}, 
            createElement('h1', {class:'genre-movie-title', text:'GENRES'})
        ),
        createElement('div', { id:'genre-list', class:'genre-movie-list-container'}, 
            createElement('ul', {id:'app-genre-movie__list', class:'genre-movie-list__ul'}))
    )

const listPreview = createElement('div', {class: 'list-movie-by-genre-preview'})



//services
const renderGenreMovies = () => {
    sendGenreMovies(document.querySelector('.genre-movie-list__ul'))
}

 const renderMoviesByGenres = () => {
    sendMoviesByGenre('.list-movie-by-genre-preview')
}


export function genreMovieSection(nodeName, serviceName){

    const collectionOfNodes = {
        section, 
        listPreview
    }

    const collectionOfService = {
        renderGenreMovies,
        renderMoviesByGenres,
    }

    const node =  nodeName ? collectionOfNodes[nodeName] : collectionOfNodes['section']
    const service = serviceName ? collectionOfService[serviceName] : collectionOfService['renderGenreMovies']
    
    return [
        node,
        [ service ]
    ]
}