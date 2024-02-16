export function createElement (tag, attributes, ...childElement){
    const elem = document.createElement(`${tag}`);
    
    if(attributes){
        for(const attribute in attributes){
           
            if(attribute === 'text') {
               const text = document.createTextNode(attributes[attribute])
               elem.appendChild(text)
            }
            else if(attribute === 'class'){
                const classArray = attributes[attribute].split(' ')
                classArray.forEach(item => {
                    elem.classList.add(item)
                }) 
            }
            else if(attribute.startsWith('on')){
                const eventHandler = attributes[attribute]  
                const event = attribute.slice(2)
                elem.addEventListener(event, eventHandler)
            }
            else{
                elem.setAttribute(attribute, attributes[attribute])
            }
        }
    }
    
    if(childElement){
        childElement.forEach(child => elem.appendChild(child))
    }
    
    return elem
}
