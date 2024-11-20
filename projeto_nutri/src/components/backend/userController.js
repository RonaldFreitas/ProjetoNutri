const connectToDatabase = require('./dbConfig');
const sql = require('mssql');

async function inserirUsuario(cpf, nome, email, senha) {
  const pool = await connectToDatabase();
  try {
    await pool.request()
      .input('CPF', sql.Char(11), cpf)
      .input('NOME', sql.VarChar(150), nome)
      .input('EMAIL', sql.VarChar(150), email)
      .input('SENHA', sql.VarChar(16), senha)
      .query('INSERT INTO USUARIOS (CPF, NOME, EMAIL, SENHA) VALUES (@CPF, @NOME, @EMAIL, @SENHA)');
    console.log('Usuário inserido com sucesso!');
  } catch (error) {
    console.error('Erro ao inserir usuário:', error);
  }
}

module.exports = { inserirUsuario };
