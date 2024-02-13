import { createElement } from "../manipulationDomMethods";
import { sendGenreMovies, sendMoviesByGenre } from "../service";

function getDataFromHash(data){
    const hashValue = window.location.hash
    const [_, genre] = window.location.hash.split('=')
    const [nameGenre, id] = genre.split('-')

    const values = {
        hashValue,
        genre,
        nameGenre,
        id
    }

    return values[data]
}

//Element
const section = createElement('section', { 
    id: 'genre-movie-section',
    class: 'genre-movie-section'},
        createElement('header', {class: 'genre-header'}, 
            createElement('h1', {class:'genre-movie-title', text:'GENRES'})
        ),
        createElement('div', { id:'genre-list', class:'genre-movie-list-container'}, 
            createElement('ul', {id:'app-genre-movie__list', class:'genre-movie-list__ul'}))
    )

const listPreview = createElement('div', {class: 'list-movie-by-genre-preview__container'}, 
    createElement('h1', {class:'list-movie-by-genre__title'}),
    createElement('div', { class:'list-movie-by-genre-preview'})
)



//services
const renderGenreMovies = () => {
    const genreList = document.querySelector('.genre-movie-list__ul')
     //clear the list preview
     genreList.innerHTML = ''
    sendGenreMovies(genreList)
}

 const renderMoviesByGenres = () => {
    const listPreview = document.querySelector('.list-movie-by-genre-preview')
    const title = document.querySelector('.list-movie-by-genre__title')

    listPreview.innerHTML = '' //clear the list preview

    title.innerHTML = getDataFromHash('nameGenre')
    const genreId = getDataFromHash('id')
    sendMoviesByGenre(genreId, listPreview)
}

//Section to export
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