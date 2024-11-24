import Home from './src/components/pages/Home.jsx';
//import 'bootstrap/dist/css/bootstrap.min.css'; não ta funcionando
import Recipes from './src/components/pages/Recipes.jsx';
import ExamCard from './src/components/pages/ExamCard.jsx'
import Cabecalho from './src/components/otherComponents/Cabecalho.jsx';
import IMCCalculator from './src/components/pages/IMCCalculator.jsx'
import LoginPage from './src/components/pages/LoginPage.jsx'
import ProductPage from './src/components/pages/ProductPage.jsx'
import ShoppingCart from './src/components/pages/ShoppingCart.jsx'
import './src/styles/EstilosGerais.css'
import './src/styles/Cabecalho.css'

import Carousel from "./src/components/homeComponents/Carousel.jsx"
import Quadradinhos from "./src/components/homeComponents/Quadradinhos.jsx"
import Conheca from "./src/components/homeComponents/Conheca.jsx"
import Servicos from "./src/components/homeComponents/Servicos.jsx"
import Variedades from "./src/components/homeComponents/Variedades.jsx"
import Contato from "./src/components/homeComponents/Contato.jsx";
import PerguntasFrequentes from "./src/components/homeComponents/PerguntasFrequentes.jsx"
import Footer from "./src/components/otherComponents/Footer.jsx"
import { Routes, Route } from 'react-router-dom';

function App() {
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
      <Footer />

      <ExamCard />
      <IMCCalculator />
      {/*<LoginPage/> nao ta funcionando */}
      <ProductPage />
      <Recipes />
      <ShoppingCart />

    </>
  );
}

export default App;