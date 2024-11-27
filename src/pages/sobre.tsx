import BlogHeader from "@/components/BlogHeader";
import Disclaimer from "@/components/Disclaimer";
import React from "react";

const Sobre = () => {
  return (
    <>
    <BlogHeader/>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Sobre Nós</h1>
        <p className="text-lg text-gray-700 mb-4">
        Bem-vindo ao nosso blog pessoal de notícias! Aqui, compartilhamos informações atualizadas e conteúdos sobre o mundo atual, com foco em tecnologia, inovação, e acontecimentos que estão moldando o futuro.
        </p>
        <p className="text-lg text-gray-700 mb-4">
        Nosso objetivo é oferecer um espaço onde você possa ficar por dentro das últimas tendências, análises e curiosidades, com uma abordagem pessoal e direta. Buscamos trazer uma visão única e relevante sobre os eventos que impactam o cotidiano.
        </p>
        <p className="text-lg text-gray-700 mb-4">
            Este blog foi criado para ser uma fonte confiável de notícias, artigos e insights. Se você está em busca de informações frescas, análises profundas e uma abordagem mais próxima do leitor, este é o lugar certo para você.</p>
      </div>
    </div>
    <Disclaimer/>
    </>
  );
};

export default Sobre;
