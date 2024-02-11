import { createElement } from "../manipulationDomMethods"
import { sendTrendingMovies } from "../service"

//html
export const section = createElement('section', {
    id:'trending-section',
    class : 'trending-movie-section'},
    createElement('header', {class:'movie-header'}, 
        createElement('h1', {class:'trending-movie-title', text: 'TRENDING MOVIES'}),
        createElement('button', {class: 'trending-movie-list-button__view-more'}, 
            createElement('p', {class:'trending-movie-list__p', text: 'Ver mas'})
        )
    ),
    createElement('div', {class: 'trending-movie-list-container'}, 
        createElement('ul', { class:"trending-movie-list__ul", id:'app-trending-movie__list' }) 
    ),
) 

//services
const renderMovies = () => {
    sendTrendingMovies(document.querySelector('.trending-movie-list__ul'))
}



export function trendingMovieSection(){
    return [
        section,
        [renderMovies]
    ]
}

