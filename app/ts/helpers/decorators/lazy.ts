export function lazy(selector: string){
    return function(target: any, key: string){

        //elemento do DOM
        let element: JQuery;

        //Função que será passada para servir como getter de "TARGET"
        const getter = function(){
            if(!element) {
                console.log(`Searching ${selector} to load in ${key}`);
                element = $(selector);
            }
            return element;
        }

        
        Object.defineProperty(target, key, {
            get: getter
        })
    }
}