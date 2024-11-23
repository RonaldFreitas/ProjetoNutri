const connectToDatabase = require('./dbConfig');
const sql = require('mssql');

async function inserirProduto(codigoProduto, nomeProduto, quantidade, preco, estoque) {
  const pool = await connectToDatabase();
  try {
    await pool.request()
      .input('CODIGO_PRODUTO', sql.VarChar(20), codigoProduto)
      .input('NOME_PRODUTO', sql.VarChar(50), nomeProduto)
      .input('QUANTIDADE', sql.VarChar(50), quantidade)
      .input('PRECO', sql.SmallMoney, preco)
      .input('ESTOQUE', sql.Int, estoque)
      .query('INSERT INTO TABELA_PRODUTOS (CODIGO_PRODUTO, NOME_PRODUTO, QUANTIDADE, PRECO, ESTOQUE) VALUES (@CODIGO_PRODUTO, @NOME_PRODUTO, @QUANTIDADE, @PRECO, @ESTOQUE)');
    console.log('Produto inserido com sucesso!');
  } catch (error) {
    console.error('Erro ao inserir produto:', error);
  }
}

module.exports = { inserirProduto };

