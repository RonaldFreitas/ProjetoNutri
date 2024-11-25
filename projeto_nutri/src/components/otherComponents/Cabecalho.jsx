import React, { useState, useEffect } from "react";
import "../../styles/EstilosGerais.css";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const Cabecalho = () => {
  const [user, setUser] = useState(null); 
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null); 
    navigate("/");
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user"); 
    if (storedUser) {
      setUser(JSON.parse(storedUser)); 
    }
  }, []);

  return (
    <header>
      <h1>GO NUTRI</h1>
      <br />
      <nav className="d-flex justify-content-center align-items-center">
        <ul>
          <Link to="/">Início</Link>
        </ul>
        <ul>
          <Link to="/receitas">Receitas</Link>
        </ul>
        <ul>
          <Link to="/exames">Exames</Link>
        </ul>
        <ul>
          <Link to="/imc">IMC</Link>
        </ul>
        <ul>
          <Link to="/produtos">Produtos</Link>
        </ul>
        <ul>
          <Link to="/carrinho">
            <ShoppingCart className="w-5 h-5 mr-1" />
          </Link>
        </ul>

        {user ? (
          <ul>
            <span>Usuário: {user.name}</span>
          </ul>
        ) : (
          <ul>
            <Link to="/signin" className="btn btn-outline-light ml-3">
              Login e Cadastro
            </Link>
          </ul>
        )}
        {user && (
          <ul>
            <button onClick={handleLogout} className="btn btn-outline-light ml-3">
              Deslogar
            </button>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Cabecalho;