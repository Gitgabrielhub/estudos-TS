class Produto{
    nome:string;
    preco:number;

    constructor(nome:string, preco:number){
        this.nome = nome;
        this.preco = preco;
    }
    precoReal(){
        let color = "red"
        let colorPrice = "yellow"
        return document.body.innerHTML =  `O livro é <span style="color:${color} "> ${this.nome}</span> que custa R$ <span style="color:${colorPrice} ">${this.preco}</span>`
    }
}

const livro = new Produto('a arte da guerra',20.00)
console.log(livro.precoReal())