import Home from './src/components/pages/Home.jsx';
import Recipes from './src/components/pages/Recipes.jsx';
import ExamCard from './src/components/pages/ExamCard.jsx'
import IMCCalculator from './src/components/pages/IMCCalculator.jsx'
import ProductPage from './src/components/pages/ProductPage.jsx'
import ShoppingCart from './src/components/pages/ShoppingCart.jsx'
import Bolo from './src/components/pages/bolo.jsx';
import Salada from './src/components/pages/Salada.jsx';
import Smoothie from './src/components/pages/Smoothie.jsx';
import Signin from './src/components/pages/Signin.jsx';
import Signup from './src/components/pages/Signup.jsx';
//import './src/styles/EstilosGerais.css'
import './src/styles/Cabecalho.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from 'react-router-dom';

const Private = ({ Item }) => {
  const signed = false;

  return signed > 0 ? <Item /> : <Signin/>;
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/receitas" element={<Recipes />} />
        <Route path="/exames" element={<ExamCard />} />
        <Route path="/imc" element={<IMCCalculator />} />
        <Route path="/produtos" element={<ProductPage />} />
        <Route path="/carrinho" element={<ShoppingCart />} />
        <Route path="/salada" element={<Salada />} />
        <Route path="/smoothie" element={<Smoothie />} />
        <Route path="/bolo" element={<Bolo />} />
      </Routes>
    </>
  );
}

export default App;