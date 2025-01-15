interface Empresa{
    nome: string,
    fundacao:number,
    pais: string

}
export interface Products{
    nome: string,
    preco: number,
    descricao: string,
    garantia: string,
    seguroAcidentes: boolean,
    empresaFabricante:Empresa,
    empresaMontadora: Empresa
}