import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogHeader from '@/components/BlogHeader';
import Disclaimer from '@/components/Disclaimer';
import { useParams } from 'react-router-dom';
import { useUser } from "@/contexts/UserContext";


function BlogPostPage() {
  const { id } = useParams();
  
  const {posts  } = useUser(); 
  const [post, setPost] = useState(null);

const extractYouTubeID = (url) => {
  const parts = url.split("v="); // Divide a URL com base em 'v='
  return parts[1] ? parts[1].split("&")[0] : null; // Pega a parte após 'v=' e ignora parâmetros extras
};





  // Função para buscar um único post
  useEffect(() => {
    // Verifica se posts estão carregados
    if (posts.length > 0) {
      // Converte o ID da URL para string, se necessário
      const foundPost = posts.find(p => p.id.toString() === id); // Converte o ID do post para string
      setPost(foundPost); // Define o post encontrado no estado
      
    }
  }, [id, posts]); // Reexecuta quando o ID ou os posts mudarem

  if (!post) {
    return <div>Loading...</div>; // Exibe uma mensagem enquanto o post não está carregado
  }

  const renderContent = (post) => {
    return post.split('\n').map((line, index) => {
      let updatedLine = line;
      const boldRegex = /\*\*(.*?)\*\*/g; // Regex para capturar texto entre **

      // Substitui as palavras que estão entre "**" por <strong>
      updatedLine = updatedLine.replace(boldRegex, '<strong>$1</strong>');
      // Verifica se a linha começa com "###" para estilizar como subtítulo
      if (line.startsWith('###')) {
        return (
          <h3 key={index} className="text-xl font-bold mt-4 mb-2">
            {line.replace('###', '').trim()}
          </h3>
        );
      }
      // Renderiza as outras linhas como parágrafos normais
      return <p key={index} className="indent-8 mt-4">{line}</p>;
    });
  };
  const videoID = extractYouTubeID(post.videourl);
 
 
  return (
    <>
   <BlogHeader/>
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-xl rounded-lg overflow-hidden">
    {/* Título do Post */}
    <h1 className="text-5xl font-extrabold text-gray-800 mb-6 leading-tight tracking-tight text-center">
      {post.title}
    </h1>

    {/* Imagem do Post */}
    <img
      className="w-full h-72 md:h-96 lg:h-[500px] object-contain rounded-lg shadow-lg mb-6"
      src={post.urlimage}
      alt={post.title}
    />
  
    {/* Créditos da Foto */}
    <p className="text-xs italic text-gray-400 text-right mb-10">
      Crédito da foto: {post.creditoimage}
    </p>
  
    {/* Conteúdo do Post */}
    
    <div className="text-gray-800 leading-relaxed text-lg max-w-3xl mx-auto px-6 space-y-6">
 
   
     {renderContent(post.contenttext)}
    
  

</div>
<p className="text-sm font-medium text-gray-500 text-right mt-8 mb-8">
  Por: <span className="text-gray-700">
    {post.author}
  </span><br />
  data: <span className="text-gray-700"> {new Date(post.date).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo', year: 'numeric', month: '2-digit', day: '2-digit' })}
  </span>


</p>
<div className="flex justify-center items-center h-screen text-center">
      <div>
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6">Confira nosso vídeo!</h1>
        <iframe
          width="860"
          height="515"
          src={`https://www.youtube.com/embed/${videoID}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  
  </div>
  <Disclaimer />
  </>
  );
}

export default BlogPostPage;