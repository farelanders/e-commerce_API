
const express = require('express')
const app = express()
const port = 3000
var mysql = require('mysql2');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'desafio_hacker_grupo8'
});
connection.connect();

//pega a lista de todos produtos
app.get('/api/v1/produto', (req, res) => {
    connection.query('SELECT produtos.id, descricao, valor, estoque, departamento.nome as departamento FROM produtos inner join departamento on departamento.id = produtos.departamento', function (err, rows, fields) {
        if (err) throw err;

        res.send(rows)
    });
})

//pega produto por ID especificoo
app.get('/api/v1/produto/:produtoId', (req, res) => {
    connection.query('SELECT produtos.id, descricao, valor, estoque, departamento.nome as departamento FROM produtos inner join departamento on departamento.id = produtos.departamento where produtos.id =' + req.params.produtoId, function (err, rows, fields) {
        if (req.params.produtoId = !rows[0]) {
            res.status(404).json('Erro 404, produto não encontrado')
        } else {
            res.json(rows)
        }
    });
})

//adiciona um produto no banco de dados
app.post('/api/v1/produto', (req, res) => {
    var gravar = {
        descricao: 'quiabo',
        valor: '2.50',
        estoque: '15',
        departamento: '5',
    }
    if (gravar.descricao === '') {
        return res.status(400).json('HTTP 400 - Bad Request')
    } else {
        connection.query('INSERT INTO produtos SET ?', gravar, function (err, result) {
            if (err) res.status(400).json('HTTP 400 - Bad Request');

            res.status(200).json(gravar)
        }
        )
    };
})

//adiciona um produto no banco de dados (com erro)
app.post('/api/v1/produtoerro', (req, res) => {
    var gravar = {
        descricao: '',
        valor: '2.50',
        estoque: '15',
        departamento: '5',
    }
    if (gravar.descricao === '') {
        return res.status(400).json('HTTP 400 - Bad Request')
    } else {
        connection.query('INSERT INTO produtos SET ?', gravar, function (err, result) {
            if (err) res.status(400).json('HTTP 400 - Bad Request');

            res.status(200).json(gravar)
        }
        )
    };
})

//remove um produto (EM ANDAMENTO)
app.put('/api/v1/produto/:produtoId', (req, res) => {
    var gravar = ['caneca','2.50','5','1', req.params.produtoId]

    connection.query('UPDATE produtos SET descricao=?, valor=?, estoque=?, departamento=? WHERE ID =?', gravar, function (err, result) {
        if (err) res.json('HTTP 400 - Bad Request');

        res.status(200).json('200 - Ok')
    }
    );
})




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
