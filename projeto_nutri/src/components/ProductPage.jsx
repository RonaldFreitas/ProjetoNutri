import React, { useState } from 'react';
import { ShoppingCart, LogIn } from 'lucide-react';

const ProductPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const products = [
    {
      id: 1,
      name: "Farinha de Amêndoas",
      description: "Fonte rica de fibras e proteínas, ideal para receitas sem glúten e low-carb.",
      price: 25.00,
      image: "/api/placeholder/300/200"
    },
    {
      id: 2,
      name: "Óleo de Coco Extra Virgem",
      description: "Óleo natural, perfeito para cozinhar e para uso cosmético.",
      price: 30.00,
      image: "/api/placeholder/300/200"
    },
    {
      id: 3,
      name: "Proteína Vegetal em Pó",
      description: "Suplemento ideal para dietas vegetarianas e veganas.",
      price: 45.00,
      image: "/api/placeholder/300/200"
    },
    {
      id: 4,
      name: "Semente de Chia",
      description: "Fonte de ômega-3, antioxidantes e fibras para uma vida saudável.",
      price: 20.00,
      image: "/api/placeholder/300/200"
    },
    {
      id: 5,
      name: "Suco de Beterraba",
      description: "Rico em antioxidantes e excelente para melhorar a circulação sanguínea.",
      price: 15.00,
      image: "/api/placeholder/300/200"
    },
    {
      id: 6,
      name: "Pasta de Amendoim Integral",
      description: "100% natural, sem açúcar ou conservantes, rica em proteínas.",
      price: 28.00,
      image: "/api/placeholder/300/200"
    },
    {
      id: 7,
      name: "Creatina",
      description: "Suplemento para aumento de força e desempenho em atividades físicas.",
      price: 90.00,
      image: "/api/placeholder/300/200"
    },
    {
      id: 8,
      name: "Whey Protein",
      description: "Proteína de rápida absorção, ideal para ganho de massa muscular.",
      price: 120.00,
      image: "/api/placeholder/300/200"
    },
    {
      id: 9,
      name: "Cacau em Pó Orgânico",
      description: "Fonte de antioxidantes, ótimo para receitas doces e saudáveis.",
      price: 15.00,
      image: "/api/placeholder/300/200"
    },
    {
      id: 10,
      name: "Mix de Castanhas",
      description: "Combinação de castanhas-do-pará, nozes, amêndoas e avelãs.",
      price: 35.00,
      image: "/api/placeholder/300/200"
    }
  ];

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    setIsCartVisible(true);
  };

  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  const handleCheckout = () => {
    alert('Compra finalizada! Total: R$' + totalPrice.toFixed(2));
    setCartItems([]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-6 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-2">Produtos de Nutricionismo</h1>
          <p className="text-center mb-6">Descubra nossos produtos para uma alimentação saudável</p>
          
          <nav className="flex justify-center items-center space-x-6">
            <a href="#" className="hover:text-blue-200 transition-colors">Inicio</a>
            <a href="#" className="hover:text-blue-200 transition-colors">Receitas</a>
            <a href="#" className="hover:text-blue-200 transition-colors">Exames</a>
            <a href="#" className="hover:text-blue-200 transition-colors">IMC</a>
            <a href="#" className="hover:text-blue-200 transition-colors">Produtos</a>
            <button 
              onClick={() => setIsCartVisible(!isCartVisible)}
              className="hover:text-blue-200 transition-colors flex items-center"
            >
              <ShoppingCart className="w-5 h-5 mr-1" />
              <span className="bg-red-500 rounded-full px-2 py-1 text-xs">
                {cartItems.reduce((total, item) => total + item.quantity, 0)}
              </span>
            </button>
            <button className="flex items-center border border-white px-4 py-2 rounded hover:bg-white hover:text-blue-800 transition-colors">
              <LogIn className="w-5 h-5 mr-2" />
              Login
            </button>
          </nav>
        </div>
      </header>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-green-600">
                    R$ {product.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Shopping Cart */}
      {isCartVisible && (
        <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl p-6 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4">Carrinho</h2>
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Seu carrinho está vazio</p>
          ) : (
            <>
              <ul className="space-y-4 mb-4">
                {cartItems.map((item) => (
                  <li key={item.id} className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-600">
                        Qtd: {item.quantity} x R${item.price.toFixed(2)}
                      </p>
                    </div>
                    <span className="font-bold">
                      R${(item.quantity * item.price).toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold">Total:</span>
                  <span className="font-bold text-xl">
                    R${totalPrice.toFixed(2)}
                  </span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Finalizar Compra
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductPage;