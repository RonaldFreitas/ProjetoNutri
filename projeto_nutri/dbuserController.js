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

async function checkUsuario(email, senha) {
  const db = await connectToDatabase();

  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM USUARIOS WHERE EMAIL = ? AND SENHA = ?';
    db.get(query, [email, senha], (err, row) => {
      if (err) {
        console.error('Erro ao consultar usuário:', err);
        reject(err);
      } else {
        if (row) {
          resolve(row); 
        } else {
          resolve(null); 
        }
      }
    });
  });
}

module.exports = { inserirUsuario, checkUsuario };


