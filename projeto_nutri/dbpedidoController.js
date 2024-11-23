const connectToDatabase = require('./dbConfig');
const sql = require('mssql');

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

  const pool = await connectToDatabase();
  try {
    await pool.request()
      .input('CODIGO_PRODUTO', sql.VarChar(150), codigoProduto)
      .input('CPF', sql.Char(11), cpf)
      .input('DATAPEDIDO', sql.DateTime, dataPedido)
      .query('INSERT INTO PEDIDOS (CODIGO_PRODUTO, CPF, DATAPEDIDO) VALUES (@CODIGO_PRODUTO, @CPF, @DATAPEDIDO)');
    console.log('Pedido inserido com sucesso!');
  } catch (error) {
    console.error('Erro ao inserir pedido:', error);
    throw error; // Repassa o erro para ser tratado onde a função for chamada
  }
}

module.exports = { inserirPedido };
