export default interface FilmeRepositorioInterface {
    salvar(input:FilmeDTO): Promise<FilmeDTO>;
    listar(): Promise<FilmeDTO[]>;
    buscarPorId(id:number): Promise<FilmeDTO|undefined>;
}
type FilmeDTO = {
    id:number,
    titulo:string,
    descricao:string,
    imagem:string
}   