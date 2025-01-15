const numeros = [10, 20, 'produto', 30, 40, 'preco', 50, 'taxa'];
function numerosMaior10(num) {
    const arrStrs = [];
    for (let i = 0; i < num.length; i++) {
        if (num[i] > 10 && typeof num[i] !== 'string') {
            console.log(num[i]);
        }
        else if (typeof num[i] === 'string') {
            arrStrs.push(num[i]);
            console.log(arrStrs);
        }
    }
}
numerosMaior10(numeros);
const data = [
    ['senhor dos aneis', 120],
    ['a guerra dos tronos', 150],
    ['vikings', 160],
];
// sintaxe alternativa muito utilizada no angular array<type> para substituir essa maneira de escrever function menorQue10(data:number[])
function maiorQue10(data) {
    data.filter(n => n > 10);
}
