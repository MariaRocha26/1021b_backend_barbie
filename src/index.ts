import express from 'express'
const app = express()
app.use(express.json())
import ListaFilme from './aplicacao/lista-filme.use-case'
import BancoMongoDB from './infra/banco/banco-mongodb'
//Tenho que ter uma rota post para cadastrar um filme

//Salvar em algum lugar o filme que foi cadastrado.
type Filme = {
    id:number,
    titulo:string,
    descricao:string,
    imagem:string
}
let filmesCadastros:Filme[] = []
app.post('/filmes',(req,res)=>{
    const {id,titulo,descricao,imagem} = req.body
    const filme = {
        id,
        titulo,
        descricao,
        imagem
    }
    //Como eu salvo o filme que foi cadastrado no meu vetor de filmes (Banco de dados)
    filmesCadastros.push(filme)
    res.status(201).send(filme)
})
app.get('/filmes', async (req,res)=>{
    const bancoMongoDB = new BancoMongoDB()
    const listaFilme = new ListaFilme(bancoMongoDB)
    const filmes = await listaFilme.execute()   
    res.send(filmes)
})

app.get('/filmes/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    //FIND para buscar um filme pelo id e retornar para o usuário
    const filme = filmesCadastros.find(filme=>filme.id === id)
    if(!filme) return res.status(404).send('Filme não encontrado')
    res.status(200).send(filme)
})

//Tenho que iniciar o servidor na porta 3000
app.listen(3000,()=>{
    console.log('Servidor rodando na porta 3000')
})