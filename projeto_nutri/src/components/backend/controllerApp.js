const express = require('express');
const { inserirUsuario } = require('./userController');
const { inserirPedido } = require('./pedidoController');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Bem-vindo ao ProjetoNutri!');
});

// Exemplo de uso das funções
inserirUsuario('12345678901', 'Vitor Silva', 'vitor@exemplo.com', 'senha123');
inserirPedido('P001', 'Produto A', '2', 49.99, 100);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${3000}`);
});
