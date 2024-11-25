const { connectToDatabase } = require('./dbConfig');

async function inserirUsuario(cpf, nome, email, senha) {
  const db = await connectToDatabase();

  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO USUARIOS (CPF, NOME, EMAIL, SENHA) VALUES (?, ?, ?, ?)';
    db.run(query, [cpf, nome, email, senha], (err) => {
      if (err) {
        console.error('Erro ao inserir usuário:', err);
        reject(err);
      } else {
        console.log('Usuário inserido com sucesso!');
        resolve();
      }
    });
  });
}

module.exports = { inserirUsuario };

