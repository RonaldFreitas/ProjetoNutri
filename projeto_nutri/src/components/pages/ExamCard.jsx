import React, { useState } from 'react';
import '../../styles/ExamCard.css'; // Certifique-se de que o arquivo CSS esteja corretamente importado
import sangue from "../../assets/sangue.jpg";
import ComposicaoCorporal from "../../assets/Composição-corporal-840x400.jpg";
import sanintoleranciague from "../../assets/como-identificar-uma-alergia-alimentar-1591x895.jpeg";
import microbiota from "../../assets/Exame-de-Microbiota-Intestinal-Bio-Check-Up-.jpg";
import Cabecalho from '../otherComponents/Cabecalho.jsx';
import Footer from '../otherComponents/Footer.jsx';

// Componente para cada item de exame
const ExamItem = ({ title, content, extraContent }) => {
  const [isExpanded, setIsExpanded] = useState(false); // Estado para controlar a expansão do conteúdo

  // Função para alternar o estado de expansão
  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
    <Cabecalho />
    <div className="exam">
      <h2>{title}</h2>
      <p>{content}</p>
      {/* Botão de alternância */}
      <button className="btn-more" onClick={toggleContent}>
        {isExpanded ? 'Mostrar Menos' : 'Saiba Mais'}
      </button>
      
      {/* Exibe o conteúdo expandido se isExpanded for true */}
      {isExpanded && (
        <div className="extra-content">
          {/* Conteúdo extra passado como argumento */}
          {extraContent}
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
};

// Componente principal para exibir todos os exames
const ExamCard = () => {
  const exams = [
    {
      title: 'Exame de Sangue',
      content:
        'O exame de sangue é um dos procedimentos diagnósticos mais comuns na medicina. Ele consiste na coleta de uma amostra de sangue do paciente, que é analisada em laboratório para detectar uma variedade de condições de saúde, como infecções, anemia, distúrbios hormonais e doenças crônicas.',
      extraContent: (
        <>
          <h2>O que é?</h2>
          <p>
            O exame de sangue é um procedimento médico que envolve a coleta de uma amostra de sangue do paciente, a qual é analisada em laboratório para obter informações sobre a saúde geral do indivíduo e identificar possíveis doenças ou condições. Este tipo de exame é uma ferramenta diagnóstica essencial, pois fornece dados valiosos que podem ajudar os médicos a entender melhor a condição de saúde dos pacientes e a tomar decisões informadas sobre o tratamento.
          </p>
          
          <h2>Importância do Exame</h2>
          <p>
            A importância do exame de sangue reside em sua capacidade de fornecer informações valiosas sobre o estado de saúde do paciente. Esses exames permitem:
            <br />
            <b>Diagnóstico Precoce:</b> Muitos problemas de saúde podem ser identificados antes que os sintomas se manifestem. O diagnóstico precoce aumenta as chances de tratamento eficaz.
            <br />
            <b>Monitoramento de Condições de Saúde:</b> Para pessoas com doenças crônicas, como diabetes ou hipertensão, exames regulares de sangue são essenciais para monitorar a eficácia do tratamento e ajustar as medicações conforme necessário.
            <br />
            <b>Avaliação Geral da Saúde:</b> Exames de sangue podem revelar informações sobre a função de órgãos vitais, como fígado e rins, além de fornecer dados sobre o estado nutricional do paciente.
          </p>
          
          <h2>Preparação para o Exame</h2>
          <p>
            A preparação para um exame de sangue pode variar dependendo do tipo de teste a ser realizado. No entanto, algumas orientações gerais incluem:
            <br />
            <b>Jejum:</b> Para muitos exames, como os de glicose e colesterol, é necessário jejuar por 8 a 12 horas antes da coleta. Isso significa que o paciente deve evitar alimentos e bebidas, exceto água, nesse período.
            <br />
            <b>Medicamentos:</b> É importante informar ao médico sobre qualquer medicamento que esteja sendo tomado, pois alguns podem interferir nos resultados. O médico pode aconselhar sobre a necessidade de interromper temporariamente certos medicamentos.
            <br />
            <b>Hidratação:</b> Manter-se hidratado é essencial, pois isso facilita a coleta de sangue. Recomenda-se beber água antes do exame, a menos que o médico oriente o contrário.
            <br />
            <b>Roupas Confortáveis:</b> Usar roupas que permitam o acesso fácil ao braço, onde a amostra de sangue será coletada, pode ajudar a tornar o processo mais confortável.
            <br />
            <b>Evitar Estresse:</b> Tentar relaxar antes do exame pode ajudar a evitar que a ansiedade altere a pressão arterial e a frequência cardíaca, proporcionando uma coleta de sangue mais tranquila.
          </p>
          
          {/* Adicionando a imagem */}
          <img 
            src={sangue}
            alt="Exame de Sangue" 
            className="img"
          />
        </>
      )
    },
    {
      title: 'Avaliação de Gordura Corporal',
      content:
        'Este exame mede a porcentagem de gordura corporal e ajuda a entender a composição corporal, essencial para personalizar planos de nutrição.',
      extraContent: (
        <>
          <h2>O que é?</h2>
          <p>
            A avaliação de gordura corporal é um procedimento utilizado para medir a quantidade de gordura presente no corpo de um indivíduo. Essa avaliação é fundamental para entender a composição corporal, que inclui a relação entre massa magra (músculos, ossos, órgãos) e massa gorda. A determinação da gordura corporal não apenas fornece informações sobre a saúde geral do paciente, mas também é essencial para o planejamento de intervenções nutricionais e de atividades físicas.
          </p>
          
          <h2>Importância do Exame</h2>
          <p>
            A avaliação da gordura corporal é importante por várias razões:
            <br />
            <b>Saúde Geral:</b> A quantidade de gordura corporal está relacionada a vários aspectos da saúde, como risco de doenças crônicas (diabetes, hipertensão, doenças cardiovasculares). Um percentual elevado de gordura corporal, especialmente a gordura abdominal, pode indicar um maior risco para essas condições.
            <br />
            <b>Avaliação do Estado Nutricional:</b> Conhecer a composição corporal ajuda os profissionais de saúde a entender se um paciente está com sobrepeso, obesidade, desnutrição ou em um estado saudável. Isso é fundamental para desenvolver planos alimentares adequados.
            <br />
            <b>Acompanhamento de Resultados:</b> Para indivíduos que buscam emagrecimento ou ganho de massa muscular, a avaliação de gordura corporal fornece dados objetivos sobre a eficácia de intervenções nutricionais e programas de exercícios.
            <br />
            <b>Performance Física:</b> Para atletas, a composição corporal é um indicador importante de desempenho. A avaliação da gordura corporal ajuda a ajustar treinos e dietas para otimizar o desempenho.
          </p>
          
          <h2>Métodos de Avaliação</h2>
          <p>
            Existem diversos métodos para avaliar a gordura corporal, cada um com suas vantagens e desvantagens:
            <br />
            <b>Adipometria:</b> Utiliza um compasso de dobras cutâneas para medir a espessura das camadas de gordura em várias partes do corpo. Os resultados são utilizados para estimar a porcentagem total de gordura corporal.
            <br />
            <b>Bioimpedância Elétrica (BIA):</b> Um dispositivo emite uma corrente elétrica de baixa intensidade através do corpo. A resistência à passagem da corrente varia entre os tecidos, permitindo estimar a porcentagem de gordura, músculo e água corporal.
            <br />
            <b>Densitometria por Dispersão de Raios-X (DEXA):</b> Um exame que utiliza raios-X de baixa dose para avaliar a composição corporal, incluindo a quantidade de gordura, músculo e densidade óssea. É considerado um dos métodos mais precisos, mas pode ser mais caro e menos acessível.
            <br />
            <b>Pesagem Hidrostática:</b> Também conhecida como pesagem subaquática, mede a densidade corporal submersa para determinar a porcentagem de gordura. Embora seja um método preciso, pode ser difícil de realizar em ambientes clínicos.
            <br />
            <b>Tomografia Computadorizada (TC) e Ressonância Magnética (RM):</b> Esses métodos de imagem são extremamente precisos na avaliação da gordura corporal e são usados principalmente em pesquisa clínica devido ao seu custo elevado.
          </p>
          
          <img 
            src={ComposicaoCorporal}
            alt="Avaliação de Gordura Corporal" 
            className="img" 
          />
        </>
      )
    },
    {
      title: 'Teste de Intolerância Alimentar',
      content:
        'Este teste identifica reações adversas a determinados alimentos, ajudando a evitar alimentos que possam causar desconforto ou problemas de saúde.',
      extraContent: (
        <>
          <h2>O que é?</h2>
          <p>
            A intolerância alimentar é uma condição que afeta muitas pessoas, causando desconfortos e reações adversas após a ingestão de certos alimentos. Diferente das alergias alimentares, que envolvem o sistema imunológico, a intolerância geralmente está relacionada à incapacidade do organismo de digerir ou processar determinados componentes alimentares, como lactose, glúten ou certos aditivos alimentares. O teste de intolerância alimentar ajuda a identificar quais alimentos estão causando essas reações no corpo.
          </p>
          
          <h2>Importância do Exame</h2>
          <p>
            Identificar a intolerância alimentar é importante para evitar sintomas desagradáveis, como dores abdominais, inchaço, diarreia e até mesmo problemas mais graves a longo prazo. Os testes de intolerância alimentar podem ajudar a:
            <br />
            <b>Aliviar Sintomas:</b> Ao identificar os alimentos causadores de desconforto, o paciente pode evitá-los, melhorando a qualidade de vida.
            <br />
            <b>Prevenir Problemas Digestivos:</b> A intolerância alimentar não tratada pode levar a problemas digestivos mais sérios, como síndrome do intestino irritável (SII).
            <br />
            <b>Otimize a Nutrição:</b> O exame pode ajudar a ajustar a dieta, garantindo que o paciente tenha uma alimentação equilibrada, sem a presença de alimentos que possam causar danos.
          </p>

          <h2>Métodos Comuns para Diagnóstico</h2>
          <p>
            Alguns dos testes mais comuns incluem:
            <br />
            <b>Teste de Sensibilidade Alimentar:</b> Realizado por meio de exames de sangue ou, em alguns casos, através de outras técnicas como o teste de 'provocação', onde o paciente ingere o alimento suspeito e observa os sintomas.
            <br />
            <b>Testes de Eliminação:</b> Este é um método comum no diagnóstico de intolerâncias alimentares. O paciente elimina certos alimentos da dieta e, em seguida, os reintroduz, monitorando os sintomas que ocorrem durante o processo.
          </p>
          
          <img 
            src={sanintoleranciague}
            alt="Teste de Intolerância Alimentar" 
            className="img"
          />
        </>
      )
    },
    {
      title: 'Exame de Microbiota',
      content:
        'Este exame avalia a saúde intestinal por meio da análise das bactérias que habitam o trato digestivo, ajudando a identificar desequilíbrios e a promover o bem-estar.',
      extraContent: (
        <>
          <h2>O que é?</h2>
          <p>
            O exame de microbiota intestinal, também conhecido como análise de microbioma, estuda a composição das bactérias presentes no trato digestivo de um indivíduo. Essas bactérias desempenham um papel crucial na digestão, no sistema imunológico e na saúde geral do corpo. O exame ajuda a identificar desequilíbrios na microbiota intestinal que podem estar associados a várias condições de saúde, como problemas digestivos, obesidade, diabetes e doenças inflamatórias.
          </p>
          
          <h2>Importância do Exame</h2>
          <p>
            A microbiota intestinal tem um impacto direto na saúde geral e no bem-estar do indivíduo. O exame de microbiota pode ser essencial para:
            <br />
            <b>Diagnóstico de Problemas Digestivos:</b> Identificar desequilíbrios na flora intestinal pode ajudar no diagnóstico de condições como síndrome do intestino irritável (SII), intolerâncias alimentares e doenças inflamatórias intestinais.
            <br />
            <b>Saúde Imunológica:</b> A microbiota intestinal desempenha um papel importante no sistema imunológico. Um desequilíbrio pode contribuir para o desenvolvimento de doenças autoimunes e inflamatórias.
            <br />
            <b>Prevenção e Tratamento de Doenças:</b> A análise da microbiota ajuda a criar estratégias personalizadas para a prevenção e tratamento de doenças relacionadas ao desequilíbrio bacteriano, como diabetes e obesidade.
          </p>

          <h2>Como o Exame é Realizado</h2>
          <p>
            O exame de microbiota intestinal é realizado por meio da coleta de uma amostra de fezes, que é analisada em laboratório para identificar a diversidade e quantidade das bactérias presentes. A partir dos resultados, é possível identificar se existe algum desequilíbrio, como o crescimento excessivo de bactérias patogênicas ou a falta de bactérias benéficas.
          </p>
          
          <img 
            src={microbiota} 
            alt="Exame de Microbiota" 
            className="img" 
          />
        </>
      )
    }
  ];

  return (
    <div className="exam-card">
      <h1>Exames e Avaliações</h1>
      {exams.map((exam, index) => (
        <ExamItem 
          key={index} 
          title={exam.title} 
          content={exam.content} 
          extraContent={exam.extraContent} 
        />
      ))}
    </div>
  );
};

export default ExamCard;