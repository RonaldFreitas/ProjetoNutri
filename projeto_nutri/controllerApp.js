const express = require('express');
const { inserirUsuario } = require('./dbuserController');
const { inserirProduto } = require('./dbprodutoController');
const { inserirPedido } = require('./dbpedidoController');

const app = express();
const port = 1433;

app.get('/', (req, res) => {
  res.send('Bem-vindo ao ProjetoNutri!');
});

// Exemplo de uso das funções
inserirUsuario('05102205567', 'Ronald anão pistolinha', 'ronaldbotas@gmail.com', 'pistolinha123');
inserirProduto('P003', 'Semente de Chia', '1', 20.00, 10);
inserirPedido(1, 'P001', '12345678901', new Date());


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${1433}`);
});
