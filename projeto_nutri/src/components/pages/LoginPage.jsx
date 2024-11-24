import React, { useState } from 'react';
import '../../styles/LoginPage.css';
import { 
  Linkedin,
} from 'lucide-react';

{/* Os imports dos ícones foram depreciados*/}

const LoginPage = () => {
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#e2e2e2] to-[#c9d6ff] flex items-center justify-center flex-col">
      <div 
        className={`bg-white rounded-[30px] shadow-lg relative overflow-hidden w-[768px] max-w-full min-h-[480px] ${
          isActive ? 'active' : ''
        }`}
      >
        {/* Sign Up Form */}
        <div className="absolute top-0 h-full transition-all duration-600 ease-in-out left-0 w-1/2 opacity-0 z-1 sign-up">
          <form className="bg-white flex items-center justify-center flex-col px-10 h-full">
            <h1 className="text-2xl font-bold mb-4">Crie sua conta</h1>
            <div className="flex gap-3 my-5">
              <a href="#" className="border border-[#ccc] rounded-[20%] flex justify-center items-center w-10 h-10">
                <Google className="w-5 h-5" />
              </a>
              <a href="#" className="border border-[#ccc] rounded-[20%] flex justify-center items-center w-10 h-10">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="border border-[#ccc] rounded-[20%] flex justify-center items-center w-10 h-10">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="border border-[#ccc] rounded-[20%] flex justify-center items-center w-10 h-10">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <span className="text-lg">Use seu email para se cadastrar</span>
            <input
              type="text"
              placeholder="Nome"
              className="bg-[#eee] border-none my-2 px-4 py-2 text-sm rounded-lg w-full outline-none"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="bg-[#eee] border-none my-2 px-4 py-2 text-sm rounded-lg w-full outline-none"
            />
            <input
              type="password"
              placeholder="Senha"
              className="bg-[#eee] border-none my-2 px-4 py-2 text-sm rounded-lg w-full outline-none"
            />
            <button className="bg-[#00c3ff] hover:bg-[#00a2ff] text-white text-sm px-11 py-2.5 border border-transparent rounded-lg font-semibold tracking-wider uppercase mt-2.5 cursor-pointer relative overflow-hidden transition-all duration-300 hover:scale-105">
              Cadastrar
            </button>
          </form>
        </div>

        {/* Sign In Form */}
        <div className="absolute top-0 h-full transition-all duration-600 ease-in-out left-0 w-1/2 z-2 sign-in">
          <form className="bg-white flex items-center justify-center flex-col px-10 h-full">
            <h1 className="text-2xl font-bold mb-4">Entrar</h1>
            <div className="flex gap-3 my-5">
              <a href="#" className="border border-[#ccc] rounded-[20%] flex justify-center items-center w-10 h-10">
                <GooglePlusG className="w-5 h-5" />
              </a>
              <a href="#" className="border border-[#ccc] rounded-[20%] flex justify-center items-center w-10 h-10">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="border border-[#ccc] rounded-[20%] flex justify-center items-center w-10 h-10">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="border border-[#ccc] rounded-[20%] flex justify-center items-center w-10 h-10">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <span className="text-lg">Digite seu e-mail e sua senha</span>
            <input
              type="email"
              placeholder="E-mail"
              className="bg-[#eee] border-none my-2 px-4 py-2 text-sm rounded-lg w-full outline-none"
            />
            <input
              type="password"
              placeholder="Senha"
              className="bg-[#eee] border-none my-2 px-4 py-2 text-sm rounded-lg w-full outline-none"
            />
            <a href="#" className="text-sm text-[#333] no-underline mt-4 mb-2.5">
              Esqueceu sua senha?
            </a>
            <button className="bg-[#00c3ff] hover:bg-[#00a2ff] text-white text-sm px-11 py-2.5 border border-transparent rounded-lg font-semibold tracking-wider uppercase mt-2.5 cursor-pointer relative overflow-hidden transition-all duration-300 hover:scale-105">
              Login
            </button>
          </form>
        </div>

        {/* Toggle Container */}
        <div className="absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-all duration-600 ease-in-out rounded-l-[150px] z-1000">
          <div className="bg-gradient-to-r from-[#00fff2] to-[#019196] text-white relative -left-full h-full w-[200%] transform transition-all duration-600 ease-in-out">
            {/* Toggle Left Panel */}
            <div className="absolute w-1/2 h-full flex items-center justify-center flex-col px-8 text-center top-0 transform -translate-x-[200%] transition-all duration-600 ease-in-out">
              <h1 className="text-2xl font-bold mb-4">Bem-vindo</h1>
              <p className="mb-4">Cadastre-se para continuar</p>
              <button
                onClick={handleLoginClick}
                className="bg-transparent border border-white text-white text-sm px-11 py-2.5 rounded-lg font-semibold tracking-wider uppercase mt-2.5 cursor-pointer"
              >
                Entrar
              </button>
            </div>

            {/* Toggle Right Panel */}
            <div className="absolute w-1/2 h-full flex items-center justify-center flex-col px-8 text-center top-0 right-0 transition-all duration-600 ease-in-out">
              <h1 className="text-2xl font-bold mb-4">
                Olá! Somos a <span className="text-2xl">MELHOR</span> unidade de nutricionistas
              </h1>
              <p className="mb-4">Faça seu login para nos conhecer melhor</p>
              <button
                onClick={handleRegisterClick}
                className="bg-transparent border border-white text-white text-sm px-11 py-2.5 rounded-lg font-semibold tracking-wider uppercase mt-2.5 cursor-pointer"
              >
                Cadastro
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;