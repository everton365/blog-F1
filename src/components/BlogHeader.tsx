import { Link } from "react-router-dom";
import { Button } from "./ui/button";


const BlogHeader = () => {
  return (
    <header className="bg-[hsl(var(--primary))] text-white py-6 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Notícias 360</h1>
          <nav className="space-x-4">
            <Link to="/">
            <Button variant="ghost" className="text-white hover:text-white/80">
              Início
            </Button>
              </Link>
              <Link to="/UltimasPostagens">
            <Button variant="ghost" className="text-white hover:text-white/80">
              Últimas Postagens
            </Button>
            </Link>
            <Link to="/sobre">
            <Button variant="ghost" className="text-white hover:text-white/80">
              Sobre
            </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;