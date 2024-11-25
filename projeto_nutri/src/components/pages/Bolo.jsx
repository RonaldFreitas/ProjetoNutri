import React from "react";
import boloImg from "../../assets/bolo integral.png";
import '../../styles/Bolo.css'
import Cabecalho from '../otherComponents/Cabecalho.jsx';
import Footer from '../otherComponents/Footer.jsx';

function Bolo() {
    return (
        <>
        <Cabecalho />
            <header>
                <h1>Bolo de Banana Integral</h1>
            </header>

            <div className="video-container">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/gsZd_QPDDdw?si=J6FnJgH6i-9ce1g8"
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
                    O bolo de banana integral é uma opção deliciosa e saudável, perfeito para o café da manhã ou lanche.
                    Feito com ingredientes simples, é uma ótima maneira de aproveitar aquelas bananas maduras que você tem em casa.
                    Este bolo é fofinho, nutritivo e adoçado naturalmente, tornando-se uma escolha ideal para toda a família.
                </p>

                
                <img src={boloImg} alt="Bolo de Banana" className="imagem-bolo" />

                <div className="receita">
                    <h2>Receita</h2>
                    <div className="ingredientes">
                        <h3>Ingredientes:</h3>
                        <ul>
                            <li>3 bananas maduras</li>
                            <li>1/2 xícara de açúcar mascavo</li>
                            <li>1/4 xícara de óleo de coco ou azeite</li>
                            <li>2 ovos</li>
                            <li>1 xícara de farinha de trigo integral</li>
                            <li>1 colher de sopa de fermento em pó</li>
                            <li>1/2 colher de chá de canela em pó (opcional)</li>
                        </ul>
                    </div>

                    <div className="modo-preparo">
                        <h3>Modo de Preparo:</h3>
                        <ol>
                            <li>Preaqueça o forno a 180°C e unte uma forma com óleo.</li>
                            <li>No liquidificador, bata as bananas, o açúcar mascavo, o óleo e os ovos até ficar homogêneo.</li>
                            <li>Em uma tigela, misture a farinha de trigo integral, o fermento e a canela.</li>
                            <li>Adicione a mistura líquida à mistura seca e mexa até incorporar.</li>
                            <li>Despeje a massa na forma e leve ao forno por cerca de 40 minutos, ou até que um palito saia limpo.</li>
                            <li>Deixe esfriar antes de desenformar e sirva.</li>
                        </ol>
                    </div>
                </div>
            </div>
        <Footer/>
        </>
    );
}

export default Bolo;
