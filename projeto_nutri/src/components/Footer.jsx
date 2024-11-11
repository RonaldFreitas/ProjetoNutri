import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4">
            <h5>Sobre Nós</h5>
            <p>Somos uma equipe dedicada à saúde e bem-estar, oferecendo serviços personalizados.</p>
            <p>Nossa missão é ajudar você a alcançar seus objetivos de forma saudável.</p>
          </div>
          {/* ... outras seções ... */}
        </div>
        <p>&copy; 2024 <i>Centro Nutricional.</i> Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;