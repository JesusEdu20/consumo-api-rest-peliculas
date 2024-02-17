import { createElement } from "../manipulationDomMethods"
import { changeLocation } from "../utils"
import { sendTrendingMovies } from "../service"

//NODES
///////////////////////////////////////////////////////////////////////////////
//HTML
const section = createElement('section', {
    id:'trending-section',
    class : 'trending-movie-section'},
    createElement('header', {class:'movie-header'}, 
        createElement('h1', {class:'trending-movie-title', text: 'TRENDING MOVIES'}),
        createElement('button', {class: 'trending-movie-list-button__view-more', onclick: () => {changeLocation('trending'); console.log('click')} }, 
            createElement('p', {class:'trending-movie-list__p', text: 'Ver mas'})
        )
    ),
    createElement('div', {class: 'trending-movie-list-container'}, 
        createElement('ul', { class:"trending-movie-list__ul", id:'app-trending-movie__list' }) 
    ),
) 
////////////////////////////////////////////////////////////////////////////////////////
// Estate
const pagesValue = () => {
    const page = [1, 2]
    function increment (){
        page[0] ++
        page[1] ++
    }
    function decrement(){

        if(page[0] !== 1){
            console.log(page[0])
            page[0] --
            page[1] --
            return
        }

    }

    return {increment, decrement, page}
}

const { increment, decrement, page } = pagesValue()

//HTML
const viwMoreTrendingMovies = createElement('div', {},
 createElement('h1', {text:'Trending movies', onclick:()=>{window.history.back()}}),
 createElement('div', {class:'view-more-trending-button__container'},
    createElement('button', {text:'<', onclick:()=> {
        const trendingList = document.querySelector('.view-more-trending-movies')
        const btnLeft = document.querySelector('.next-btn-view-more__left') 
        const btnRight = document.querySelector('.next-btn-view-more__right')     
        btnLeft.innerHTML = page[0]
        btnRight.innerHTML = page[1]
        trendingList.innerHTML= ''
        decrement()
        sendTrendingMovies(trendingList, page[0])
    }, class : 'next-btn-view-more__left'
  }
),
    createElement('button', {text:'>', onclick:() => { 
        const trendingList = document.querySelector('.view-more-trending-movies')
        const btnLeft = document.querySelector('.next-btn-view-more__left') 
        const btnRight = document.querySelector('.next-btn-view-more__right')     
        btnLeft.innerHTML = page[0]
        btnRight.innerHTML = page[1]
        trendingList.innerHTML= ''
        increment()

        sendTrendingMovies(trendingList, page[1])
    }, class : 'next-btn-view-more__right'
  }
),
 ),
 createElement('ul', { class : 'view-more-trending-movies' })
) 

///////////////////////////////////////////////////////////////////////////////////////////

//services
const renderMovies = () => {
    const trendingList = document.querySelector('.trending-movie-list__ul')
    trendingList.innerHTML= ""
    sendTrendingMovies(trendingList)
}

const renderMoviesToViewMore = () => {
    const trendingList = document.querySelector('.view-more-trending-movies')
    trendingList.innerHTML= ""
    sendTrendingMovies(trendingList)
}

export function trendingMovieSection( nodeName = 'section' ){
    
    const collectionOfNodes = {
        section: [section, renderMovies],
        viwMoreTrendingMovies : [viwMoreTrendingMovies, renderMoviesToViewMore]
    }

    const [ node, service ] = collectionOfNodes[nodeName]

    return [
        node,
        [service]
    ]
}

