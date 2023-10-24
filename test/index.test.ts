import {test,expect,describe} from 'vitest'
import axios from 'axios'

describe('Primeiro teste da aplicação',()=>{
    test('Espero que 1 seja igual a 1',()=>{
    expect(1).toBe(1)
    })
})
describe('Cadastro de filmes',()=>{
    test('Espero que o filme seja cadastrado',async ()=>{
        const filme = {
            titulo:'A escola do bem e do mal',
            descricao:'História de duas amigas em um mundo mágico.',
            imagem:"https://midias.correiobraziliense.com.br/_midias/jpg/2022/07/22/a_escola_do_bem_e_do_mal-26094185.jpg"
        }
        //Passar isso para minha API
        const resposta = await axios.post('http://localhost:3000/filmes',filme)
        //Esperar que minha API tenha cadastrado o filme
        expect(resposta.status).toBe(201)
        expect(resposta.data).toEqual(filme)
    })
})