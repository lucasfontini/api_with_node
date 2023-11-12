import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";
const conexao = await conectaNaDatabase();
conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso");
});


const app = express();
// ajuda a gerencias as rotas atruibuindo isso para o arquivo index.js 
routes(app)

const livros = [{ 'id': 1, 'title': 'the hobbit' }, {
    'id': 2, 'title': 'livro 2'
}]


function buscaLivro(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    })
};



app.delete('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id)
    // deleta o elemento index
    livros.splice(index, 1)
    res.status(204).send("elemento deletado")
})

app.get('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id)
    res.status(200).send(livros[index])
});

app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send(livros);

});

export default app

