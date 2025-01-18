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
if ("preco" in obj) {
    console.log('yes');
}
else {
    console.log("nono");
}
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
