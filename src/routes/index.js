import express from "express";
import livrosRoutes from "./livrosRoutes.js";  // Renomeei para livrosRoutes para ser mais descritivo

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("curso de node js"));
    app.use(express.json(), livrosRoutes);  // Use livrosRoutes em vez de livros
};

export default routes;
