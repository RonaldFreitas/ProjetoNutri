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
                // Verifique os dados retornados pelo servidor
                console.log('Dados recebidos do servidor:', data);
                
                if (data.name) {
                    localStorage.setItem("user", JSON.stringify({ name: data.name }));
                    alert('Login bem-sucedido!');
                    navigate("/"); // Redireciona para a página inicial
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
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
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Entrar</button>
            </form>
            <p>
                Não tem uma conta? <a href='/signup'>Cadastre-se</a>
            </p>
        </div>
    );
};

export default Signin;
