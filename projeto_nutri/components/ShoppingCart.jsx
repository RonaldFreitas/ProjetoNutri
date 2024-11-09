import React from 'react';

const ShoppingCart = () => {
  return (
    <div className="min-h-screen bg-[#f9f9f9] text-[#333] flex justify-center items-start p-5">
      <div className="w-full max-w-[1200px] bg-white rounded-xl shadow-lg m-5 p-20 border-3 border-black">
        <h2 className="text-4xl text-[#333] mb-8 text-center font-semibold">
          Carrinho de Compras
        </h2>

        <div className="text-2xl text-center text-[#777] my-8">
          Seu carrinho está vazio! Adicione produtos para começar a comprar.
        </div>

        <div className="flex justify-between text-2xl font-semibold text-[#333] mt-8 pt-5 border-t-2 border-[#f0f0f0]">
          <p>Total Geral:</p>
          <p>R$ 0,00</p>
        </div>

        <button 
          className="w-full bg-[#2196F3] text-white py-4 text-2xl font-bold rounded-xl cursor-pointer mt-8 hover:bg-[#448b23] transition-colors duration-300"
          onClick={() => alert('Finalizando compra...')}
        >
          Finalizar Compra
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;