const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');  // O banco de dados SQLite será salvo no arquivo 'database.db'

async function connectToDatabase() {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      // Criar tabelas se não existirem
      db.run('CREATE TABLE IF NOT EXISTS USUARIOS (CPF TEXT PRIMARY KEY, NOME TEXT, EMAIL TEXT, SENHA TEXT)');
      db.run('CREATE TABLE IF NOT EXISTS TABELA_PRODUTOS (CODIGO_PRODUTO TEXT PRIMARY KEY, NOME_PRODUTO TEXT, QUANTIDADE TEXT, PRECO REAL, ESTOQUE INTEGER)');
      db.run('CREATE TABLE IF NOT EXISTS PEDIDOS (CODIGO_PRODUTO TEXT, CPF TEXT, DATAPEDIDO TEXT, FOREIGN KEY (CODIGO_PRODUTO) REFERENCES TABELA_PRODUTOS(CODIGO_PRODUTO), FOREIGN KEY (CPF) REFERENCES USUARIOS(CPF))');
      resolve(db);
    });
  });
}

module.exports = { connectToDatabase };

