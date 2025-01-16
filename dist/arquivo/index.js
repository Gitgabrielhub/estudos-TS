"use strict";
const button = document.querySelector('button');
const config = document.querySelector('config');
//verificação para tratar o erro null
if (button !== null) {
    button.click();
}
if (button) {
    button.click();
}
console.log(typeof null);
button?.click();
//verificacao para tratar erro undefined
function teste() { } // function undefined
const jogo = {
    nome: 'Ragnarok'
};
if (jogo.nome) {
    jogo.nome.toLowerCase();
}
