import http from 'http';



const rota = {
    '/': 'Página Inaaaaaaaicial',
}



const server = http.createServer((requisicao, response) => {

    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end(rota[requisicao.url]);

})


server.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
    console.log("http://localhost:3000");
});