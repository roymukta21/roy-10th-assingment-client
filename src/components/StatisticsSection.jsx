const StatisticsSection = () => {
  const stats = [
    { number: "12,500+", label: "Active Users" },
    { number: "8,900+", label: "Study Matches" },
    { number: "4,200+", label: "Verified Profiles" },
    { number: "97%", label: "Success Rate" },
  ];

  return (
    <section className="rounded-xl shadow-lg bg-[#fef3c7] border hover:shadow-xl transition p-5 text-secondary m-4 w-full mx-auto max-w">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Our Achievements
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow hover:shadow-xl transition"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {s.number}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
