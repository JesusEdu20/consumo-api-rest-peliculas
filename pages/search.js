import { createElement } from "../manipulationDomMethods"

export async function search (){

    const module = await import("../sections/searchBar")
    const [ node, service ] = module.searchBarSection('searchBar')
    const container = createElement('div', { class : "test" }, node)

    return {
        node: container,
        services : [
            ...service,
        ]
    }
}


