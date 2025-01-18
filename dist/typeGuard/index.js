"use strict";
// guard safety e narrowing 
// o type guard garante a type safety do dado dentro do bloco condicional.esse processo é chamado de type Narrowing.
// o TS faz control flow para entender qual o tipo de dado dentro da condicional.
// o operador in verifica se existe uma propriedade com o mesmo nome da string comparada ("propriedade" in obj)
function typeGuard(value) {
    if (typeof value === 'string') {
        return value.toLowerCase();
    }
    if (typeof value === 'number') {
        return value.toFixed();
    }
    if (value instanceof HTMLElement) {
        return value.innerText;
    }
}
typeGuard(200);
typeGuard("333");
typeGuard(document.body);
const obj = {
    nome: "origamid"
};
async function fetchProduct() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await response.json();
    handleProduct(data);
}
function handleProduct(data) {
    if ('total' in data) {
        return document.body.innerHTML += `
        <p>Nome: ${data.nome}</p>    
        <p>Preço: ${data.preco}</p>    
        <p>Preço: ${data.total}</p>    
    `;
    }
    else {
        return `
            <p>Oops!! nos nao temos acesso a essa informação.</p>
        `;
    }
}
//console.log(fetchProduct())
// unknown= indica que nao sabemos que tipo de dados podem ser passados na nossa função. o unknow so permite o uso de metodos quando a type safety estiver garantida.
function typeguard(value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    if (typeof value === 'number') {
        return value.toString();
    }
    if (value instanceof HTMLElement) {
        return document.body.innerHTML;
    }
}
// um Array nao pode ser verificada com o typeof pois um array é um objeto.
// o que pode -se fazer fazer é verificar se o mesmo é uma intanceof de Array ou a função Array. is Array().
async function fetchCursos() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const json = await response.json();
    rederCursos(json);
}
console.log('heloo');
function rederCursos(data) {
    if (data instanceof Array) {
        console.log(data);
    }
}
fetchCursos();
// Type predicate ():arg is type é um recurso no qual podemos indicar qual o tipo de argumento uma função booleana (que retorna boolean ) recebeu para ser verdadeira.
function isString(value) {
    return typeof value === "string";
}
function handleData(data) {
    if (isString(data)) {
        data.toLowerCase;
    }
}
