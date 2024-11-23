const connectToDatabase = require('./dbConfig');
const sql = require('mssql');

async function inserirPedido(codigoProduto, cpf, dataPedido) {
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
  }
}

module.exports = { inserirPedido };
