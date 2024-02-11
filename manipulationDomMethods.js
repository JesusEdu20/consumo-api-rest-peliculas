export function createElement (tag, attributes, ...childElement){
    const elem = document.createElement(`${tag}`);
    
    if(attributes){
        for(const attribute in attributes){
            if(attribute !== "class"){
                
                elem.setAttribute(attribute, attributes[attribute])
            }
            else {
                const classArray = attributes[attribute].split(' ')
                classArray.forEach(item => {
                    elem.classList.add(item)
                })   
            }
        }
    }
    
    if(childElement){
        childElement.forEach(child => elem.appendChild(child))
    }
    
    return elem
}
