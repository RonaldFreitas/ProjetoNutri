import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Email:', email, 'Password:', password);
        navigate('/'); 
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
                        onChange={(e) => setEmail(e.target.value)} // Atualiza o estado
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
                        onChange={(e) => setPassword(e.target.value)} // Atualiza o estado
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
