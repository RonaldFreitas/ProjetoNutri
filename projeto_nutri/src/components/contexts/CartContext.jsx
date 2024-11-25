import React, { createContext, useContext, useState } from "react";

// Criação do contexto do carrinho
const CartContext = createContext();

// Provedor do carrinho
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Adiciona um produto ao carrinho
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // Remove uma unidade de um produto do carrinho
  const removeOneFromCart = (productId) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === productId);
      if (existingItem.quantity > 1) {
        // Diminui a quantidade se for maior que 1
        return prevItems.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
      // Remove o item se a quantidade for 1
      return prevItems.filter((item) => item.id !== productId);
    });
  };

  // Finaliza a compra
  const finalizePurchase = () => {
    alert("Compra finalizada!");
    setCartItems([]); // Limpa o carrinho
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeOneFromCart, finalizePurchase }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const useCart = () => {
  return useContext(CartContext);
};
