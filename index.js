
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

//1 - pega a lista de todos produtos
app.get('/api/v1/produto', (req, res) => {
    connection.query('SELECT produtos.id, descricao, valor, estoque, departamento.nome as departamento FROM produtos inner join departamento on departamento.id = produtos.departamento', function (err, rows, fields) {
        if (err) throw err;

        res.json(rows)
    });
})

//2 - pega produto por ID especifico

app.get('/api/v1/produto/:produtoId', (req, res) => {
    connection.query('SELECT produtos.id, descricao, valor, estoque, departamento.nome as departamento FROM produtos inner join departamento on departamento.id = produtos.departamento where produtos.id =' + req.params.produtoId, function (err, rows, fields) {
        if (req.params.produtoId = !rows[0]) {
            res.status(404).json('Erro 404, produto não encontrado')
        } else {
            res.json(rows)
        }
    });
})

//3.1 - adiciona um produto no banco de dados
app.post('/api/v1/produto', (req, res) => {
    let gravar = {
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

//3.2 - adiciona um produto no banco de dados (com erro 400)
app.post('/api/v1/produtoerro', (req, res) => {
    let gravar = {
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

//4.1 - altera dados um produto 
app.put('/api/v1/produto/:produtoId', (req, res) => {
    let gravar = ['pipoca', '1', '30', '5', req.params.produtoId]
    let checar = 0
    for (i in gravar) {
        if (gravar[i] === '')
            checar = 1
    }
    if (checar === 1) {
        return res.status(400).json('HTTP 400 - Bad Request')
    } else {
        connection.query('UPDATE produtos SET descricao=?, valor=?, estoque=?, departamento=? WHERE ID =?', gravar, function (err, result, fields) {
            if (result.affectedRows == 0) {
                res.status(404).json('404 - Not Found')
            }else{
            res.status(200).json("200 - Ok")
            }
        }
        )
    };
})

//4.2 - altera dados um produto com erro (400)
app.put('/api/v1/produtoerro/:produtoId', (req, res) => {
    let gravar = ['', '1', '30', '5', req.params.produtoId]
    let checar = 0
    for (i in gravar) {
        if (gravar[i] === '')
            checar = 1
    }
    if (checar === 1) {
        return res.status(400).json('HTTP 400 - Bad Request')
    } else {
        connection.query('UPDATE produtos SET descricao=?, valor=?, estoque=?, departamento=? WHERE ID =?', gravar, function (err, result, fields) {
            if (result.affectedRows == 0) {
                res.status(404).json('404 - Not Found')
            }else{
            res.status(200).json("200 - Ok")
            }
        }
        )
    };
})

//5 - pega a lista de todos departamentos
app.get('/api/v1/departamento', (req, res) => {
    connection.query('SELECT id, nome from departamento', function (err, rows, fields) {
        if (err) throw err;

        res.json(rows)
    });
})

//6 - pega departamento por id especifico e mostra todos seus produtos relacionados
app.get('/api/v1/departamento/:departamentoId', (req, res) => {
    connection.query('select departamento.nome as departamento, produtos.descricao, produtos.valor, produtos.estoque from produtos inner join departamento on produtos.departamento = departamento.id where departamento.id =' + req.params.departamentoId, function (err, rows, fields) {
        if (req.params.departamentoId = !rows[0]) {
            res.status(404).json('Erro 404, departamento não encontrado')
        } else {
            res.json(rows)
        }
    });
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
