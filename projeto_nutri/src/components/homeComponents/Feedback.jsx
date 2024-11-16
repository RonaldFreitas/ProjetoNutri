import React from "react";
import "../styles/EstilosGerais";

{/* 
    Arrumar o src

    */}

function Feedback(){
    return(
        <section id="comentarios" className="container mt-5 fade-in">
        <h2 className="text-center mb-4">O que nossos clientes dizem</h2>
        
        {/*<!-- Primeiro comentário -->*/}
        <div className="media mb-4 comentario-item">
            <img src="src/assets/Laryssa Savior.png" className="mr-3 rounded-circle img-fluid cliente-img" alt="Cliente 1"/>
            <div className="media-body">
                <h5 className="mt-0 cliente-nome">Laryssa Savior</h5>
                <p className="text-warning estrelas">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </p>
                <p className="comentario-texto">
                    "Fiquei impressionada com os resultados que alcancei após o acompanhamento nutricional! O plano alimentar foi completamente personalizado e consegui mudar meus hábitos de forma definitiva. Recomendo muito!"
                </p>
            </div>
        </div>
        
        {/*<!-- Segundo comentário -->*/}
        <div className="media mb-4 comentario-item">
            <img src="src/assets/luis.jpg" className="mr-3 rounded-circle img-fluid cliente-img" alt="Cliente 2"/>
            <div className="media-body">
                <h5 className="mt-0 cliente-nome">Luis Felipe</h5>
                <p className="text-warning estrelas">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </p>
                <p className="comentario-texto">
                    "Excelente profissional! Além de um atendimento atencioso, o plano alimentar era muito bem balanceado e ajustado às minhas necessidades. Melhorei meu desempenho esportivo e minha saúde geral."
                </p>
            </div>
        </div>
        
        {/*<!-- Terceiro comentário -->*/}
        <div className="media mb-4 comentario-item">
            <img src="src/assets/cauo.jpg" className="mr-3 rounded-circle img-fluid cliente-img" alt="Cliente 3"/>
            <div className="media-body">
                <h5 className="mt-0 cliente-nome">Caio Barbosa</h5>
                <p className="text-warning estrelas">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </p>
                <p className="comentario-texto">
                    "O acompanhamento nutricional foi essencial para alcançar meus objetivos de saúde e bem-estar. A dedicação e o conhecimento do nutricionista fizeram toda a diferença no meu progresso!"
                </p>
            </div>
        </div>
    </section>
    );
}

export default Feedback;