export interface Products{
    nome: string,
    preco: number,
    descricao: string
    garantia: number,
    seguroAcidentes: boolean,
    empresaFabricante: {
        nome: string,
        fundacao:number,
        pais: string
    },
    empresaMontadora: {
        nome:string,
        fundacao: number,
        pais: string
    }
}