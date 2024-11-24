import React from "react";
import '../../styles/EstilosGerais.css';
import { Link } from 'react-router-dom';



function Cabecalho() {
  return (
    <header>
      <h1>GO NUTRI</h1><br/>
      <nav className="d-flex justify-content-center align-items-center">
        <ul><Link to="/">Início</Link></ul>
        <ul><Link to="/receitas">Receitas</Link></ul>
        <ul><Link to="/exames">Exames</Link></ul>
        <ul><Link to="/imc">IMC</Link></ul>
        <ul><Link to="/produtos">Produtos</Link></ul>
        <ul><Link to="/carrinho">Carrinho</Link></ul>
        <ul><Link to="/login" className="btn btn-outline-light ml-3">Login e Cadastro</Link></ul>
      </nav>
    </header>
  );
}

export default Cabecalho;