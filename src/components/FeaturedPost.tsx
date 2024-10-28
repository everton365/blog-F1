import { Card } from "./ui/card";

const FeaturedPost = () => {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-6">Postagem em Destaque</h2>
      <Card className="overflow-hidden">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative h-[300px]">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475"
              alt="Corrida de Fórmula 1"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 p-2 bg-black/50 text-white text-sm">
              Foto por John Smith no Unsplash
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4">A Evolução da Tecnologia na F1</h3>
            <p className="text-muted-foreground mb-4">
              Explore como a tecnologia de ponta transformou as corridas de Fórmula 1 ao longo das décadas,
              desde inovações mecânicas até revoluções digitais.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">15 de Março de 2024</span>
              <button className="text-[hsl(var(--primary))] hover:underline">
                Leia Mais →
              </button>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default FeaturedPost;