const sql = require('mssql');

const config = {
  user: 'sa',
  password: 'v1t0rp4tr1ck',
  server: 'DESKTOP-1P4OOMP', 
  database: 'CLIENTES',
  options: {
    encrypt: false, 
    trustServerCertificate: true, 
  },
};

async function connectToDatabase() {
  try {
    const pool = await sql.connect(config);
    console.log('Conectado ao SQL Server com sucesso!');
    return pool;
  } catch (error) {
    console.error('Erro ao conectar ao SQL Server:', error);
  }
}

module.exports = connectToDatabase;
