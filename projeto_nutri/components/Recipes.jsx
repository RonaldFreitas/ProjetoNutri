import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Recipes.css';

const recipesData = [
  {
    id: 1,
    title: 'Salada de Quinoa',
    description: 'Uma deliciosa e nutritiva salada de quinoa com vegetais frescos e temperos.',
    image: '/imagens/salade.png',
    link: '/receitas/receita1'
  },
  {
    id: 2,
    title: 'Smoothie Verde',
    description: 'Um smoothie refrescante e cheio de nutrientes, perfeito para começar o dia.',
    image: '/imagens/suce.jpeg',
    link: '/receitas/receita2'
  },
  {
    id: 3,
    title: 'Bolo de Banana Integral',
    description: 'Um bolo saudável e delicioso, feito com bananas maduras e farinha integral.',
    image: '/imagens/bolo-de-banana.jpg',
    link: '/receitas/receita3'
  }
];

function Recipes() {
  return (
    <div className="recipes-page">
      <header className="recipes-header">
        <h1>Receitas Saudáveis</h1>
      </header>

      <main className="recipes-container">
        {recipesData.map(recipe => (
          <div key={recipe.id} className="recipe-card">
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className="recipe-image"
            />
            <div className="recipe-content">
              <h3 className="recipe-title">{recipe.title}</h3>
              <p className="recipe-description">{recipe.description}</p>
              <Link to={recipe.link} className="recipe-button">
                Ver Receita
              </Link>
            </div>
          </div>
        ))}
      </main>

      <footer className="recipes-footer">
        {/* Adicione o conteúdo do footer aqui */}
      </footer>
    </div>
  );
}

export default Recipes;