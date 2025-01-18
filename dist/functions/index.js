"use strict";
function somar(a, b) {
    return a + b;
}
console.log(somar(3, 8));
const subtrair = (a, b) => a - b;
function abortar(mensagem) {
    throw new Error(mensagem);
}
function normalizar(valor) {
    if (typeof valor === "string") {
        return valor.trim().toLowerCase();
    }
    else {
        return valor.map((item) => item.trim().toLowerCase());
    }
}
console.log(normalizar("Produto").toLowerCase());
console.log(normalizar(["produto", "uva"]));
function rounded(value) {
    if (typeof value === 'string') {
        let numValue = Number(value);
        let resultado = Math.ceil(numValue);
        console.error(resultado);
        return resultado.toString();
    }
    else {
        return Math.ceil(value);
    }
}
console.log(rounded("4.5"));
console.log(rounded(8.3));
