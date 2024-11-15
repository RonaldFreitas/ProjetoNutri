{/*import React, { useState } from "react";
import "../styles/ExamList.css"; // Certifique-se de incluir as transições no CSS.

const ExamList = ({ exams }) => {
  const [visibleContent, setVisibleContent] = useState(null);

  const toggleContent = (id) => {
    setVisibleContent((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      {exams.map((exam, index) => (
        <div key={index} className="exam-item">
          <h3>{exam.title}</h3>
          <p>{exam.description}</p>
          <button onClick={() => toggleContent(index)}>
            {visibleContent === index ? "Esconder Detalhes" : "Ver Detalhes"}
          </button>
          <div
            className={`extra-content ${
              visibleContent === index ? "visible" : ""
            }`}
          >
            {exam.extraContent}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExamList;

ATUALMENTE SENDO INUTILIZADO, COMPONENTE CRIADO PELO CHATGPT

*/}