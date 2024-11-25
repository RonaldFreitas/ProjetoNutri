import React from "react";
import smoothieImg from "../../assets/FV_receita-Smoothie_Green_01.avif";
import '../../styles/Smoothie.css'
import Cabecalho from '../otherComponents/Cabecalho.jsx';
import Footer from '../otherComponents/Footer.jsx';

function Smoothie() {
    return (
        <>
        <Cabecalho />
            <header>
                <h1>Smoothie Verde</h1>
            </header>
            <div className="video-container">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/a8FnBvQMNoQ?si=af6Ov52HS_DJOypU"
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
                    O smoothie verde é uma bebida refrescante e nutritiva, ideal para um café da manhã saudável ou um lanche energético.
                    Com uma combinação de folhas verdes, frutas e líquidos, este smoothie é repleto de vitaminas, minerais e fibras.
                    É uma ótima maneira de incluir vegetais na sua dieta de forma saborosa e prática.
                </p>

                <img src={smoothieImg} alt="Smoothie Verde" className="imagem-smoothie"/>

                    <div className="receita">
                        <h2>Receita</h2>
                        <div className="ingredientes">
                            <h3>Ingredientes:</h3>
                            <ul>
                                <li>1 banana madura</li>
                                <li>1/2 xícara de espinafre fresco</li>
                                <li>1/2 xícara de água de coco ou leite vegetal</li>
                                <li>1 colher de sopa de semente de chia (opcional)</li>
                                <li>1/2 maçã verde</li>
                                <li>Suco de 1/2 limão</li>
                                <li>Gelo a gosto</li>
                            </ul>
                        </div>

                        <div className="modo-preparo">
                            <h3>Modo de Preparo:</h3>
                            <ol>
                                <li>Coloque todos os ingredientes no liquidificador.</li>
                                <li>Bata até obter uma mistura homogênea.</li>
                                <li>Se desejar, adicione mais água ou leite vegetal para ajustar a consistência.</li>
                                <li>Sirva imediatamente e aproveite!</li>
                            </ol>
                        </div>
                    </div>
            </div>
        <Footer/>
        </>
    );
}

export default Smoothie;
