import Home from './src/components/pages/Home.jsx';
import Recipes from './src/components/pages/Recipes.jsx';
import ExamCard from './src/components/pages/ExamCard.jsx'
import Cabecalho from './src/components/otherComponents/Cabecalho.jsx';
import IMCCalculator from './src/components/pages/IMCCalculator.jsx'
import LoginPage from './src/components/pages/LoginPage.jsx'
import ProductPage from './src/components/pages/ProductPage.jsx'
import ShoppingCart from './src/components/pages/ShoppingCart.jsx'
import './src/styles/EstilosGerais.css'
import './src/styles/Cabecalho.css'
import 'bootstrap/dist/css/bootstrap.min.css';

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