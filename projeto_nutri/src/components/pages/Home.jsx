import React from "react";
import "../../styles/EstilosGerais.css";
import Carousel from "../homeComponents/Carrossel.jsx"
import Quadradinhos from "../homeComponents/Quadradinhos.jsx"
import Conheca from "../homeComponents/Conheca.jsx"
import Servicos from "../homeComponents/Servicos.jsx"
import Variedades from "../homeComponents/Variedades.jsx"
import Contato from "../homeComponents/Contato.jsx";
import PerguntasFrequentes from "../homeComponents/PerguntasFrequentes.jsx"


function Home() {
    return (
        <>
            <Carousel />
            <Quadradinhos />
            <Conheca />
            <Servicos />
            <Variedades />
            <Contato />
            <PerguntasFrequentes />
        </>


    )
};

export default Home;