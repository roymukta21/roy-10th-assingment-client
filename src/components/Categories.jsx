const Categories = () => {
  const categories = [
    "Science",
    "Arts",
    "Commerce",
    "Engineering",
    "Medical",
    "Programming",
  ];

  return (
    <section className="rounded-xl shadow-lg bg-[#fef3c7] border hover:shadow-xl transition p-5 text-secondary m-4 w-full mx-auto max-w"

>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Study Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="p-5 bg-base-200 dark:bg-gray-800 rounded-xl text-center shadow hover:bg-primary hover:text-white transition cursor-pointer"
            >
              {cat}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
