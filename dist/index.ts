function somar(a:number, b:number ){
    console.log(a+b)
}
somar(2,6);

const prod:string ='livro'
const preco:number = 10

const veiculo:{ carro:string; preco:number; portas: number } = {
    carro: 'bmw',
    preco: 2121,
    portas: 2
}

const data = [
    {name:'gabriel', age:25, job:'dev'},
    {name:'rosana', age:75, job:'vendedor'},
    {name:'rafaela', age:65, job:'CEO'},
    {name:'gabriela', age:55, job:'administrador'},
    {name:'rafaelo', age:45, job:'turismo'},
    {name:'vinicius', age:24, job:'CAF'},
    {name:'angelo', age:30, job:'auditor'},
]
const abaixoDe30:any[] = []

let verification = data.map((element)=>{
    if(element.age < 30){
        return abaixoDe30.push(element)
    }
})

console.log(verification)
console.log(abaixoDe30)

const nintendo = {
    nome:"nintendo pro",
    preco: "2000",
}
console.log()

function transformPrice():number{
    let transform = Number(nintendo.preco);
    return transform
}
console.log(transformPrice())
    

function normalizarTexto(text:string):string{
    return text.trim().toLowerCase();
}
console.log(normalizarTexto('aqui tem um erro'))


let entradaValor = document.querySelector('input');
let calculop = document.querySelector('p');

function calc(e: Event):number{
    e.preventDefault();
    let valor = Number(entradaValor.value);
    let total = 100-(0.20 * 100) + valor;
    return total  
}
console.log(entradaValor.value)

