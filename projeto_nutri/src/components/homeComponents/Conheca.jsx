import React from "react";
import "../../styles/EstilosGerais.css";

{/*
    Procurar css correspondentes faltantes
    Arrumar o src
    
      */}

function Conheca(){
    return(
        <section className="text-center mb-4 fade-in highlight-background ">
        <div className="content-container d-flex align-items-center flex-wrap justify-content-between">
            {/*<!-- "Quem Somos?" à esquerda --> */}
            <div className="text-container col-12 col-md-6 mb-3 mb-md-0 text-left">
                <h3 className="titulo-introdução"><b>Conheça Nosso Trabalho</b></h3>
                <p className="paragrafo">
                    Bem-vindo à nossa clínica de nutrição, um espaço dedicado à promoção da saúde e do bem-estar por meio da alimentação consciente e equilibrada.
                </p>
                <h3 className="titulo-introdução"><b>Quem Somos?</b></h3>
                <p className="paragrafo">
                    Nossa filosofia é baseada na educação nutricional e no empoderamento. Buscamos proporcionar hábitos saudáveis que melhorem a saúde física, mental e emocional.
                </p>
            </div>
            
             {/*<!-- Imagem à direita --> */}
            <div className="image-container col-12 col-md-5">
                <img src="src/assets/fitness-healthy-lifestyle-concep.jpg" alt="Imagem da Clínica" className="img-fluid hover-effect rounded-lg shadow-sm"/>
            </div>
        </div>
    </section>
    );
}

export default Conheca;