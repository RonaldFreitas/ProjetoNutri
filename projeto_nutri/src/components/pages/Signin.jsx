import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        // Verificando os dados que serão enviados ao servidor
        console.log('Email:', email, 'Password:', password);

        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Dados recebidos do servidor:', data);
                
                if (data.name) {
                    localStorage.setItem("user", JSON.stringify({ name: data.name }));
                    alert('Login bem-sucedido!');
                    navigate("/"); 
                } else {
                    alert('Nome do usuário não encontrado.');
                }
            } else {
                alert(data.message || 'Erro ao fazer login. Tente novamente.');
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            alert('Erro ao fazer login. Tente novamente.');
        }
    };

    // Estilos inline
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #6e7a99, #e0eaf2)',  // Gradiente suave
    };

    const formStyle = {
        backgroundColor: '#fff',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '380px',
        transition: 'transform 0.3s ease-in-out',
    };

    const formHoverStyle = {
        ...formStyle,
        transform: 'scale(1.05)',
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
            <div
                style={formStyle}
                onMouseEnter={() => (formStyle.transform = 'scale(1.05)')}
                onMouseLeave={() => (formStyle.transform = 'scale(1)')}
            >
                <h2 style={headingStyle}>Login</h2>
                <form onSubmit={handleLogin}>
                    <div>
                        <label>E-mail:</label>
                        <input
                            type="email"
                            id="email"
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
                            id="password"
                            placeholder="Digite sua senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
                        Entrar
                    </button>
                </form>
                <p style={{ textAlign: 'center', marginTop: '20px' }}>
                    Não tem uma conta? <a href='/signup' style={linkStyle}>Cadastre-se</a>
                </p>
            </div>
        </div>
    );
};

export default Signin;
