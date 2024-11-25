import React from "react";
import { useCart } from "../contexts/CartContext";
import "../../styles/ProductPage.css";
import farinhaAmendoas from "../../assets/amendoas.webp";
import oleoDeCoco from "../../assets/coco.webp";
import proteinaVegetal from "../../assets/proteina.jpeg";
import chia from "../../assets/chia.webp";
import beteraba from "../../assets/beteraba.webp";
import pastaDeAmendoim from "../../assets/amendoim.webp";
import creatina from "../../assets/creatina.webp";
import wheyProtein from "../../assets/whey.webp";
import cacau from "../../assets/cacau.jpg";
import mixCastanha from "../../assets/mix-de-castanha-tiny.jpg";
import Footer from "../otherComponents/Footer";
import Cabecalho from "../otherComponents/Cabecalho";

const ProductPage = () => {
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: "Farinha de Amêndoas",
      description: "Fonte rica de fibras e proteínas, ideal para receitas sem glúten e low-carb.",
      price: 25.0,
      image: farinhaAmendoas,
    },
    {
      id: 2,
      name: "Óleo de Coco Extra Virgem",
      description: "Óleo natural, perfeito para cozinhar e para uso cosmético.",
      price: 30.0,
      image: oleoDeCoco,
    },
    {
      id: 3,
      name: "Proteína Vegetal em Pó",
      description: "Suplemento ideal para dietas vegetarianas e veganas.",
      price: 45.0,
      image: proteinaVegetal,
    },
    {
      id: 4,
      name: "Semente de Chia",
      description: "Fonte de ômega-3, antioxidantes e fibras para uma vida saudável.",
      price: 20.0,
      image: chia,
    },
    {
      id: 5,
      name: "Suco de Beterraba",
      description: "Rico em antioxidantes e excelente para melhorar a circulação sanguínea.",
      price: 15.0,
      image: beteraba,
    },
    {
      id: 6,
      name: "Pasta de Amendoim Integral",
      description: "100% natural, sem açúcar ou conservantes, rica em proteínas.",
      price: 28.0,
      image: pastaDeAmendoim,
    },
    {
      id: 7,
      name: "Creatina",
      description: "Suplemento para aumento de força e desempenho em atividades físicas.",
      price: 90.0,
      image: creatina,
    },
    {
      id: 8,
      name: "Whey Protein",
      description: "Proteína de rápida absorção, ideal para ganho de massa muscular.",
      price: 120.0,
      image: wheyProtein,
    },
    {
      id: 9,
      name: "Cacau em Pó Orgânico",
      description: "Fonte de antioxidantes, ótimo para receitas doces e saudáveis.",
      price: 15.0,
      image: cacau,
    },
    {
      id: 10,
      name: "Mix de Castanhas",
      description: "Combinação de castanhas-do-pará, nozes, amêndoas e avelãs.",
      price: 35.0,
      image: mixCastanha,
    },
  ];

  return (
    <>
      <Cabecalho />
      <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <div className="container mx-auto text-center py-5">
          <h1 className="text-4xl font-bold mb-2">Produtos de Nutricionismo</h1>
          <p className="text-lg mb-6">Descubra nossos produtos para uma alimentação saudável</p>
        </div>

        {/* Products Grid (Two per row) */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image" // Classe CSS ajustada para a imagem
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <p className="text-lg font-bold text-blue-800">R$ {product.price.toFixed(2)}</p>
                  <button
                    onClick={() => addToCart(product)}
                    className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Comprar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
