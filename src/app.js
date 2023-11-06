import express from 'express';

const app = express();
app.use(express.json());

const livros = [{ 'id': 1, 'title': 'the hobbit' }, {
    'id': 2, 'title': 'livro 2'
}]


function buscaLivro(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    })
};

app.get('/', (req, res) => {
    res.status(200).send("Using express for api ");
});

app.get('/livros', (req, res) => {
    res.status(200).send(livros);
});

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