import React from "react";
import '../../styles/EstilosGerais.css';
import '../../styles/Quadradinho.css';
import vidaSaudavelImg from "../../assets/1587922-74104c35.png";
import nossosPrincipiosImg from "../../assets/3373025-6b0b95ff.png";
import agriculturaEcologicaImg from "../../assets/3462063-9a73c540.png";
import boaComidaImg from "../../assets/1880202-a2dd130f.png";

{/* Arrumar os src*/}
function Quadradinhos() {
    return (
      <section className="text-center mb-4">
        <div style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "20px" // Adiciona um espaçamento entre os quadradinhos
        }}>
          {/* Quadradinho 1: Vida Saudável */}
          <div className="quadradinho" style={{ width: "250px", textAlign: "center" }}>
            <img src={vidaSaudavelImg} alt="Vida Saudável" style={{ width: "100%", borderRadius: "8px" }} />
            <h3>Vida Saudável</h3>
            <p>Descubra como cultivar hábitos que promovem o bem-estar físico e mental. Aqui, você encontrará dicas de alimentação equilibrada, receitas nutritivas e sugestões de exercícios. Pequenas mudanças podem levar a grandes resultados para uma vida mais plena e ativa!</p>
          </div>
  
          {/* Quadradinho 2: Nossos Princípios */}
          <div className="quadradinho" style={{ width: "250px", textAlign: "center" }}>
            <img src={nossosPrincipiosImg} alt="Nossos Princípios" style={{ width: "100%", borderRadius: "8px" }} />
            <h3>Nossos Princípios</h3>
            <p>Valorizamos uma alimentação equilibrada que promove saúde a longo prazo e defendemos uma abordagem holística que considera alimentação, atividade física e saúde mental.</p>
          </div>
  
          {/* Quadradinho 3: Agricultura Ecológica */}
          <div className="quadradinho" style={{ width: "250px", textAlign: "center" }}>
            <img src={agriculturaEcologicaImg} alt="Agricultura Ecológica" style={{ width: "100%", borderRadius: "8px" }} />
            <h3>Agricultura Ecológica</h3>
            <p>Nossos produtos são cultivados com métodos sustentáveis, garantindo qualidade e respeito ao meio ambiente. A agricultura ecológica é essencial para um futuro mais saudável.</p>
          </div>
  
          {/* Quadradinho 4: Boa Comida */}
          <div className="quadradinho" style={{ width: "250px", textAlign: "center" }}>
            <img src={boaComidaImg} alt="Boa Comida" style={{ width: "100%", borderRadius: "8px" }} />
            <h3>Boa Comida</h3>
            <p>Acreditamos que boa comida é aquela que une sabor e nutrição. Neste espaço, celebramos receitas que não apenas agradam ao paladar, mas também nutrem o corpo.</p>
          </div>
        </div>
      </section>
    );
  }

export default Quadradinhos;