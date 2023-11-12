// livrosRoutes.js
import express from "express";
import LivroController from "../controllers/LivroController.js";

const routes = express.Router();

routes.get("/livros", LivroController.ListarLivros);  // Corrigido para ListarLivros
routes.get("/livros/busca", LivroController.listarLivrosPorEditora);
routes.get("/livros/:id", LivroController.ListarLivro);
routes.post("/livros", LivroController.cadastrarLivro);
routes.put("/livros/:id", LivroController.atualizarLivro);
routes.delete("/livros/:id", LivroController.excluirLivro);


export default routes;
