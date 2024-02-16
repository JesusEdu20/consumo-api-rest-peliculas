import { trendingMovieSection } from "../sections/trendingMovieSection"
import { genreMovieSection } from "../sections/genreMovieSection"
import { search } from "./search"
import { createElement } from "../manipulationDomMethods"


export async function home (){

    const trendModule = await import("../sections/trendingMovieSection")
    const genModule = await import("../sections/genreMovieSection")
    const searchModule = await import('../sections/searchBar')

    const [ searchNode, searchService ] = searchModule.searchBarSection()
    const [ trendingNode, trendingService ] = trendModule.trendingMovieSection()
    const [ genreNode, genreService ] = genModule.genreMovieSection()
    
    const container = createElement('div', { class : "trending" }, 
        searchNode,
        trendingNode,
        genreNode 
    )


    return {
        node: container,
        services : [
          ...trendingService,
          ...genreService
        ]
    }
}
