/* const botao = document.querySelector('button')

function handleClick(e:PointerEvent){
    console.log(e.pageX)
    if(botao instanceof HTMLElement){
        botao.style.background = 'black'
    }
}

botao?.addEventListener('click', handleClick) */

// menu lateral mobile

const nav = document.querySelector('#nav');
const btn = document.querySelector('#btn-mobile');
function fecharMenu(){
    if(nav instanceof HTMLElement){
        if(nav.className === 'active'){
            nav.className = ''
            btn instanceof HTMLElement ?btn.ariaExpanded = "false" : true;
            btn instanceof HTMLElement ?btn.ariaLabel = "Abrir menu": false;
    }
    }
}
nav?.addEventListener('click', ()=>{
    if(nav instanceof HTMLElement){
        nav.className = 'active'
        btn instanceof HTMLElement ?btn.ariaExpanded = "true" : false;
        btn instanceof HTMLElement ?btn.ariaLabel = "Fechar menu": false;

    }
    
})


