const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

//O express precisa entender que antes de todas as requisições, elas devem ser convertidas para JSON
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

// o / significa o caminho raiz
// app.get('/users') -> o recurso que vc está querendo acessar
// vc está qurendo acessar o recurso de usuário
// quando vc cria uma rota: é preciso informar qual o caminho

/*
 Métodos HTTP:
    GET: Buscar alguma informação do backend
    (quando se dá enter no browser, ele sempre executa o método GET)

    POST: Criar uma informação no backend (exemplo para criar um usuário)

    PUT: Alterar uma informação no backend

    DELETE: Deletar uma informação no backend

Tipos de parâmetros (que se pode enviar para um rota):

    Query: parâmetros nomeados enviados na rota após "?" (filtros, paginação)
     ex: 

    Route params: parâmetros utilizados para identificar recursos
        ex: identificar um único recurso
            http://localhost:3333/users/1 (usuario com id 1)

    Request Body: O QUE SOBRA
        corpo da requisição utilizado para alterar os recursos
            ex: do usuario: email, senha, etc

            para acessar o corpo: request.body




    Banco de Dados

    Driver: SELECT * FROM users
        Query Builder: table('users').select('*').where()... USAREMOS ESTE? knex.js
*/











