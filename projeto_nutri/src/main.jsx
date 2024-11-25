import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './components/contexts/CartContext.jsx';

import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Inclui Popper.js automaticamente
import './styles/EstilosGerais.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
