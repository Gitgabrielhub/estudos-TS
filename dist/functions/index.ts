function somar(a: number, b:number):number{
    return a + b;
}

console.log(somar(3,8))

const subtrair = (a:number, b:number) => a-b;


function abortar(mensagem:string): never{
    throw new Error(mensagem)
}

//abortar("um erro ocorreu")

interface Quadrado{
    lado:number;
    perimetro(lado: number):number
}

// function overload => São maneiras de obter retornos tanto de string, como arrays ou ate mesmo objetos. é uma maneira diversificada de obter retorno de dados de tipos variados.
// as heranças precisam ser compativeis em tipos e em familiaridade( date so recebe tipo date, element so recebe tipo element)
function normalizar(valor:string):string;
function normalizar(valor:string[]):string[];
function normalizar(valor:string | string[]):string | string[]{
    if(typeof valor === "string"){
        return valor.trim().toLowerCase();
    }else{
        return valor.map((item)=> item.trim().toLowerCase())
    }
}
console.log(normalizar("Produto").toLowerCase())
console.log(normalizar(["produto", "uva"]))

function rounded(value:number):number;
function rounded(value:string):string;
function rounded(value:number | string):number | string{
    if(typeof value === 'string'){
        let numValue = Number(value)
        let resultado = Math.ceil(numValue)
        console.error(resultado)
        return resultado.toString()
    }else{
        return Math.ceil(value)
    }
}
console.log(rounded("4.5"))
console.log(rounded(8.3))
