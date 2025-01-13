let entradaValor = document.querySelector('input');
const total = localStorage.getItem('value');
entradaValor.value = total;
let calculo = Number(entradaValor.value) + 100 - Number(entradaValor.value) * 0.2;
calcGanho(Number(entradaValor))

function calcGanho(value:number){
    const p = document.querySelector('p');
    let tela = p.innerText = `ganho total ${calculo}`
    return tela
}
function totalMudou(){
    localStorage.setItem('value', JSON.stringify(calculo));
}


if(entradaValor){
    entradaValor.addEventListener('keyup',totalMudou )
}

