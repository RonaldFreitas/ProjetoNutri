import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import "../../styles/PerguntasFrequentes.css"; // Importa o arquivo de estilos

function PerguntasFrequentes() {
  return (
    <Accordion defaultActiveKey="0" className="faq-accordion"> {/* Adiciona a classe CSS aqui */}
      <Accordion.Item eventKey="0">
        <Accordion.Header>1. O que é uma dieta balanceada?</Accordion.Header>
        <Accordion.Body>
          Uma dieta balanceada é aquela que inclui uma variedade de alimentos em proporções adequadas
          para fornecer os nutrientes necessários ao corpo.
          Ela inclui proteínas, carboidratos, gorduras saudáveis, vitaminas e minerais.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>2. Qual a importância da hidratação para o corpo?</Accordion.Header>
        <Accordion.Body>
          A hidratação adequada é essencial para o funcionamento de todas as células e órgãos do corpo.
          Ela auxilia na regulação da temperatura corporal,
          transporte de nutrientes e remoção de resíduos.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>3. Comer carboidratos à noite engorda?</Accordion.Header>
        <Accordion.Body>
          Não é necessariamente o horário em que você consome carboidratos que leva ao ganho de peso,
          mas sim o excesso de calorias consumidas durante o dia. Carboidratos podem ser consumidos à noite com moderação.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>4. Como posso saber qual é a quantidade ideal de calorias que devo consumir por dia?</Accordion.Header>
        <Accordion.Body>
          A quantidade de calorias que você deve consumir depende de fatores como idade,
          sexo, peso, altura e nível de atividade física. Um nutricionista pode ajudar a calcular sua necessidade calórica diária.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>5. Qual a diferença entre alimentos integrais e refinados?</Accordion.Header>
        <Accordion.Body>
          Alimentos integrais são aqueles que não passaram por processos de refinação e, portanto, preservam suas fibras e nutrientes. Já os alimentos refinados perdem parte das fibras e nutrientes no processo de industrialização.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default PerguntasFrequentes;