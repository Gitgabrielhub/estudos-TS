"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function preencherDados(dados) {
    document.body.innerHTML = `
        <div>
            <h2>${dados.nome}</h2>
            <p> R$${dados.price}</p>
            <p>inclui teclado :${dados.teclado === true ? 'sim' : 'nao'}</p>
        </div>
    `;
}
preencherDados({
    nome: 'computador',
    price: 300,
    teclado: true
});
preencherDados({
    nome: 'notebook',
    price: 3000,
    teclado: false
});
