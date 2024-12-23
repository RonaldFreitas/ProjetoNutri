import React from "react";
import "../../styles/EstilosGerais.css";
import Carousel from "../homeComponents/Carrossel.jsx"
import Quadradinhos from "../homeComponents/Quadradinhos.jsx"
import Conheca from "../homeComponents/Conheca.jsx"
import Servicos from "../homeComponents/Servicos.jsx"
import Variedades from "../homeComponents/Variedades.jsx"
import Contato from "../homeComponents/Contato.jsx";
import PerguntasFrequentes from "../homeComponents/PerguntasFrequentes.jsx"
import Cabecalho from '../otherComponents/Cabecalho.jsx';
import Footer from '../otherComponents/Footer.jsx';


function Home() {
    return (
        <>
            <Cabecalho />
            <Carousel />
            <Quadradinhos />
            <Conheca />
            <Servicos />
            <Variedades />
            <Contato />
            <PerguntasFrequentes />
            <Footer/>
        </>
    )
};

export default Home;