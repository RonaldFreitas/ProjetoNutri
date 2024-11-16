import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Inclui Popper.js automaticamente
import './styles/EstilosGerais.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
