import React from "react";
import saladaImg from "../../assets/usuario-4082-1d5109fcf754c91ce076bef525c565cf.jpg";
import Cabecalho from '../otherComponents/Cabecalho.jsx';
import Footer from '../otherComponents/Footer.jsx';

function Salada() {
  return (
    <>
    <Cabecalho />
      <header>
        <h1>Salada de Quinoa</h1>
      </header>

      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/5np4Qc4ZQhc?si=XYhKU9tkwZ78DPYh"
          title="YouTube video player"
          style={{ border: "none" }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          ></iframe>
      </div>

      <div className="container">
        <h2>Descrição</h2>
        <p>
          A salada de quinoa é uma opção saudável e nutritiva, perfeita para uma
          refeição leve ou como acompanhamento. Rica em proteínas e fibras, a
          quinoa combina bem com uma variedade de vegetais e temperos,
          tornando-se uma escolha versátil e saborosa. Esta salada é ideal para
          quem busca uma alimentação balanceada e cheia de sabor.
        </p>

        
        <img src={saladaImg} alt="Salada de Quinoa" className="imagem-salada" />

        <div className="receita">
          <h2>Receita</h2>
          <div className="ingredientes">
            <h3>Ingredientes:</h3>
            <ul>
              <li>1 xícara de quinoa</li>
              <li>2 xícaras de água</li>
              <li>1/2 pimentão vermelho picado</li>
              <li>1/2 pepino picado</li>
              <li>1/2 cebola roxa picada</li>
              <li>1/4 de xícara de salsinha picada</li>
              <li>Suco de 1 limão</li>
              <li>3 colheres de sopa de azeite de oliva</li>
              <li>Sal e pimenta a gosto</li>
            </ul>
          </div>

          <div className="modo-preparo">
            <h3>Modo de Preparo:</h3>
            <ol>
              <li>Enxágue a quinoa em água corrente.</li>
              <li>
                Em uma panela, adicione a quinoa e a água. Cozinhe até que a
                quinoa fique macia e absorva toda a água (cerca de 15 minutos).
              </li>
              <li>Deixe a quinoa esfriar.</li>
              <li>
                Em uma tigela grande, misture a quinoa cozida, o pimentão, o
                pepino, a cebola roxa e a salsinha.
              </li>
              <li>
                Tempere com o suco de limão, azeite, sal e pimenta.
              </li>
              <li>Sirva fresca ou leve à geladeira antes de servir.</li>
            </ol>
          </div>
        </div>
      </div>
    <Footer/>
    </>
  );
}

export default Salada;
