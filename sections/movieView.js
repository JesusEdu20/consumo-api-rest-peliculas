import { createElement } from "../manipulationDomMethods";
import { changeLocation, getHashValue } from "../utils"; 
import { api, urls } from "../api";

async function getDetails(){
    const id = getHashValue()
    const h2 = document.querySelector('.movie-view-detail__h2')
    const img = document.querySelector('.movie-view__img')
    const p = document.querySelector('.movie-view-detail__p')
    const span = document.querySelector('.movie-view-detail__span')
    const ul = document.querySelector('.movie-view-genre__ul')

    const { MOVIE_DETAIL_BY_ID } = urls
    
    const { data } = await api(`${MOVIE_DETAIL_BY_ID}/${id}`) 
   
    const title = data.title
    const poster = data.backdrop_path
    const overview = data.overview
    const starts = data.vote_average
    const genres = data.genres
    h2.innerHTML = title
    
    img.src = `https://image.tmdb.org/t/p/w300${poster}`
    p.innerHTML = overview
    span.innerHTML = `${starts} / 10 points`

    genres.forEach(element => {
        ul.appendChild(createElement('li', {text: element.name}))
    });
    
}

 async function getSimilarMovies (){
    const id = getHashValue()
    const { MOVIE_DETAIL_BY_ID } = urls
    const { data } = await api(`${MOVIE_DETAIL_BY_ID}/${id}/similar`) 
    const ul = document.querySelector('.movies-related__ul')
    
    data.results.map( movie => {
        ul.appendChild(
            createElement('li', {onclick:()=>{changeLocation(`movie=${movie.id}`)}}, 
                createElement('img', { src:`https://image.tmdb.org/t/p/w300${movie.poster_path}`})
            )
        )
    })

} 



function scrollBy(scrollLeft){
    const slider = document.querySelector('.movies-related__ul')
    slider.scrollBy({left: scrollLeft, behavior: 'smooth'})
}


function movieView(event){   

    

    return(
       
            createElement('dialog', {class:'movie-view', open:'open'},
                createElement('section', {class:'movie-view__container'}, 
                    createElement('div', {class:'movie-view-img__container'}, 
                        createElement('img', {class: 'movie-view__img'}),
                        createElement('div', {class:'movie-view__img-background'})
                    ),
                    createElement('div', {class:'movie-view-view-detail__container'},
                        createElement('div', null, 
                            createElement('span', {class:'movie-view-detail__span'}),
                        ),
                        createElement('div', null, 
                            createElement('h2', {class:'movie-view-detail__h2', text:'click'}),
                        ),
                        createElement('div', null, 
                            createElement('p', {class:'movie-view-detail__p'})
                        )
                    ),
                    createElement('div', {class:'movie-view-genre__container'}, 
                        createElement('ul', { class:'movie-view-genre__ul'} )
                    ),
                    createElement('div', {class:'movies-related__container'}, 
                        createElement('button', {class:'movies-related-button__left', text:'<', onclick:()=>{scrollBy("-300")}}),
                        createElement('button', {class:'movies-related-button__right', text:'>', onclick:()=>{scrollBy("300")}}),
                        createElement('ul', {class:'movies-related__ul'})
                    )
                )
            )
       
    )
}

export function movieViewSection( nodeName = 'movieView' ){
    
    const collectionOfNodes = {
        movieView: [movieView(), getDetails],
    }

    const [ node, service ] = collectionOfNodes[nodeName]

    return [
        node,
        [service, getSimilarMovies]
    ]
}

