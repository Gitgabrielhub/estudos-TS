"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function fetchProduct() {
    const API = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await API.json();
    mostrarNaTela(data);
}
function mostrarNaTela(data) {
    document.querySelector('#containerProducts').innerHTML = `
    <div id="divProducts">
        <div class="product">
            <p>Nome do produto: ${data.nome}</p>
            <p> preço do produto: ${data.preco}</p>
            <p> preço do produto: ${data.descricao}</p>
            <p> preço do produto: ${data.garantia}</p>
        </div>
        <div class="product">
            <p>Nome do produto: ${data.nome}</p>
            <p> preço do produto: ${data.preco}</p>
            <p> preço do produto: ${data.descricao}</p>
            <p> preço do produto: ${data.garantia}</p>
        </div>
        <div class="product">
            <p>Nome do produto: ${data.nome}</p>
            <p> preço do produto: ${data.preco}</p>
            <p> preço do produto: ${data.descricao}</p>
            <p> preço do produto: ${data.garantia}</p>
        </div>
    </div>
    <div class="mt-5">
        <p>informacoes de garantia: Este produto possui garantia de ${data.garantia}</p>
        <p> Empresa fabricante: ${data.empresaFabricante.nome}</p>
        <p> Nacionalidade do fabricante: ${data.empresaFabricante.pais}</p>
        <p> preço do produto: ${data.empresaMontadora.nome}</p>
    </div>

    `;
}
fetchProduct();
