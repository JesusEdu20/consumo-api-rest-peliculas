
import { createElement } from "../manipulationDomMethods"
import { changeLocation } from "../utils"

export async function movieView () {
    const trendModule = await import("../sections/trendingMovieSection")
    const genModule = await import("../sections/genreMovieSection")
    const searchModule = await import('../sections/searchBar')
    const movieModule = await import("../sections/movieView")

    const [ searchNode] = searchModule.searchBarSection() //component
    const [ trendingNode, trendingService ] = trendModule.trendingMovieSection()//with service
    const [ genreNode, genreService ] = genModule.genreMovieSection()// with service
    const [ movieNode, movieService ] = movieModule.movieViewSection() 
    
    const background = createElement('div', { class:'movie-view-background'} )

    background.addEventListener('click', () => {
       changeLocation('home')
    })
  
    const container = createElement('div', { class : "movie-view-window" }, 
        movieNode,
        searchNode, 
        trendingNode, 
        genreNode,
        background
    )

    return {
        node: container,
        services : [
          ...trendingService,
          ...genreService,
          ...movieService
        ]
    }  
}
