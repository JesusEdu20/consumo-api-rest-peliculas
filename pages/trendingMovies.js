/* import { trendingMovieSection } from "../sections/trendingMovieSection"
import { genreMovieSection } from "../sections/genreMovieSection" */
import { createElement } from "../manipulationDomMethods"

export async function trending () {
    const { trendingMovieSection } = await import("../sections/trendingMovieSection")
    const [ trendingNode, trendingService ] =  trendingMovieSection('viwMoreTrendingMovies')
  
    const container = createElement('div', { class : "trending" }, 
        trendingNode,
    )

    return {
        node: container,
        services : trendingService
    }
}
