// src/components/ExamCard.jsx
import '../styles/Exames.css';
const ExamCard = ({ title, description, extraContent, image }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
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
    );
  };
  
  // src/components/Header.jsx
  /*const Header = () => {
    return (
      <header>
        <div className="container">
          <h1>Exames de Nutrição</h1>
        </div>
      </header>
    );
  };
  
  // src/App.jsx
  import { useState } from 'react';
  import './styles/Exames.css';
  import ExamCard from './components/ExamCard';
  import Header from './components/Header';
  
  const App = () => {
    const exams = [
      {
        title: "Exame de Sangue",
        description: "O exame de sangue é um dos procedimentos diagnósticos mais comuns na medicina. Ele consiste na coleta de uma amostra de sangue do paciente, que é analisada em laboratório para detectar uma variedade de condições de saúde, como infecções, anemia, distúrbios hormonais e doenças crônicas. Os exames de sangue podem incluir hemogramas, testes de colesterol, glicose, marcadores de função hepática e renal, entre outros.",
        extraContent: [
          {
            title: "O que é?",
            content: "O exame de sangue é um procedimento médico que envolve a coleta de uma amostra de sangue do paciente, a qual é analisada em laboratório para obter informações sobre a saúde geral do indivíduo e identificar possíveis doenças ou condições. Este tipo de exame é uma ferramenta diagnóstica essencial, pois fornece dados valiosos que podem ajudar os médicos a entender melhor a condição de saúde dos pacientes e a tomar decisões informadas sobre o tratamento."
          },
          {
            title: "Importância do Exame",
            content: `A importância do exame de sangue reside em sua capacidade de fornecer informações valiosas sobre o estado de saúde do paciente. Esses exames permitem: </br> 
            </br>
            <b>Diagnóstico Precoce:</b> Muitos problemas de saúde podem ser identificados antes que os sintomas se manifestem. O diagnóstico precoce aumenta as chances de tratamento eficaz.
            </br>
            <b>Monitoramento de Condições de Saúde:</b> Para pessoas com doenças crônicas, como diabetes ou hipertensão, exames regulares de sangue são essenciais para monitorar a eficácia do tratamento e ajustar as medicações conforme necessário.
            </br>
            <b>Avaliação Geral da Saúde:</b> Exames de sangue podem revelar informações sobre a função de órgãos vitais, como fígado e rins, além de fornecer dados sobre o estado nutricional do paciente.`
          },
          {
            title: "Preparação para o Exame",
            content: `A preparação para um exame de sangue pode variar dependendo do tipo de teste a ser realizado. No entanto, algumas orientações gerais incluem: <br>
            </br>
            <b>Jejum:</b> Para muitos exames, como os de glicose e colesterol, é necessário jejuar por 8 a 12 horas antes da coleta.
            <br>
            <b>Medicamentos:</b> É importante informar ao médico sobre qualquer medicamento que esteja sendo tomado.
            <br>
            <b>Hidratação:</b> Manter-se hidratado é essencial, pois isso facilita a coleta de sangue.
            <br>
            <b>Roupas Confortáveis:</b> Usar roupas que permitam o acesso fácil ao braço.
            <br>
            <b>Evitar Estresse:</b> Tentar relaxar antes do exame pode ajudar a evitar que a ansiedade altere a pressão arterial.`
          }
        ],
        image: {
          src: "imagens/sangue.jpg",
          alt: "Exame de Sangue"
        }
      },
      {
        title: "Avaliação de Gordura Corporal",
        description: "Este exame mede a porcentagem de gordura corporal e ajuda a entender a composição corporal, essencial para personalizar planos de nutrição.",
        extraContent: [
          {
            title: "O que é?",
            content: "A avaliação de gordura corporal é um procedimento utilizado para medir a quantidade de gordura presente no corpo de um indivíduo. Essa avaliação é fundamental para entender a composição corporal, que inclui a relação entre massa magra (músculos, ossos, órgãos) e massa gorda."
          },
          // ... (outros conteúdos similares ao HTML original)
        ],
        image: {
          src: "imagens/Composição-corporal-840x400.jpg",
          alt: "Avaliação de Gordura Corporal"
        }
      },
      // ... (adicionar os outros exames seguindo o mesmo padrão)
    ];
  
    return (
      <>
        <Header />
        <div className="container">
          {exams.map((exam, index) => (
            <ExamCard key={index} {...exam} />
          ))}
        </div>
      </>
    );
  };
  
  export default App;*/