// src/components/IMCCalculator.jsx
import { useState } from 'react';
import '../../styles/IMCCalculator.css';


const IMCCalculator = () => {
  const [formData, setFormData] = useState({
    sexo: 'masculino',
    idade: '',
    altura: '',
    peso: ''
  });

  const [resultado, setResultado] = useState(null);
  const [recomendacao, setRecomendacao] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calcularIMC = (e) => {
    e.preventDefault();
    
    // Converte altura de cm para metros
    const alturaMetros = Number(formData.altura) / 100;
    const peso = Number(formData.peso);
    
    if (alturaMetros <= 0 || peso <= 0) {
      alert('Por favor, insira valores válidos');
      return;
    }

    const imc = peso / (alturaMetros * alturaMetros);
    
    let categoria = '';
    let recomendacaoTexto = '';

    if (imc < 18.5) {
      categoria = 'Abaixo do peso';
      recomendacaoTexto = 'Recomendação: Procure um nutricionista para desenvolver um plano de ganho de peso saudável.';
    } else if (imc < 24.9) {
      categoria = 'Peso normal';
      recomendacaoTexto = 'Recomendação: Continue mantendo hábitos saudáveis de alimentação e exercícios.';
    } else if (imc < 29.9) {
      categoria = 'Sobrepeso';
      recomendacaoTexto = 'Recomendação: Considere aumentar a atividade física e ajustar sua dieta.';
    } else if (imc < 34.9) {
      categoria = 'Obesidade grau 1';
      recomendacaoTexto = 'Recomendação: Procure orientação profissional para desenvolver um plano de emagrecimento.';
    } else if (imc < 39.9) {
      categoria = 'Obesidade grau 2';
      recomendacaoTexto = 'Recomendação: É importante buscar acompanhamento médico e nutricional.';
    } else {
      categoria = 'Obesidade grau 3';
      recomendacaoTexto = 'Recomendação: Procure atendimento médico especializado com urgência.';
    }

    setResultado({
      imc: imc.toFixed(1),
      categoria
    });
    setRecomendacao(recomendacaoTexto);
  };

  return (
    <>

      <div className="centralizar">
        <section id="calculo-imc">
          <h2>Cálculo de IMC</h2>
          
          <form onSubmit={calcularIMC}>
            <div className="form-group">
              <label htmlFor="sexo">Sexo:</label>
              <select
                id="sexo"
                name="sexo"
                value={formData.sexo}
                onChange={handleInputChange}
              >
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="idade">Idade:</label>
              <input
                type="number"
                id="idade"
                name="idade"
                value={formData.idade}
                onChange={handleInputChange}
                required
                min="0"
              />
            </div>

            <div className="form-group">
              <label htmlFor="altura">Altura (cm):</label>
              <input
                type="number"
                id="altura"
                name="altura"
                value={formData.altura}
                onChange={handleInputChange}
                required
                min="0"
              />
            </div>

            <div className="form-group">
              <label htmlFor="peso">Peso (kg):</label>
              <input
                type="number"
                id="peso"
                name="peso"
                value={formData.peso}
                onChange={handleInputChange}
                required
                min="0"
                step="0.1"
              />
            </div>

            <button type="submit">Calcular IMC</button>
          </form>

          {resultado && (
            <div className="resultado-imc animacao-imc">
              <h3>Seu IMC é: {resultado.imc}</h3>
              <p>Classificação: {resultado.categoria}</p>
            </div>
          )}
          
          {recomendacao && (
            <div className="recomendacao">
              <p>{recomendacao}</p>
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default IMCCalculator;