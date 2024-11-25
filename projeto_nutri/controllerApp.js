const express = require('express');
const { inserirUsuario, checkUsuario } = require('./dbuserController'); // Certifique-se de que está importando corretamente
const cors = require('cors');

// Inicialize o app com express()
const app = express();

// Middleware para parsing do JSON e CORS
app.use(cors());
app.use(express.json());

// Rota de Signup
app.post('/signup', async (req, res) => {
  const { cpf, name, email, password } = req.body;

  if (!cpf || !name || !email || !password) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios!' });
  }

  try {
    await inserirUsuario(cpf, name, email, password);
    res.status(200).json({ message: 'Usuário cadastrado com sucesso!' });
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error.message);
    res.status(500).json({ message: 'Erro ao cadastrar usuário. Tente novamente mais tarde.' });
  }
});

// Rota de Login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'E-mail e senha são obrigatórios!' });
  }

  try {
    const user = await checkUsuario(email, password);
    if (user) {
      res.status(200).json({
        message: 'Login bem-sucedido',
        name: user.NOME,  // Retorna o nome do usuário
      });
    } else {
      res.status(401).json({ message: 'Credenciais inválidas' });
    }
  } catch (error) {
    console.error('Erro ao validar usuário:', error);
    res.status(500).json({ message: 'Erro ao fazer login. Tente novamente.' });
  }
});

// Inicia o servidor
app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));



