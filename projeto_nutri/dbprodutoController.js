const { connectToDatabase } = require('./dbConfig');

async function inserirProduto(codigoProduto, nomeProduto, quantidade, preco, estoque) {
  const db = await connectToDatabase();

  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO TABELA_PRODUTOS (CODIGO_PRODUTO, NOME_PRODUTO, QUANTIDADE, PRECO, ESTOQUE) VALUES (?, ?, ?, ?, ?)';
    db.run(query, [codigoProduto, nomeProduto, quantidade, preco, estoque], (err) => {
      if (err) {
        console.error('Erro ao inserir produto:', err);
        reject(err);
      } else {
        console.log('Produto inserido com sucesso!');
        resolve();
      }
    });
  });
}

module.exports = { inserirProduto };

