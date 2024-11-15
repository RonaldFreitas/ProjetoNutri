import React from "react";
import "../styles/EstilosGerais.css";
import Cabecalho from "../components/otherComponents/Cabecalho.jsx"
import Carousel from "../components/homeComponents/Carousel.jsx"
import Quadradinhos from "../components/homeComponents/Quadradinhos.jsx"
import Conheca from "../components/homeComponents/Conheca.jsx"
import Servicos from "../components/homeComponents/Servicos.jsx"
import Variedades from "../components/homeComponents/Variedades.jsx"
import Contato from "../components/homeComponents/Contato.jsx";
import PerguntasFrequentes from "../components/homeComponents/PerguntasFrequentes.jsx"
import Footer from "../components/otherComponents/Footer.jsx"


function Home(){
    return(
        <>
        <Cabecalho/>
        <Carousel/>
        <Quadradinhos/>
        <Conheca/>
        <Servicos/>
        <Variedades/>
        <Contato/>
        <PerguntasFrequentes/>
        <Footer/>
        </>
            
        
    )
};

export default Home;
{/*
                Cabeçalho
                Carousel
                Quadradinhos
                Conheca
                Servicos
                Variedades
                Contato
                Feedback
                PerguntasFrequentes
                Footer
            */}