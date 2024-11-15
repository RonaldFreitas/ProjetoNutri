import React from "react";
import "../../styles/EstilosGerais.css";

function PerguntasFrequentes() {
    return (
        <div>
            <br/><br/>
            <h1>Perguntas Frequentes</h1>

            <div class="faq-container fade-in">
                <div class="faq-item">
                    <h2>1. O que é uma dieta balanceada?</h2>
                    <p>Uma dieta balanceada é aquela que inclui uma variedade de alimentos em proporções adequadas para fornecer os nutrientes necessários ao corpo. Ela inclui proteínas, carboidratos, gorduras saudáveis, vitaminas e minerais.</p>
                </div>

                <div class="faq-item">
                    <h2>2. Qual a importância da hidratação para o corpo?</h2>
                    <p>A hidratação adequada é essencial para o funcionamento de todas as células e órgãos do corpo. Ela auxilia na regulação da temperatura corporal, transporte de nutrientes e remoção de resíduos.</p>
                </div>

                <div class="faq-item">
                    <h2>3. Comer carboidratos à noite engorda?</h2>
                    <p>Não é necessariamente o horário em que você consome carboidratos que leva ao ganho de peso, mas sim o excesso de calorias consumidas durante o dia. Carboidratos podem ser consumidos à noite com moderação.</p>
                </div>

                <div class="faq-item">
                    <h2>4. Como posso saber qual é a quantidade ideal de calorias que devo consumir por dia?</h2>
                    <p>A quantidade de calorias que você deve consumir depende de fatores como idade, sexo, peso, altura e nível de atividade física. Um nutricionista pode ajudar a calcular sua necessidade calórica diária.</p>
                </div>

                <div class="faq-item">
                    <h2>5. Qual a diferença entre alimentos integrais e refinados?</h2>
                    <p>Alimentos integrais são aqueles que não passaram por processos de refinação e, portanto, preservam suas fibras e nutrientes. Já os alimentos refinados perdem parte das fibras e nutrientes no processo de industrialização.</p>
                </div>
            </div>

        </div>
    );
}

export default PerguntasFrequentes;