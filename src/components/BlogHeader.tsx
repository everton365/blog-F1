import { Button } from "./ui/button";

const BlogHeader = () => {
  return (
    <header className="bg-[hsl(var(--primary))] text-white py-6 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Blog F1 Insights</h1>
          <nav className="space-x-4">
            <Button variant="ghost" className="text-white hover:text-white/80">
              Início
            </Button>
            <Button variant="ghost" className="text-white hover:text-white/80">
              Últimas Postagens
            </Button>
            <Button variant="ghost" className="text-white hover:text-white/80">
              Sobre
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;