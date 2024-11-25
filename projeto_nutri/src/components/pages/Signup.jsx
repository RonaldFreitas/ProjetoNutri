import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const formatCPF = (cpf) => {
  return cpf
    .replace(/\D/g, '') 
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2') 
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
};

const Signup = () => {
  const [cpf, setCpf] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
  
    if (password !== confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:3000/signup', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cpf,
          name,
          email,
          password,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert(data.message); 
        navigate('/signin'); 
      } else {
        alert(data.message); 
      }
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      alert('Erro ao cadastrar. Tente novamente.');
    }
  };

  // Estilos inline
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #6e7a99, #e0eaf2)',
  };

  const formStyle = {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    transition: 'transform 0.3s ease-in-out',
  };

  const inputStyle = {
    width: '100%',
    padding: '14px',
    margin: '12px 0',
    borderRadius: '5px',
    border: '2px solid #ddd',
    fontSize: '16px',
    outline: 'none',
    transition: 'border-color 0.3s',
  };

  const inputFocusStyle = {
    borderColor: '#6e7a99',
  };

  const buttonStyle = {
    width: '100%',
    padding: '14px',
    backgroundColor: '#3b8d99',
    border: 'none',
    borderRadius: '5px',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#5a9db8',
  };

  const linkStyle = {
    color: '#3b8d99',
    textDecoration: 'none',
    fontSize: '14px',
  };

  const headingStyle = {
    textAlign: 'center',
    color: '#333',
    fontFamily: 'Arial, sans-serif',
    fontWeight: '600',
    marginBottom: '30px',
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h2 style={headingStyle}>Cadastro</h2>
        <form onSubmit={handleSignup}>
          <div>
            <label>CPF:</label>
            <input
              type="text"
              placeholder="Digite seu CPF"
              value={cpf}
              onChange={(e) => setCpf(formatCPF(e.target.value))}
              required
              style={inputStyle}
              onFocus={(e) => e.target.style.borderColor = '#6e7a99'}
              onBlur={(e) => e.target.style.borderColor = '#ddd'}
            />
          </div>
          <div>
            <label>Nome:</label>
            <input
              type="text"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={inputStyle}
              onFocus={(e) => e.target.style.borderColor = '#6e7a99'}
              onBlur={(e) => e.target.style.borderColor = '#ddd'}
            />
          </div>
          <div>
            <label>E-mail:</label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={inputStyle}
              onFocus={(e) => e.target.style.borderColor = '#6e7a99'}
              onBlur={(e) => e.target.style.borderColor = '#ddd'}
            />
          </div>
          <div>
            <label>Senha:</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={inputStyle}
              onFocus={(e) => e.target.style.borderColor = '#6e7a99'}
              onBlur={(e) => e.target.style.borderColor = '#ddd'}
            />
          </div>
          <div>
            <label>Confirmar Senha:</label>
            <input
              type="password"
              placeholder="Confirme sua senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              style={inputStyle}
              onFocus={(e) => e.target.style.borderColor = '#6e7a99'}
              onBlur={(e) => e.target.style.borderColor = '#ddd'}
            />
          </div>
          <button 
            type="submit" 
            style={buttonStyle} 
            onMouseEnter={(e) => e.target.style.backgroundColor = '#5a9db8'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#3b8d99'}
          >
            Cadastrar
          </button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '20px' }}>
          Já tem uma conta? <a href="/signin" style={linkStyle}>Faça login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
