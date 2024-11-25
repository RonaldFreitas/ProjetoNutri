import React from 'react';
import Cabecalho from '../otherComponents/Cabecalho';
import Footer from '../otherComponents/Footer';
import { useCart } from "../contexts/CartContext";

const ShoppingCart = () => {
  const { cartItems, addToCart, removeOneFromCart, finalizePurchase } = useCart();

  return (
    <>
    <Cabecalho/>
    <div className="min-h-screen bg-gray-100">
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
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => addToCart(item)}
                      className="px-2 py-1 bg-green-500 text-white rounded"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeOneFromCart(item.id)}
                      className="px-2 py-1 bg-red-500 text-white rounded"
                    >
                      -
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold">Total:</span>
                <span className="font-bold text-xl">
                  R$
                  {cartItems
                    .reduce(
                      (total, item) => total + item.price * item.quantity,
                      0
                    )
                    .toFixed(2)}
                </span>
              </div>
              <button
                onClick={finalizePurchase}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Finalizar Compra
              </button>
            </div>
          </>
        )}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ShoppingCart;