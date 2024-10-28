import { Card } from "./ui/card";
import { Link } from "react-router-dom";

const BlogPosts = () => {
  const posts = [
    {
      id: "melhores-pilotos-2024",
      title: "Melhores Pilotos de 2024",
      excerpt: "Uma análise abrangente dos pilotos que mais se destacaram nesta temporada.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      credit: "Jane Doe no Unsplash",
      date: "10 de Março de 2024",
    },
    {
      id: "circuito-monaco",
      title: "Circuito em Destaque: GP de Mônaco",
      excerpt: "Explorando a história e os desafios do icônico circuito de rua.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      credit: "Mike Johnson no Unsplash",
      date: "5 de Março de 2024",
    },
    {
      id: "estrategias-pit-stop",
      title: "Estratégias de Pit Stop",
      excerpt: "Como as equipes planejam suas paradas nos boxes para maximizar o desempenho.",
      image: "https://images.unsplash.com/photo-1504817343863-5092a923803e",
      credit: "Carlos Silva no Unsplash",
      date: "1 de Março de 2024",
    },
    {
      id: "historia-gp-brasil",
      title: "História do GP do Brasil",
      excerpt: "A trajetória emocionante de Interlagos e seus momentos mais marcantes.",
      image: "https://images.unsplash.com/photo-1515784638688-3f7e90ebb446",
      credit: "Ana Santos no Unsplash",
      date: "28 de Fevereiro de 2024",
    }
  ];

  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-6">Últimas Postagens</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <Link to={`/artigo/${post.id}`}>
              <div className="relative h-[200px]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 p-2 bg-black/50 text-white text-sm">
                  Foto por {post.credit}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                  <span className="text-[hsl(var(--primary))] hover:underline">
                    Leia Mais →
                  </span>
                </div>
              </div>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default BlogPosts;