const express = require('express');
const { inserirUsuario } = require('./dbuserController');
const { inserirProduto } = require('./dbprodutoController');
const { inserirPedido } = require('./dbpedidoController');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Bem-vindo ao ProjetoNutri!');
});

// Exemplo de uso das funções
(async () => {
  try {
    await inserirUsuario('40028922000', 'Babidi do java', 'olhaondeagarenabotafisica@gmail.com', 'vampirodanet');
    await inserirProduto('P005', 'Minduim torrado', '1', 38.00, 5);
    await inserirPedido('P001', '12345678901', new Date());
  } catch (error) {
    console.error('Erro durante a execução de exemplos:', error.message);
  }
})();

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${3000}`);
});

