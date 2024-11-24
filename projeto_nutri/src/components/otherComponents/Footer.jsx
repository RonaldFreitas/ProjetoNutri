import React from 'react';
import '../../styles/Footer.css';

const Footer = () => {
    return (
        <footer>
            <div>
                <div className="row">
                    {/* Seção Sobre Nós */}
                    <div className="col-md-4">
                        <ul>
                            <h5>Sobre Nós</h5>
                            <li>Somos uma equipe dedicada à saúde e bem-estar, oferecendo serviços personalizados.</li>
                            <li>Nossa missão é ajudar você a alcançar seus objetivos de forma saudável.</li>
                        </ul>
                    </div>
                    {/*Seção Serviços*/}
                    <div className="col-md-4">
                        <h5>Serviços</h5>
                        <ul>
                            <li>Avaliação Nutricional</li>
                            <li>Planejamento de Dietas Personalizadas</li>
                            <li>Consultas de Acompanhamento</li>
                            <li>Orientação em Atividade Física</li>
                        </ul>
                    </div>
                    {/* Seção Contato*/}
                    <div className="col-md-4">
                        <ul>
                            <h5>Contato</h5>
                            <li>Email: contato@nutricionista.com</li>
                            <li>Telefone: (11) 98765-4321</li>
                            <li>Endereço: Rua Exemplo, 123 - São Paulo, SP</li>
                        </ul>
                        <div className="social-icons">
                            <a href="https://www.facebook.com" target="_blank"><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com" target="_blank"><i className="fab fa-instagram"></i></a>
                            <a href="https://x.com" target="_blank"><i className="fab fa-x"></i></a>{/* Ícone atualizado para o X*/}
                        </div>
                    </div>
                </div>

                <p>&copy; 2024 <i>Centro Nutricional.</i> Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;