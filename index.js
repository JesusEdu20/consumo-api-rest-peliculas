
const root = document.getElementById('app');

//NAVIGATOR
export async function navigator () {
    
    const hash = location.hash
    if(hash.startsWith('#trending')){//view more trending movies

        root.innerHTML = ''
        const { trending } = await import("./pages/trendingMovies.js")
        const { node, services } = await trending()
        root.appendChild(node)

        services.forEach(element => {
            element()
        });
    }
    else if(hash.startsWith('#genre')){
        root.innerHTML = ''
        const { genres } = await import("./pages/genres.js")
        const { node, services } = await genres()
        root.appendChild(node)

        services.forEach(element => {
            element()
        });
        
    }
    else if(hash.startsWith('#search')){
        root.innerHTML = ''
        const { search } = await import("./pages/search.js")
        const { node, services } = await search()
        root.appendChild(node)
        
    }
    else if(hash.startsWith('#movie')){
       
        root.innerHTML = ''
        const { movieView } = await import("./pages/movieView.js")
        const {node, services} = await movieView()
        root.appendChild(node)
        services.forEach(element => {
            element()
        });
    }

    else{
       root.innerHTML = ''
      
        const { home } = await import("./pages/home.js")
        const {node, services } = await home()
        root.appendChild(node)

         services.forEach(element => {
            element()
        });
    }
}

//RENDER

navigator()
window.addEventListener('hashchange', navigator);

