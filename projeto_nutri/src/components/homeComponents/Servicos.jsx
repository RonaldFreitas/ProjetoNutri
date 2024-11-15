import React from "react";
import "../../styles/EstilosGerais.css";
import "../../styles/Servicos.css";



function Servicos() {
  return (

    <section className="bg-light py-5 servicesContainer">

      <div className="servicesSection text-center">
        <h2 className="tituloIntroducao"><b>Nossos Serviços</b></h2>
        <p className="paragrafo">Oferecemos uma ampla gama de serviços e produtos, incluindo:</p>

        <ul className="paragrafo list-unstyled servicesList">
          <li><b>Produtos Nutricionais:</b> Suplementos e produtos alimentares que apoiam uma dieta equilibrada.</li>
          <li><b>Exames Nutricionais:</b> Avaliação do estado nutricional para personalizar seu plano alimentar.</li>
          <li><b>Receitas Personalizadas:</b> Receitas adaptadas aos seus gostos e necessidades.</li>
          <li><b>Calculadora de IMC:</b> Ferramenta online para monitorar sua saúde.</li>
          <li><b>Acompanhamento Contínuo:</b> Suporte regular para ajustar seu plano alimentar.</li>
        </ul>

        <h2 className="tituloIntroducao"><b>Participe!</b></h2>
        <p className="paragrafo">
          Convidamos você a agendar uma consulta e dar o primeiro passo em direção a uma vida mais saudável. Nossa equipe está pronta para acolhê-lo e ajudá-lo a alcançar seus objetivos!
        </p>
      </div>

    </section>
  );
}

export default Servicos;

{/* TROCAR O NOME DAS CLASSES NO CSS (PEGAR DO ESTILOS_ANTIGO)*/}