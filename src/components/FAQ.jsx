const FAQ = () => {
  const questions = [
    { q: "How does StudyMate match partners?", a: "We analyze study goals, subjects, and preferences." },
    { q: "Is it free to use?", a: "Yes! All basic features are free." },
    { q: "Can I edit my profile later?", a: "Yes, anytime from dashboard." },
    { q: "Is my data secure?", a: "We use Firebase Authentication & secure storage." },
  ];

  return (
    <section className="rounded-xl shadow-lg bg-[#fef3c7] border hover:shadow-xl transition p-5 text-secondary m-4 w-full mx-auto max-w">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {questions.map((item, i) => (
            <div key={i} className="collapse collapse-arrow border rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium">{item.q}</div>
              <div className="collapse-content">{item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
