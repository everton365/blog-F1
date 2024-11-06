
import { Link } from "react-router-dom";
import { Card } from "./ui/card";
import { useUser } from "@/contexts/UserContext";




const BlogPosts = () => {
  const {posts  } = useUser();
 

  return (
    <section className="my-8">
      
      <h2 className="text-2xl font-bold mb-6">Últimas Postagens</h2>
   
   
      <div className="grid md:grid-cols-2 gap-6">
        {posts
          .sort((a, b) => Number(b.id) - Number(a.id)) // Ordena os posts em ordem decrescente pelo ID
          .map((post) => {
            const firstParagraph = post.contenttext.split('\n')[0]; // Obtém o primeiro parágrafo
  
            return (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-[200px]">
                  <img
                    src={post.urlimage}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 p-2 bg-black/50 text-white text-sm">
                    Foto por {post.creditoimage}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{firstParagraph}</p> {/* Exibe apenas o primeiro parágrafo */}
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground"> {new Date(post.date).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo', year: 'numeric', month: '2-digit', day: '2-digit' })}</span>
                    <Link to={`/Blog-posts/${post.id}`}>
                      <button className="text-[hsl(var(--primary))] hover:underline">
                        Leia Mais →
                      </button>
                    </Link>
                  </div>
                </div>
              </Card>
            );
          })}
      </div>
    </section>
  );
  
};

export default BlogPosts;