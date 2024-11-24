import React from "react";
import '../../styles/EstilosGerais.css';
import { Link } from 'react-router-dom';



function Cabecalho() {
  return (
    <header>
      <nav className="d-flex justify-content-center align-items-center">
        <ul><Link to="/">Início</Link></ul>
        <ul><Link to="/Recipes">Receitas</Link></ul>
        <ul><Link to="/ExamCard">Exames</Link></ul>
        <ul><Link to="/IMCCalculator">IMC</Link></ul>
        <ul><Link to="/ProductPage">Produtos</Link></ul>
        <ul><Link to="/LoginPage" className="btn btn-outline-light ml-3">Login e Cadastro</Link></ul>
      </nav>
    </header>
  );
}

export default Cabecalho;