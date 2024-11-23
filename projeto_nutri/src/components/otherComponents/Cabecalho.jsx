import React from "react";
import '../../styles/EstilosGerais.css';
import { Link } from 'react-router-dom';



function Cabecalho() {
  return (
    <nav className="d-flex justify-content-center align-items-center">
      <a>Inicio</a>
      <a>Receitas</a>
      <a>Exames</a>
      <a>IMC</a>
      <a>Produtos</a>
      <a class="btn btn-outline-light ml-3">Login e Cadastro</a>

      {/*<Link to="/">Início</Link>
        <Link to="/receitas">Receitas</Link>
        <Link to="/exames">Exames</Link>
        <Link to="/imc">IMC</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/login" className="btn btn-outline-light ml-3">Login e Cadastro</Link>*/}
    </nav>
  );
}

export default Cabecalho;