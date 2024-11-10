import React, { createContext, useContext, useState, ReactNode,useEffect } from 'react';

type UserRole = 'admin' | 'reader' | null;
interface Post {
  id: string;
  title: string;
  contenttext: string;
  urlimage: string;
  creditoimage: string;
  usuariosid: number;
  author: string;
  date: string; // ou Date, dependendo de como você lida com a data
}
interface UserContextType {
  role: UserRole;
  setRole: (role: UserRole) => void;
  posts: Post[]; // Ajustado para ser um array de posts
  setPosts: (posts: Post[]) => void; // Função para atualizar os posts
}



const UserContext = createContext<UserContextType | undefined>(undefined);


export function UserProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<UserRole>(null);
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    const UrlServer = import.meta.env.VITE_API_URL;
    try {
      const response = await fetch(UrlServer);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data); // Adicione isso para verificar os dados retornados
      setPosts(data.reverse());
    } catch (error) {
      console.error('Erro ao buscar os posts:', error);
    }
  };
  useEffect(() => {
    fetchPosts(); // Chama a função para buscar os posts quando o componente for montado
  }, []);
  
  const value = {
    role,
    setRole,
    posts,
    setPosts,
  }
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export  function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}