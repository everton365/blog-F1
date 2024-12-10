import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import BlogHeader from "@/components/BlogHeader";
import FeaturedPost from "@/components/FeaturedPost";
import BlogPosts from "@/components/BlogPosts";
import Disclaimer from "@/components/Disclaimer";
import CreateArticleDialog from "@/components/CreateArticleDialog";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <main className="container mx-auto px-4 py-8">
        <CreateArticleDialog />
        <FeaturedPost />
        <Separator className="my-8" />
        <BlogPosts />
         <Disclaimer />
      </main>
    </div>
  );
};

export default Index;