import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Navegação para outras páginas

const Signup = () => {
  // Definindo os estados para os campos de entrada
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate(); // Navegação após o cadastro

  // Função para validar e registrar o usuário
  const handleSignup = (e) => {
    e.preventDefault();

    // Validação simples de senha
    if (password !== confirmPassword) {
      alert("As senhas não coincidem");
      return;
    }

    // Aqui você pode adicionar a lógica para enviar os dados para o servidor
    // Por enquanto, vamos simular um cadastro bem-sucedido:
    console.log('Nome:', name, 'Email:', email, 'Senha:', password);

    // Redirecionando para a tela de login ou dashboard após o cadastro
    navigate('/login');
  };

  return (
    <div>
      <h2>Cadastro</h2>
      <form onSubmit={handleSignup}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            id="name"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)} // Atualiza o nome
            required
          />
        </div>
        <div>
          <label>E-mail:</label>
          <input
            type="email"
            id="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Atualiza o email
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            id="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Atualiza a senha
            required
          />
        </div>
        <div>
          <label>Confirmar Senha:</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirme sua senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} // Atualiza a confirmação de senha
            required
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
      <p>
        Já tem uma conta? <a href="/signin">Faça login</a>
      </p>
    </div>
  );
};

export default Signup;