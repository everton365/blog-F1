import { Card } from "./ui/card";

const BlogPosts = () => {
  const posts = [
    {
      title: "Top Drivers of 2024",
      excerpt: "A comprehensive analysis of this season's standout performers.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      credit: "Jane Doe on Unsplash",
      date: "March 10, 2024",
    },
    {
      title: "Circuit Spotlight: Monaco GP",
      excerpt: "Exploring the history and challenges of the iconic street circuit.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      credit: "Mike Johnson on Unsplash",
      date: "March 5, 2024",
    },
  ];

  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-6">Latest Posts</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-[200px]">
              <img
                src={post.image}
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 p-2 bg-black/50 text-white text-sm">
                Photo by {post.credit}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">{post.date}</span>
                <button className="text-[hsl(var(--primary))] hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default BlogPosts;