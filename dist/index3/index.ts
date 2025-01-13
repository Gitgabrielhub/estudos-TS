import { DataProd } from './typeData'

type Dados = {
    nome:string,
    price: number,
    teclado: boolean
}
function preencherDados(dados:DataProd){
    document.body.innerHTML = `
        <div>
            <h2>${dados.nome}</h2>
            <p> R$${dados.price}</p>
            <p>inclui teclado :${dados.teclado === true? 'sim': 'nao'}</p>
        </div>
    `

}

preencherDados({
    nome:'computador',
    price: 300,
    teclado: true

})
preencherDados({
    nome:'notebook',
    price: 3000,
    teclado: false

})