import React, { useState } from 'react';

const ExamItem = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="exam">
      <h2>{title}</h2>
      <p>{content}</p>
      <button className="btn-more" onClick={toggleContent}>
        Saiba Mais
      </button>
      {isExpanded && (
        <div className="extra-content" style={{ display: 'block', opacity: 1 }}>
          {/* Render the expanded content here */}
        </div>
      )}
    </div>
  );
};

const ExamCard = () => {
  const exams = [
    {
      title: 'Exame de Sangue',
      content:
        'O exame de sangue é um dos procedimentos diagnósticos mais comuns na medicina. Ele consiste na coleta de uma amostra de sangue do paciente, que é analisada em laboratório para detectar uma variedade de condições de saúde, como infecções, anemia, distúrbios hormonais e doenças crônicas.'
    },
    {
      title: 'Avaliação de Gordura Corporal',
      content:
        'Este exame mede a porcentagem de gordura corporal e ajuda a entender a composição corporal, essencial para personalizar planos de nutrição.'
    },
    {
      title: 'Teste de Intolerância Alimentar',
      content:
        'Este teste identifica reações adversas a determinados alimentos, ajudando a evitar alimentos que possam causar desconforto ou problemas de saúde.'
    },
    {
      title: 'Análise de Microbiota',
      content:
        'A análise da microbiota intestinal fornece informações sobre a saúde digestiva e como ela pode afetar o estado nutricional do paciente.'
    }
  ];

  return (
    <div className="container">
      {exams.map((exam, index) => (
        <ExamItem key={index} title={exam.title} content={exam.content} />
      ))}
    </div>
  );
};

export default ExamCard;


{/*import React, { useState } from "react";
import ExamList from "./ExamList";
import "../styles/Exames.css";

const ExamCard = ({ exam, isVisible, onToggle }) => {
  const exams = [
    {
      title: "Exame de Sangue",
      description:
        "O exame de sangue é um dos procedimentos diagnósticos mais comuns na medicina...",
      extraContent: (
        <>
          <h2>O que é?</h2>
          <p>
            O exame de sangue é um procedimento médico que envolve a coleta de
            uma amostra...
          </p>
          <h2>Importância do Exame</h2>
          <p>
            A importância do exame de sangue reside em sua capacidade de
            fornecer informações...
          </p>
        </>
      ),
      imgSrc: "/src/assets/sangue.jpg",
      imgAlt: "Exame de Sangue",
    },
    {
      title: "Avaliação de Gordura Corporal",
      description:
        "Este exame mede a porcentagem de gordura corporal e ajuda a entender a composição...",
      extraContent: (
        <>
          <h2>O que é?</h2>
          <p>
            A avaliação de gordura corporal é um procedimento utilizado para
            medir a quantidade de gordura presente...
          </p>
        </>
      ),
      imgSrc: "/src/assets/Composição-corporal-840x400.jpg",
      imgAlt: "Avaliação de Gordura Corporal",
    },
    // Outros exames...
    {
      title: "Exame de Glicemia",
      description:
        "O exame de glicemia é usado para medir os níveis de açúcar no sangue...",
      extraContent: (
        <>
          <h2>Finalidade</h2>
          <p>
            Este exame é fundamental para o diagnóstico de diabetes e outras
            condições relacionadas ao metabolismo da glicose.
          </p>
          <h2>Procedimento</h2>
          <p>
            O exame de glicemia é realizado a partir de uma amostra de sangue,
            geralmente coletada em jejum.
          </p>
        </>
      ),
      imgSrc: "/src/assets/glicemia.jpg",
      imgAlt: "Exame de Glicemia",
    },
    {
      title: "Exame de Colesterol",
      description:
        "Avalia os níveis de colesterol no sangue, incluindo o LDL e o HDL...",
      extraContent: (
        <>
          <h2>Importância</h2>
          <p>
            Este exame ajuda a determinar o risco de doenças cardiovasculares.
          </p>
          <h2>Fatores Considerados</h2>
          <p>
            O exame inclui a avaliação do colesterol total, LDL (colesterol ruim),
            HDL (colesterol bom) e triglicerídeos.
          </p>
        </>
      ),
      imgSrc: "/src/assets/colesterol.jpg",
      imgAlt: "Exame de Colesterol",
    },
    {
      title: "Teste de Intolerância Alimentar",
      description:
        "Identifica possíveis intolerâncias alimentares baseadas na reação do organismo a certos alimentos...",
      extraContent: (
        <>
          <h2>Benefícios</h2>
          <p>
            O teste ajuda a identificar alimentos que podem causar desconfortos,
            como inchaço e alergias leves.
          </p>
          <h2>Processo</h2>
          <p>
            O exame é feito por meio de amostras de sangue ou testes cutâneos.
          </p>
        </>
      ),
      imgSrc: "/src/assets/intolerancia.jpg",
      imgAlt: "Teste de Intolerância Alimentar",
    },
  ];

  const toggleExam = (index) => {
    setActiveExam((prev) => (prev === index ? null : index));
  };

  return (
    <div className="container">
      <header>
        <h1>Exames de Nutrição</h1>
      </header>
      {exams.map((exam, index) => (
        <div key={index} className="exam">
          <h2>{exam.title}</h2>
          <p>{exam.description}</p>
          <button
            className="btn-more"
            onClick={() => toggleExam(index)}
          >
            {activeExam === index ? "Fechar" : "Saiba Mais"}
          </button>
          {activeExam === index && (
            <div className="extra-content">
              {exam.extraContent}
              <img
                src={exam.imgSrc}
                alt={exam.imgAlt}
                className="img-responsive"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );


export default ExamCard;

-------------------------------------------------------------------------------------------------------------------------------------------------

  import '../styles/Exames.css';
const ExamCard = ({ title, description, extraContent, image }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      
        IA que fez
        <div className="exam">
        <h2>{title}</h2>
        <p>{description}</p>
        <button className="btn-more" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Mostrar Menos' : 'Saiba Mais'}
        </button>
        {isOpen && (
          <div className="extra-content">
            {extraContent.map((section, index) => (
              <div key={index}>
                <h2>{section.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: section.content }} />
              </div>
            ))}
            {image && (
              <img src={image.src} alt={image.alt} className="img-responsive" />
            )}
          </div>
        )}
      </div>

      


      )
    }

export default ExamCard;*/}