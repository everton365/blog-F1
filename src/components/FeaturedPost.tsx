import { Card } from "./ui/card";
import { useUser } from "@/contexts/UserContext";
import { Link } from "react-router-dom";

const FeaturedPost = () => {
  const { posts } = useUser();
  const lastPost = posts[0]; // Obter o último post do array
  const firstParagraph = lastPost ? lastPost.contenttext.split('\n')[0] : '';
  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-6">Postagem em Destaque</h2>
      {lastPost && ( // Verifica se há um post para exibir
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative h-[300px]">
              <img
                src={lastPost.urlimage}
                alt="postdestaque"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 p-2 bg-black/50 text-white text-sm">
                {lastPost.creditoimage}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">{lastPost.title}</h3>
              <p className="text-muted-foreground mb-4">
                {firstParagraph}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground"> {new Date(lastPost.date).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo', year: 'numeric', month: '2-digit', day: '2-digit' })}</span>
                <Link to={`/Blog-posts/${lastPost.id}`}>
                <button className="text-[hsl(var(--primary))] hover:underline">
                  Leia Mais →
                </button>
                </Link>
              </div>
            </div>
          </div>
        </Card>
      )}
    </section>
  );
};

export default FeaturedPost;