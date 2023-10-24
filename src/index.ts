import express from 'express'
const app = express()
app.use(express.json())
//tenho que ter uma rota post para cadastrar um filme
app.post('/filmes', (req, res)=>{
    const filme = {
        titulo:'A escola do bem e do mal',
        descricao:'História de duas amigas em um mundo mágico.',
        imagem:"https://midias.correiobraziliense.com.br/_midias/jpg/2022/07/22/a_escola_do_bem_e_do_mal-26094185.jpg"
    }
    res.status(201).send(filme)
})
app.get('/filmes', (req, res)=>{
    res.send("Filme listado com sucesso!")
})
//tenho que iniciar
app.listen(3000,()=>{
    console.log("Servidor rodando na porta 3000")
})
