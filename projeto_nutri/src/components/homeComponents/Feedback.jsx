import React from "react";
import "../styles/EstilosGerais";

{/* 
    Arrumar o src

    */}

function Feedback(){
    return(
        <section id="comentarios" class="container mt-5 fade-in">
        <h2 class="text-center mb-4">O que nossos clientes dizem</h2>
        
        {/*<!-- Primeiro comentário -->*/}
        <div class="media mb-4 comentario-item">
            <img src="src/assets/Laryssa Savior.png" class="mr-3 rounded-circle img-fluid cliente-img" alt="Cliente 1"/>
            <div class="media-body">
                <h5 class="mt-0 cliente-nome">Laryssa Savior</h5>
                <p class="text-warning estrelas">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </p>
                <p class="comentario-texto">
                    "Fiquei impressionada com os resultados que alcancei após o acompanhamento nutricional! O plano alimentar foi completamente personalizado e consegui mudar meus hábitos de forma definitiva. Recomendo muito!"
                </p>
            </div>
        </div>
        
        {/*<!-- Segundo comentário -->*/}
        <div class="media mb-4 comentario-item">
            <img src="src/assets/luis.jpg" class="mr-3 rounded-circle img-fluid cliente-img" alt="Cliente 2"/>
            <div class="media-body">
                <h5 class="mt-0 cliente-nome">Luis Felipe</h5>
                <p class="text-warning estrelas">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </p>
                <p class="comentario-texto">
                    "Excelente profissional! Além de um atendimento atencioso, o plano alimentar era muito bem balanceado e ajustado às minhas necessidades. Melhorei meu desempenho esportivo e minha saúde geral."
                </p>
            </div>
        </div>
        
        {/*<!-- Terceiro comentário -->*/}
        <div class="media mb-4 comentario-item">
            <img src="src/assets/cauo.jpg" class="mr-3 rounded-circle img-fluid cliente-img" alt="Cliente 3"/>
            <div class="media-body">
                <h5 class="mt-0 cliente-nome">Caio Barbosa</h5>
                <p class="text-warning estrelas">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </p>
                <p class="comentario-texto">
                    "O acompanhamento nutricional foi essencial para alcançar meus objetivos de saúde e bem-estar. A dedicação e o conhecimento do nutricionista fizeram toda a diferença no meu progresso!"
                </p>
            </div>
        </div>
    </section>
    );
}

export default Feedback;