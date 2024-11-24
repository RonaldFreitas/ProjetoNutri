import React from "react";
import "../../styles/EstilosGerais.css";
import Cabecalho from "../otherComponents/Cabecalho";


{/* 
    Arrumar os href 
    Css correspondente?
    
    */}

function Variedades(){
    return(
        <>

        <section id="Colecao" className="text-center mb-4 fade-in">

        <h2><b>Variedades</b></h2>
        <br/>

        <div className="row justify-content-center">
            <div className="container d-flex justify-content-around">
                {/*<!-- Seção Produtos -->*/}
                <div className="box fade-in banner-item">
                    <a href="./html_antigo/produtos.html">
                        <div className="overlay"></div>
                        <p className="meu-paragrafo">Produtos</p>
                        <img src="https://i0.wp.com/naturvida.com.br/wp-content/uploads/2023/08/4.jpg?fit=1080%2C1080&ssl=1" alt="Produtos" className="banner-img"/>
                    </a>     
                </div>
                
                {/*<!-- Seção Examess -->*/}
                <div className="box fade-in banner-item">
                    <a href="./html_antigo/exames.html">
                        <div className="overlay"></div>
                        <p className="meu-paragrafo">Exames</p>
                        <img src="https://sanaresst.com.br/wp-content/uploads/2018/10/exame-medico-ocupacional-1046x697.jpg" alt="Exames" className="banner-img"/>
                    </a>
                </div>
                
                {/*<!-- Seção Receitas -->*/}
                <div className="box fade-in banner-item">
                    <a href="./html_antigo/receitas.html">
                        <div className="overlay"></div>
                        <p className="meu-paragrafo">Receitas</p>
                        <img src="https://media.gazetadopovo.com.br/2024/03/01184019/flay-leigos-de-nozes-e-legumes-960x540.jpg" alt="Receitas" className="banner-img"/>
                    </a>
                </div>
                
                {/*<!-- Seção IMC -->*/}
                <div className="box fade-in banner-item">
                    <a href="./html_antigo/imc.html">
                        <div className="overlay"></div>
                        <p className="meu-paragrafo">Calculadora IMC</p>
                        <img src="https://balancadigital.info/wp-content/uploads/2023/05/qual-a-balanca-mais-precisa-para-se-pesar.png" alt="IMC" className="banner-img"/>
                    </a>
                </div>
            </div>
        </div>

    </section></>
    );
}

export default Variedades;