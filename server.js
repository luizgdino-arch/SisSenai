const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const app = express();

// Configurações do Servidor
  app.use(bodyParser.urlencode({ extended:true}));
  app.use(express.json());//Necessário para o carrinho de compras (JSON)
  app.use(express.static('.'));//Serve seus arquivos HTML, CSS e imagens

//Conexão com o Banco de Dados
const db= new sqlite3.Database('./sissenai.db');

//Inicialização das Tabelas (Cria apenas se não existirem)
db.serialize(() => {
  //Tabela de Clientes
  db.run('CREATE TABLE IF NOT EXIST clientes (
     id INTEGER PRIMARY KEY AUTOINCREMENT,
     nome TEXT,
     cpf TEXT,
     telefone TEXT
  )');
    
//---ROTAS DE CLIENTES---
app.post('/salvar-cliente',(req, res) => {
const { nome, cpf,telefone } = req.body;
db.run('INSERT INTO clientes (nome, cpf, teleone) VALUES (???)'; [nome, cpf, telefone], (err) => {
   if (err) return res.status(500).send(err,rows) => {
  res.json(rows);
  });
});
