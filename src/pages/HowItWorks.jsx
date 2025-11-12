export default function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center text-blue-800">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 ">
          🔄 How It Works
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {/* Step 1 */}
          <div className="p-6 border rounded-2xl shadow-sm hover:shadow-lg transition">
            <div className="text-4xl">✏️</div>
            <h3 className="text-xl font-semibold mt-3 text-blue-800">Click Update</h3>
            <p className="mt-2 text-sm text-secondary">
              Open the edit form to update your study partner profile.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-6 border rounded-2xl shadow-sm hover:shadow-lg transition">
            <div className="text-4xl">📝</div>
            <h3 className="text-xl font-semibold mt-3 text-blue-800">Edit Information</h3>
            <p className="text-secondary mt-2 text-sm">
              Modify any details like name, subject, schedule, or experience.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-6 border rounded-2xl shadow-sm hover:shadow-lg transition">
            <div className="text-4xl">✅</div>
            <h3 className="text-xl font-semibold mt-3 text-blue-800">Save Changes</h3>
            <p className="text-secondary mt-2 text-sm">
              Submit your edits and update your profile in the database.
            </p>
          </div>

          {/* Step 4 */}
          <div className="p-6 border rounded-2xl shadow-sm hover:shadow-lg transitiontext-blue-800">
            <div className="text-4xl">🎉</div>
            <h3 className="text-xl font-semibold mt-3">Success!</h3>
            <p className="text-secondary mt-2 text-sm">
              A confirmation message appears and your profile updates instantly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
