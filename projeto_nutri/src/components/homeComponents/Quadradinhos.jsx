import React from "react";
import '../../styles/EstilosGerais.css';
import '../../styles/Quadradinho.css';


{/* Arrumar os src*/}
function Quadradinhos(){
    return(
        <section class="text-center mb-4 ">
        <div style="display: flex; justify-content: space-around; flex-wrap: wrap;">
            {/*<!-- Quadradinho 1: Vida Saudável -->*/}
            <div class="quadradinho">
                <img src= "src/assets/1587922-74104c35.png"/> <img alt="Vida Saudável"/>
                <h3>Vida Saudável</h3>
                <p>Descubra como cultivar hábitos que promovem o bem-estar físico e mental. Aqui, você encontrará dicas de alimentação equilibrada, receitas nutritivas e sugestões de exercícios. Pequenas mudanças podem levar a grandes resultados para uma vida mais plena e ativa!</p>
            </div>
            
            {/*<!-- Quadradinho 2: Nossos Princípios --> */}
            <div class="quadradinho">
                <img src= "src/assets/3373025-6b0b95ff.png"/> <img alt= "Nossos Princípios"/>
                <h3>Nossos Princípios</h3>
                <p>Valorizamos uma alimentação equilibrada que promove saúde a longo prazo e defendemos uma abordagem holística que considera alimentação, atividade física e saúde mental.</p>
            </div>
            
            {/*<!-- Quadradinho 3: Agricultura Ecológica --> */}
            <div class="quadradinho">
                <img src= "src/assets/3462063-9a73c540.png"/> <img alt= "Agricultura Ecológica"/>
                <h3>Agricultura Ecológica</h3>
                <p>Nossos produtos são cultivados com métodos sustentáveis, garantindo qualidade e respeito ao meio ambiente. A agricultura ecológica é essencial para um futuro mais saudável.</p>
            </div>
            
            {/*Quadradinho 4: Boa Comida */}
            <div class="quadradinho">
                <img src="src/assets/1880202-a2dd130f.png"/> <img alt= "Boa Comida"/>
                <h3>Boa Comida</h3>
                <p>Acreditamos que boa comida é aquela que une sabor e nutrição. Neste espaço, celebramos receitas que não apenas agradam ao paladar, mas também nutrem o corpo.</p>
            </div>
        </div>
    </section>
    );
}

export default Quadradinhos;