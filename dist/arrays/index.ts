import { Curso } from "./dataInterface";

const numeros: (string | number)[] = [10,20,'produto',30,40, 'preco' ,50,'taxa']

function numerosMaior10(num:(string | number)[]){
    const arrStrs: any[] =[]; 
    for(let i = 0; i<num.length; i++){
        if(num[i] > 10 && typeof num[i] !== 'string'){
            //console.log(num[i])
        }else if(typeof num[i] === 'string'){
            arrStrs.push(num[i])
            //console.log(arrStrs)
        }
    }
}
//numerosMaior10(numeros)

const data:(string | number)[][] = [
    ['senhor dos aneis', 120],
    ['a guerra dos tronos', 150],
    ['vikings', 160],
]
// sintaxe alternativa muito utilizada no angular array<type> para substituir essa maneira de escrever function menorQue10(data:number[])
function maiorQue10(data:Array<number>){//aqui está um exemplo da notacão alternativa.
    data.filter(n=> n > 10)
}

async function consumirAPI(){
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const data = await response.json();
    mostrarRespostasDaApi(data)
}

function mostrarRespostasDaApi(data:any[]){
    data.forEach(curso => {
        return document.body.innerHTML += `
             <div>
                 <div>
                     <h2>Curso: ${curso.nome}</h2>
                     <p>Horas: ${curso.horas}</p>
                     <p>Tipo: ${curso.aulas}</p>
                 </div>
             </div>
         ` 
    })
}

consumirAPI()