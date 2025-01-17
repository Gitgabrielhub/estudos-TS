"use strict";
class Produto {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
    precoReal() {
        let color = "red";
        let colorPrice = "yellow";
        return document.body.innerHTML = `O livro é <span style="color:${color} "> ${this.nome}</span> `;
    }
}
class Livro extends Produto {
    autor;
    constructor(nome, autor) {
        super(nome);
        this.autor = autor;
    }
}
class Jogo {
    desenvolvedor;
    constructor(desenvolvedor) {
        this.desenvolvedor = desenvolvedor;
    }
}
function buscarProducts(busca) {
    if (busca === 'a arte da guerra') {
        return new Livro("a arte da guerra", "Sun Tsu");
    }
    if (busca === "GTA Saandreas") {
        return new Jogo("Rockstars games");
    }
    return null;
}
const book = buscarProducts("a arte da guerra");
// o instaceof verifica se a função construtora herda de outra (extends).
if (book instanceof Livro) {
    console.log(book.nome);
}
const link = document.getElementById('origamid');
if (link) {
    console.dir(link);
}
