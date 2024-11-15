import React from 'react';
import '../../styles/Footer.css';

const Footer = () => {
  return (
    <footer>
    <div class="container text-center">
        <div class="row">
            {/* Seção Sobre Nós */}
            <div class="col-md-4">
                <h5>Sobre Nós</h5>
                <p>Somos uma equipe dedicada à saúde e bem-estar, oferecendo serviços personalizados.</p>
                <p>Nossa missão é ajudar você a alcançar seus objetivos de forma saudável.</p>
            </div>
            {/*Seção Serviços*/}
            <div class="col-md-4">
                <h5>Serviços</h5>
                <ul>
                    <li>Avaliação Nutricional</li>
                    <li>Planejamento de Dietas Personalizadas</li>
                    <li>Consultas de Acompanhamento</li>
                    <li>Orientação em Atividade Física</li>
                </ul>
            </div>
            {/* Seção Contato*/}
            <div class="col-md-4">
                <h5>Contato</h5>
                <p>Email: contato@nutricionista.com</p>
                <p>Telefone: (11) 98765-4321</p>
                <p>Endereço: Rua Exemplo, 123 - São Paulo, SP</p>
                <div class="social-icons">
                    <a href="https://www.facebook.com" target="_blank"><i class="fab fa-facebook"></i></a>
                    <a href="https://www.instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
                    <a href="https://x.com" target="_blank"><i class="fab fa-x"></i></a>{/* Ícone atualizado para o X*/}
                </div>
            </div>
        </div>

        <p>&copy; 2024 <i>Centro Nutricional.</i> Todos os direitos reservados.</p>
    </div>
</footer>
  );
};

export default Footer;