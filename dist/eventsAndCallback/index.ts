const botao = document.querySelector('button')

function handleClick(e:PointerEvent){
    console.log(e.pageX)
    if(botao instanceof HTMLElement){
        botao.style.background = 'black'
    }
}

botao?.addEventListener('click', handleClick)