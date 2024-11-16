import React from "react";
import '../../styles/EstilosGerais.css';
import { Link } from 'react-router-dom';



function Cabecalho() {
    return (
      <nav className="d-flex justify-content-center align-items-center">
        <Link to="/">Início</Link>
        <Link to="/receitas">Receitas</Link>
        <Link to="/exames">Exames</Link>
        <Link to="/imc">IMC</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/login" className="btn btn-outline-light ml-3">Login e Cadastro</Link>
      </nav>
    );
  }

export default Cabecalho;