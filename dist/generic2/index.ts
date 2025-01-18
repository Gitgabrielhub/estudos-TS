const l = document.querySelector("a");

function extractText<T extends HTMLElement>(el:T){
    return {
        texto:el.innerText,
        el,
    }
}

if(l){
    console.log(extractText(l).el.href)
}

function $<T extends Element>(selector:string): T | null{
    return document.querySelector(selector)
}

const setLink = $("a");
console.log(setLink)