
import { createElement } from "./manipulationDomMethods"; 
import { genres } from "./pages/genres";
//pages
/* import { genres } from "./pages/genres"; */
/* import { home } from "./pages/home"; */


const root = document.getElementById('app');
let page = null;
/* let test = [] */



//NAVIGATOR
export async function navigator () {
    
    const hash = location.hash
    if(hash.startsWith('#trending')){
       page = 'trend'
    }
    else if(hash.startsWith('#genre')){
        root.innerHTML = ''
        const { genres } = await import("./pages/genres.js")
        const { node, services } = await genres()
        root.appendChild(node)

        /* services.forEach(element => {
            element()
        }); */
        
    }
    else{
       root.innerHTML = ''
      
        const { home } = await import("./pages/home.js")
        const {node, services } = await home()
        root.appendChild(node)

         //SERVICEs
         services.forEach(element => {
            element()
        });
    }
}

//RENDER




navigator()
window.addEventListener('hashchange', navigator);

