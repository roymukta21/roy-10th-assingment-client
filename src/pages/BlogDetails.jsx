import { useParams, Link } from "react-router";
import { useEffect } from "react";

const BlogDetails = () => {
  const { id } = useParams();

  const posts = [
    {
      id: 1,
      title: "How to Find Your Ideal Study Partner",
      img: "https://storage.googleapis.com/cdn-website-bolddesk/2024/06/bdcbab56-increase-team-productivity@2x-banner-compressed.jpg",
      date: "January 10, 2026",
      author: "Team StudyMate",
      content: `
Finding the right study partner can completely change your learning journey.
A good partner keeps you motivated, organized, and focused.

Here are some steps to help you find the perfect match:
      `,
      points: [
        "Choose someone with similar study goals",
        "Match your daily or weekly schedule",
        "Ensure they prefer the same study style",
        "Communicate clearly and set expectations",
      ],
    },
    {
      id: 2,
      title: "Top 10 Study Hacks for Students",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWH7CDqVMxD2gVdw0LuC9f1iOmn02uT5rMpw&s",
      date: "January 8, 2026",
      author: "Team StudyMate",
      content: `
Studying effectively isn't always about spending more hours.
With the right techniques, you can learn faster and remember longer.
Here are 10 proven study hacks to maximize your productivity.
      `,
      points: [
        "Use Pomodoro Technique",
        "Study in short focused sessions",
        "Avoid multitasking",
        "Teach what you learn",
      ],
    },
    {
      id: 3,
      title: "Why Group Study Improves Productivity",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqhpkjDq3woasFS9WAbm2D8dDfJDG-VfQDZg&s",
      date: "January 5, 2026",
      author: "Team StudyMate",
      content: `
Group study offers more than just company.
It boosts motivation, accountability, and topic understanding.
When done correctly, it becomes one of the most powerful study methods.
      `,
      points: [
        "More perspectives on topics",
        "Better accountability",
        "Sharing knowledge improves memory",
        "Boosts communication skills",
      ],
    },
  ];

  const blog = posts.find((p) => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!blog) {
    return (
      <h2 className="text-center py-20 text-red-600 text-2xl">
        Blog Not Found 😢
      </h2>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center text-blue-800">

        <Link
          to="/blogs"
          className="text-primary text-lg mb-6 inline-block px-6 py-3 border rounded-2xl shadow-sm hover:shadow-lg transition bg-[#fef3c7]"
        >
          ← Back to Blogs
        </Link>

        <div className="max-w-3xl mx-auto p-6 md:p-10 border rounded-2xl shadow-sm hover:shadow-lg transition bg-[#fef3c7]">

          <img
            src={blog.img}
            alt={blog.title}
            className="w-full h-60 object-cover rounded-xl"
          />

          <h1 className="text-3xl md:text-4xl font-bold mt-6 mb-2">
            {blog.title}
          </h1>

          <div className="text-gray-600 mb-6 space-y-1">
            <p>📅 {blog.date}</p>
            <p>✍️ {blog.author}</p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line mb-6">
            {blog.content}
          </p>

          <h2 className="text-2xl font-semibold mb-3">Key Points:</h2>

          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            {blog.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>

          <div className="flex justify-between mt-10 text-primary font-semibold">
            {blog.id > 1 ? (
              <Link to={`/blog/${blog.id - 1}`}>← Previous</Link>
            ) : (
              <span></span>
            )}

            {blog.id < posts.length ? (
              <Link to={`/blog/${blog.id + 1}`}>Next →</Link>
            ) : (
              <span></span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
