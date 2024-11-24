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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/receitas" element={<Recipes />} />
        <Route path="/exames" element={<ExamCard />} />
        <Route path="/imc" element={<IMCCalculator />} />
        <Route path="/produtos" element={<ProductPage />} />
        {/*<Route path="/login" element={<LoginPage/>} />
        <Route path="/carrinho" element={<ShoppingCart />} />*/}
      </Routes>
      <Footer />
    </>
  );
}

export default App;