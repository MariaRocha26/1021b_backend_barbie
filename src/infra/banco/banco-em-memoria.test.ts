import { describe, expect, it, test} from 'vitest'

import BancoEmMemoria from './banco-em-memoria'

describe('BancoEmMemoria', () => {
    test('deve salvar um filme em memoria', () => {
        const filme = {
            id:1,
            titulo:'Filme 1',
            descricao:'Descrição do filme 1',
            imagem:'imagem.jpg'
        }
        //Processamento
        const bancoEmMemoria = new BancoEmMemoria()
        bancoEmMemoria.salvar(filme)

        //Saída
        expect(bancoEmMemoria.filmes).toEqual([filme])
        expect(bancoEmMemoria.filmes.length).toBe(1)
    })


    test('deve listar os filmes salvos em memoria', () => {})
    const filme = {
        id:1,
        titulo:'Filme 1',
        descricao:'Descrição do filme 1',
        imagem:'imagem.jpg'
    }

    const bancoEmMemoria = new BancoEmMemoria()
    bancoEmMemoria.filmes.push(filme)
    const resultado = bancoEmMemoria.listar()
    expect(resultado).toEqual([filme])


    test('deve buscar um filme pelo id', () => {
    const filme1 = {
        id:1,
        titulo:'Filme 1',
        descricao:'Descrição do filme 1',
        imagem:'imagem.jpg'
    }
    const filme2 = {
        id:2,
        titulo:'Filme 1',
        descricao:'Descrição do filme 1',
        imagem:'imagem.jpg'
    }
    const bancoEmMemoria = new BancoEmMemoria()
    bancoEmMemoria.filmes.push(filme1)
    bancoEmMemoria.filmes.push(filme2)
    const resultado = bancoEmMemoria.buscarPorId(1)
    expect(resultado).toEqual(filme1)
    expect(bancoEmMemoria.filmes).toHaveLength(2)
})

    test('deve apagar os dados salvos em memoria', () => {})
})
