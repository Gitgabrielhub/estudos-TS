// GENERICS é um tipo de padrão
function retorno<Variavel>(a:Variavel): Variavel{
    return a;
}

//console.log(retorno('gabriel')) // infere o tipo de acordo com o tipo de dado passado na função
//console.log(retorno(300)) // no caso o generics será do tipo number
//console.log(retorno(true)) // aqui o retorno será um booleano

//pode- se tambem atribuir um tipo quando for executar a função

/* retorno<number>(30)
retorno<string>("30")
retorno<boolean>(true) */

const num = [1,2,3,4,5,6,7,8,9,10]
const fruits = ['banana', 'pera','macã','goiaba','mamao']

function primeirosCinco<TipoLista>(lista:TipoLista[]):TipoLista[]{
    return lista.slice(1,6)
}


function notNull<T>(num:T){
    if(num !== null){
        return num
    }else{
        return null
    }
}
console.log(notNull('gabriel fonseca')?.toUpperCase())

function TipoDado(a:string){
    const resultado = {
        dado:a,

    }
    console.log(resultado);
    return resultado; 
}
TipoDado("teste")
