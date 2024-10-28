import { useParams } from "react-router-dom";
import BlogHeader from "@/components/BlogHeader";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const ArticlePage = () => {
  const { id } = useParams();

  // Simular dados do artigo (em um caso real, isso viria de uma API)
  const articles = {
    "melhores-pilotos-2024": {
      title: "Melhores Pilotos de 2024",
      content: "Uma análise abrangente dos pilotos que mais se destacaram nesta temporada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      credit: "Jane Doe no Unsplash",
      date: "10 de Março de 2024"
    },
    "circuito-monaco": {
      title: "Circuito em Destaque: GP de Mônaco",
      content: "Explorando a história e os desafios do icônico circuito de rua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      credit: "Mike Johnson no Unsplash",
      date: "5 de Março de 2024"
    },
    "estrategias-pit-stop": {
      title: "Estratégias de Pit Stop",
      content: "Como as equipes planejam suas paradas nos boxes para maximizar o desempenho. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "https://images.unsplash.com/photo-1504817343863-5092a923803e",
      credit: "Carlos Silva no Unsplash",
      date: "1 de Março de 2024"
    },
    "historia-gp-brasil": {
      title: "História do GP do Brasil",
      content: "A trajetória emocionante de Interlagos e seus momentos mais marcantes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "https://images.unsplash.com/photo-1515784638688-3f7e90ebb446",
      credit: "Ana Santos no Unsplash",
      date: "28 de Fevereiro de 2024"
    }
  };

  const article = articles[id as keyof typeof articles];

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <BlogHeader />
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold">Artigo não encontrado</h1>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <main className="container mx-auto px-4 py-8">
        <Card className="overflow-hidden">
          <div className="relative h-[400px]">
            <img
              src={article.image}
              alt={article.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 p-2 bg-black/50 text-white text-sm">
              Foto por {article.credit}
            </div>
          </div>
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
            <p className="text-sm text-muted-foreground mb-6">{article.date}</p>
            <Separator className="my-6" />
            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed">{article.content}</p>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default ArticlePage;