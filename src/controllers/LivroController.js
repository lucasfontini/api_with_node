import livro from "../models/Livro.js";

class LivroController {

    static async ListarLivros(req, res) {

        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        }
        catch (erro) {
            console.log(erro);

            res.status(500).json({ 'message': erro.message });

        }
    };


    static async ListarLivro(req, res) {

        try {
            const id = req.params.id;
            const livro = await livro.findById(id);
            res.status(200).json(livro);
        }
        catch (erro) {
            console.log(erro);

            res.status(500).json({ 'message': erro.message });

        }
    };

    static async atualizarLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "livro atualizado" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na atualização` });
        }
    };

    static async cadastrarLivro(req, res) {

        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json({ 'message': ' Criado com sucesso ', novoLivro });
        }
        catch (erro) {
            console.log(erro);

            res.status(500).json({ 'message': erro.message });

        }
    };

    static async excluirLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id, req.body);
            res.status(200).json({ message: "livro deletedo com sucesso " });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na atualização` });
        }
    };

    //código omitido

    static async listarLivrosPorEditora(req, res) {
        const editora = req.query.editora;
        try {
            const livrosPorEditora = await livro.find({ editora: editora });
        } catch (erro) {

        }
    };


};




export default LivroController;
