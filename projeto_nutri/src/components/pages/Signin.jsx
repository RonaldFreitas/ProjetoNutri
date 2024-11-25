import React, { useState } from 'react';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleLogin = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica de autenticação
        // Por enquanto, vamos simular um login bem-sucedido:
        console.log('Email:', email, 'Password:', password);
        // Redirecionando para a página de dashboard ou homepage após login
        history.push('/dashboard');
    };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>E-mail:</label>
          <input
            type="email"
            id="email"
            placeholder="Digite seu e-mail"
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            id="password"
            placeholder="Digite sua senha"
            required
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
      <p>
        Não tem uma conta? Cadastre-se
      </p>
    </div>
  );
};

export default Signin;