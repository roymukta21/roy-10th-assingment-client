import { Link } from "react-router";

const BlogSection = () => {
  const posts = [
    {
      id: 1,
      title: "How to Find Your Ideal Study Partner",
      img: "https://storage.googleapis.com/cdn-website-bolddesk/2024/06/bdcbab56-increase-team-productivity@2x-banner-compressed.jpg",
    },
    {
      id: 2,
      title: "Top 10 Study Hacks for Students",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWH7CDqVMxD2gVdw0LuC9f1iOmn02uT5rMpw&s",
    },
    {
      id: 3,
      title: "Why Group Study Improves Productivity",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqhpkjDq3woasFS9WAbm2D8dDfJDG-VfQDZg&s",
    },
  ];

  return (
    <section className="rounded-xl shadow-lg bg-[#fef3c7] border hover:shadow-xl transition p-5 text-secondary m-4 w-full mx-auto">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Study Tips & Blogs
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((p) => (
            <div
              key={p.id}
              className="rounded-xl shadow-lg bg-white hover:shadow-xl transition group overflow-hidden"
            >
              {/* Image */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{p.title}</h3>

                <Link
                  to={`/blog/${p.id}`}
                  className="text-primary font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
