const Newsletter = () => {
  return (
    <section className="rounded-xl shadow-lg bg-[#fef3c7] border hover:shadow-xl transition p-5 text-secondary m-4 w-full mx-auto max-w">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Community</h2>
        <p className="mb-8 text-gray-600 dark:text-gray-300">
          Get study tips & updates directly in your inbox.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full md:w-80"
          />
          <button className="btn btn-primary">Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
