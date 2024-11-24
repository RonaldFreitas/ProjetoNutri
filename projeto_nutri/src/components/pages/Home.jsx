import React from "react";
import "../../styles/EstilosGerais.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrosel from "../homeComponents/Carrossel.jsx"
import Quadradinhos from "../homeComponents/Quadradinhos.jsx"
import Conheca from "../homeComponents/Conheca.jsx"
import Servicos from "../homeComponents/Servicos.jsx"
import Variedades from "../homeComponents/Variedades.jsx"
import Contato from "../homeComponents/Contato.jsx";
import PerguntasFrequentes from "../homeComponents/PerguntasFrequentes.jsx"
import Footer from "../otherComponents/Footer.jsx"

function Home() {
    return (
        <>
            <Carrosel />
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