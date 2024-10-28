import { Card } from "./ui/card";

const FeaturedPost = () => {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-6">Featured Post</h2>
      <Card className="overflow-hidden">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative h-[300px]">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475"
              alt="Formula 1 Racing"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 p-2 bg-black/50 text-white text-sm">
              Photo by John Smith on Unsplash
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4">The Evolution of F1 Technology</h3>
            <p className="text-muted-foreground mb-4">
              Explore how cutting-edge technology has transformed Formula 1 racing over the decades,
              from mechanical innovations to digital revolutions.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">March 15, 2024</span>
              <button className="text-[hsl(var(--primary))] hover:underline">
                Read More →
              </button>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default FeaturedPost;