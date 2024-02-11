import { createElement } from "../manipulationDomMethods"
import { genreMovieSection } from "../sections/genreMovieSection"





export async function genres (){

    const module = await import("../sections/genreMovieSection")
    const [ node, service ] = module.genreMovieSection()
    console.log(service)
    const container = createElement('div', { class : "genres" }, node)

    return {
        node: container,
        services : [
            ...service,
        ]
    }
}


