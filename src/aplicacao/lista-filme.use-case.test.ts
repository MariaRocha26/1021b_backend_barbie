import {beforeEach, describe, expect, test} from 'vitest'
import ListaFilme from './lista-filme.use-case'
import BancoEmMemoria from '../infra/banco/banco-em-memoria'

describe('ListaFilme', () => {
    const bancoEmMemoria = new BancoEmMemoria()

    beforeEach(async () => {
        bancoEmMemoria.filmes = [{
            id: 1,
            titulo: 'O Poderoso Chefão',
            descricao: 'Filme de máfia',
            imagem: 'fotofilme.jpg'
        },{
            id: 2,
            titulo: 'O Poderoso Chefão 2',
            descricao: 'Filme de máfia',
            imagem: 'fotofilme.jpg'
        }]
        })
    test("deve retornar uma lista de filmes", async () => {
        const listaFilme = new ListaFilme(bancoEmMemoria);
        const filmes = await listaFilme.execute();
        expect(filmes.length).toBe(2);
        expect(filmes[0].id).toBe(1);
        expect(filmes[0]).toEqual({
            id:1,
            titulo:'O Poderoso Chefão', 
            descricao:'Filme de máfia',
            imagem:'fotofilme.jpg'
    })
    expect(filmes[1]).toEqual({
            id:2,
            titulo:'O Poderoso Chefão 2', 
            descricao:'Filme de máfia',
            imagem:'fotofilme.jpg'
    })
    })
})
