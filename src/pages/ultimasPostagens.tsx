
import BlogHeader from "@/components/BlogHeader";
import BlogPosts from "@/components/BlogPosts";
import Disclaimer from "@/components/Disclaimer";



const UltimasPostagens = () => {
  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <main className="container mx-auto px-4 py-8">
        <BlogPosts />
         <Disclaimer />
      </main>
    </div>
  );
};

export default UltimasPostagens;