import React from "react";
import '../../styles/EstilosGerais.css';



function Cabecalho(){
    return(
    <nav class="d-flex justify-content-center align-items-center">
    {/*Arrumar o redirecionamento
    Procurar a classe do css correspondente
    */}

    <a href="../index.html">Inicio</a>
    <a href="receitas.html">Receitas</a>
    <a href="exames.html">Exames</a>
    <a href="imc.html">IMC</a>
    <a href="produtos.html">Produtos</a>
    <a href="login.html" class="btn btn-outline-light ml-3">Login e Cadastro</a>
    </nav>

    );
}

export default Cabecalho;