function somar(a, b) {
    console.log(a + b);
}
somar(2, 6);
const prod = 'livro';
const preco = 10;
const veiculo = {
    carro: 'bmw',
    preco: 2121,
    portas: 2
};
const data = [
    { name: 'gabriel', age: 25, job: 'dev' },
    { name: 'rosana', age: 75, job: 'vendedor' },
    { name: 'rafaela', age: 65, job: 'CEO' },
    { name: 'gabriela', age: 55, job: 'administrador' },
    { name: 'rafaelo', age: 45, job: 'turismo' },
    { name: 'vinicius', age: 24, job: 'CAF' },
    { name: 'angelo', age: 30, job: 'auditor' },
];
const abaixoDe30 = [];
let verification = data.map((element) => {
    if (element.age < 30) {
        return abaixoDe30.push(element);
    }
});
console.log(verification);
console.log(abaixoDe30);
