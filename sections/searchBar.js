import { createElement } from "../manipulationDomMethods";
import { changeLocation } from "../utils"; 
import { api } from "../api";

function searchBar(){
    let titleMovie = 'Avengers'
    
    async function getMoviesBySearch (){
        const response = await api('/search/movie', {
            params: {
                query: titleMovie
            }
        }) 
        const data = await response.data.results
        const list = document.querySelector('.search-bar__ul')
        list.innerHTML = ''
        data.map(movie => {
            list.appendChild(
                createElement('li', {onclick: ()=> changeLocation(`movie=${movie.id}`)},
                    createElement('img', { src: `https://image.tmdb.org/t/p/w300${movie.poster_path}`}),
                    createElement('div', {class:'item-movie-title__container'}, 
                        createElement('p', { text:movie.title })
                    )
                    
                )
            )
        })
    }

    function focusHandler(){
        changeLocation('search')
    }

    function movieTypingHandler(e){
        titleMovie = e.target.value
    }

    //node
    return (
        createElement('div', {}, 
            createElement('nav', { class:'search-bar__container' }, 
                createElement('div', { class:'search-bar__title'}, 
                    createElement('h2', { class:'search-bar__h2', text:'SEARCH MOVIE' })), 
                createElement('input', { type:'text', placeholder:'Avengers', onchange:movieTypingHandler, onclick:focusHandler}),
                createElement('button', {text:'search', onclick:getMoviesBySearch})
            ),
            createElement('ul', {class:'search-bar__ul'})
        )
    )
}


export function searchBarSection( nodeName = 'searchBar' ){
    
    const collectionOfNodes = {
        searchBar: [searchBar()],
    }

    const [ node, service ] = collectionOfNodes[nodeName]

    return [
        node,
        [service]
    ]
}

