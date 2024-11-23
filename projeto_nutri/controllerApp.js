const express = require('express');
const { inserirUsuario } = require('./userController');
const { inserirProduto } = require('./dbprodutoController');
const { inserirPedido } = require('./dbpedidoController');

const app = express();
const port = 1433;

app.get('/', (req, res) => {
  res.send('Bem-vindo ao ProjetoNutri!');
});

// Exemplo de uso das funções
(async () => {
  try {
    await inserirUsuario('06602200144', 'Luis preso', 'cadeafisicaequimica@gmail.com', 'vampirodanet');
    await inserirProduto('P004', 'Pas de Amendoin Integral', '1', 28.00, 5);
    await inserirPedido('P001', '12345678901', new Date());
  } catch (error) {
    console.error('Erro durante a execução de exemplos:', error.message);
  }
})();

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${1433}`);
});

