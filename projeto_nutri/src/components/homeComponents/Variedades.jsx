import React from "react";
import { Link } from "react-router-dom"; // Usando Link para navegação

function Variedades() {
  return (
    <>
      <section id="Colecao" className="text-center mb-4 fade-in">
        <h2><b>Variedades</b></h2>
        <br />

        <div className="d-flex justify-content-around flex-wrap">
          {/* Card de Produtos */}
          <div className="banner-item">
            <Link to="/produtos">
              <div className="overlay"></div>
              <img
                src="https://i0.wp.com/naturvida.com.br/wp-content/uploads/2023/08/4.jpg?fit=1080%2C1080&ssl=1"
                alt="Produtos"
                className="banner-img"
              />
              <div className="banner-body">
                <p className="meu-paragrafo">Produtos</p>
              </div>
            </Link>
          </div>

          {/* Card de Exames */}
          <div className="banner-item">
            <Link to="/exames">
              <div className="overlay"></div>
              <img
                src="https://sanaresst.com.br/wp-content/uploads/2018/10/exame-medico-ocupacional-1046x697.jpg"
                alt="Exames"
                className="banner-img"
              />
              <div className="banner-body">
                <p className="meu-paragrafo">Exames</p>
              </div>
            </Link>
          </div>

          {/* Card de Receitas */}
          <div className="banner-item">
            <Link to="/receitas">
              <div className="overlay"></div>
              <img
                src="https://media.gazetadopovo.com.br/2024/03/01184019/flay-leigos-de-nozes-e-legumes-960x540.jpg"
                alt="Receitas"
                className="banner-img"
              />
              <div className="banner-body">
                <p className="meu-paragrafo">Receitas</p>
              </div>
            </Link>
          </div>

          {/* Card de IMC */}
          <div className="banner-item">
            <Link to="/imc">
              <div className="overlay"></div>
              <img
                src="https://balancadigital.info/wp-content/uploads/2023/05/qual-a-balanca-mais-precisa-para-se-pesar.png"
                alt="IMC"
                className="banner-img"
              />
              <div className="banner-body">
                <p className="meu-paragrafo">Calculadora IMC</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Variedades;
