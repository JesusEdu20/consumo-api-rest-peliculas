import { trendingMovieSection } from "../sections/trendingMovieSection"
import { genreMovieSection } from "../sections/genreMovieSection"
import { createElement } from "../manipulationDomMethods"


/* const container = createElement('div', {class:'home'}, 
    trendingMovieSection().node, 
    genreMovieSection().node
)

 */


/* export function home (){
    return {
        node: container,
        services : [
            ...trendingMovieSection().service,
            ...genreMovieSection().service,
        ]
    }
}
 */
/////
export async function home (){

    const trendModule = await import("../sections/trendingMovieSection")
    const genModule = await import("../sections/genreMovieSection")

    const [ trendingNode, trendingService ] = trendModule.trendingMovieSection()
    const [ genreNode, genreService ] = genModule.genreMovieSection()
    

    const container = createElement('div', { class : "trending" }, 
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
