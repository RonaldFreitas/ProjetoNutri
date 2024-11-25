const { connectToDatabase } = require('./dbConfig');

async function inserirPedido(codigoProduto, cpf, dataPedido) {
  // Validações dos parâmetros
  if (!codigoProduto || typeof codigoProduto !== 'string' || codigoProduto.length > 150) {
    throw new Error('O código do produto deve ser uma string válida com no máximo 150 caracteres.');
  }
  if (!cpf || typeof cpf !== 'string' || cpf.length !== 11) {
    throw new Error('O CPF deve ser uma string válida com exatamente 11 caracteres.');
  }
  if (!dataPedido || !(dataPedido instanceof Date)) {
    throw new Error('A data do pedido deve ser um objeto Date válido.');
  }

  const db = await connectToDatabase();

  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO PEDIDOS (CODIGO_PRODUTO, CPF, DATAPEDIDO) VALUES (?, ?, ?)';
    db.run(query, [codigoProduto, cpf, dataPedido.toISOString()], (err) => {
      if (err) {
        console.error('Erro ao inserir pedido:', err);
        reject(err);
      } else {
        console.log('Pedido inserido com sucesso!');
        resolve();
      }
    });
  });
}

module.exports = { inserirPedido };

