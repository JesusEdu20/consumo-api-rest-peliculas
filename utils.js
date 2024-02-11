//Utils
export function changeLocation(hash, value){
    
    if(value){
        window.location.hash = `${hash}=${value}`
        return
    }
    window.location.hash = hash
}

export const $ = (id, action)=> {
    
    const element = document.getElementById(id)
    if(action === 'DELETE'){
        element.remove
    }
    else if(action.startsWith('class')){
        const name = action.slice(6);
        element.classList.add(name);
    }
    else if(action.startsWith('display')){
        console.log(action)
        const displayValue = action.slice(8); 
        element.style.display = displayValue;
    }
    else if('toggle'){
        console.log(action)
        const displayValue = action.slice(8); 
        element.style.display = displayValue;
    }
}
//id
//class
export class View {
    constructor(sectionClass, ...outsideElements){
        this.section = document.querySelector(sectionClass); //section to delete
        this.outsideElementsClass = outsideElements; //other elements outside from section
    }

    setView = () => {
        const isDisplayed = this.section.style.display === 'none' ? false : true;
        const outsideElements = this.getCollectionOfElements(); 
        const visibleOutsideElements = outsideElements.filter(elem => elem.style.display === 'block' || elem.style.display === '')
         
        if(isDisplayed){
            
            visibleOutsideElements.forEach(element => element.style.display = 'none') //hide
            return 
        }

        this.section.style.display = "block";
        visibleOutsideElements.forEach(element => element.style.display = 'none') // hide
    }

    getCollectionOfElements = (elements)=>{

        if(elements){
            return elements.map( elementClass => document.querySelector(elementClass) )
        }

       return this.outsideElementsClass.map( elementClass => document.querySelector(elementClass) )
    }

    displayElements = (display, ...elements) => {
        const hiddenElements = this.getCollectionOfElements(elements);
        hiddenElements.forEach(elem => elem.style.display = display);
    }
}
