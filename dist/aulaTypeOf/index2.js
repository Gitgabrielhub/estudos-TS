const frase = "front-end";
const preco = 600;
const cond = preco > 100;
if (typeof frase === "string") {
    console.log("string");
}
if (typeof preco === "number") {
    console.log('number');
}
//union types
let numero = 10;
function verification(value) {
    if (typeof value === 'number') {
        return 'esse valor é um numero';
    }
    else {
        return 'esse valor é uma string';
    }
}
let toNumber = (value) => {
    if (typeof value === 'string') {
        return `o valor passado era uma string e foi convertido em numero ${Number(value)}`;
    }
    else if (typeof value === 'number') {
        return ' o valor passado é um numero';
    }
    else {
        throw ('o valor deve ser um valor numerico ou uma string');
    }
};
// Number() !== toNumber(). o toNumber so converte string para numero se colocarmos um dado do tipo boolean ele me retorna um erro. o Number quando se passado um valor booleano retorna 0 para false e 1 para true.  
console.log(toNumber("10"));
