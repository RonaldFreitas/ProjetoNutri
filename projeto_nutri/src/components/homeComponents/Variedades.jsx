import React from "react";
import "../../styles/EstilosGerais.css";


{/* 
    Arrumar os href 
    Css correspondente?
    
    */}

function Variedades(){
    return(
        <section id="Colecao" class="text-center mb-4 fade-in">

        <h2><b>Variedades</b></h2>
        <br/>

        <div class="row justify-content-center">
            <div class="container d-flex justify-content-around">
                {/*<!-- Seção Produtos -->*/}
                <div class="box fade-in banner-item">
                    <a href="./html_antigo/produtos.html">
                        <div class="overlay"></div>
                        <p class="meu-paragrafo">Produtos</p>
                        <img src="https://i0.wp.com/naturvida.com.br/wp-content/uploads/2023/08/4.jpg?fit=1080%2C1080&ssl=1" alt="Produtos" class="banner-img"/>
                    </a>     
                </div>
                
                {/*<!-- Seção Examess -->*/}
                <div class="box fade-in banner-item">
                    <a href="./html_antigo/exames.html">
                        <div class="overlay"></div>
                        <p class="meu-paragrafo">Exames</p>
                        <img src="https://sanaresst.com.br/wp-content/uploads/2018/10/exame-medico-ocupacional-1046x697.jpg" alt="Exames" class="banner-img"/>
                    </a>
                </div>
                
                {/*<!-- Seção Receitas -->*/}
                <div class="box fade-in banner-item">
                    <a href="./html_antigo/receitas.html">
                        <div class="overlay"></div>
                        <p class="meu-paragrafo">Receitas</p>
                        <img src="https://media.gazetadopovo.com.br/2024/03/01184019/flay-leigos-de-nozes-e-legumes-960x540.jpg" alt="Receitas" class="banner-img"/>
                    </a>
                </div>
                
                {/*<!-- Seção IMC -->*/}
                <div class="box fade-in banner-item">
                    <a href="./html_antigo/imc.html">
                        <div class="overlay"></div>
                        <p class="meu-paragrafo">Calculadora IMC</p>
                        <img src="https://balancadigital.info/wp-content/uploads/2023/05/qual-a-balanca-mais-precisa-para-se-pesar.png" alt="IMC" class="banner-img"/>
                    </a>
                </div>
            </div>
        </div>

    </section>
    );
}

export default Variedades;