"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const numeros = [10, 20, 'produto', 30, 40, 'preco', 50, 'taxa'];
/* function numerosMaior10(num:(string | number)[]){
    const arrStrs: any[] =[];
    for(let i = 0; i<num.length; i++){
        if(num[i] > 10 && typeof num[i] !== 'string'){
            //console.log(num[i])
        }else if(typeof num[i] === 'string'){
            arrStrs.push(num[i])
            //console.log(arrStrs)
        }
    }
} */
//numerosMaior10(numeros)
const data = [
    ['senhor dos aneis', 120],
    ['a guerra dos tronos', 150],
    ['vikings', 160],
];
// sintaxe alternativa muito utilizada no angular array<type> para substituir essa maneira de escrever function menorQue10(data:number[])
function maiorQue10(data) {
    data.filter(n => n > 10);
}
async function consumirAPI() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const data = await response.json();
    mostrarRespostasDaApi(data);
}
function mostrarRespostasDaApi(data) {
    data.forEach(curso => {
        let color;
        if (curso.nivel === "iniciante") {
            color = "green";
        }
        else if (curso.nivel === "avancado") {
            color = "red";
        }
        return document.body.innerHTML += `
             <div>
                 <div>
                     <h2 style=" ${color}">Curso: ${curso.nome}</h2>
                     <p>Horas: ${curso.horas}</p>
                     <p>Aulas: ${curso.aulas}</p>
                     <p>Tipo: ${curso.gratuito ? "Gratuito" : "Pago"}</p>
                     <p>Tags: ${curso.tags.join(", ")}</p>
                     <p>Aulas: ${curso.idAulas.join(" | ")}</p>
                 </div>
             </div>
         `;
    });
}
consumirAPI();
