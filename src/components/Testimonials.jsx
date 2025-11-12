import React from 'react';

const Testimonials = () => {
    return (
        <section className="bg-gray-100 py-14 mt-14">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 text-blue-800">💬 Testimonials</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <p className='text-secondary'>"I finally found someone who studies the same way as me!"</p>
            <h4 className="mt-4 font-semibold text-primary">— Sejuthi</h4>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <p className='text-secondary'>"Group study sessions improved my exam scores!"</p>
            <h4 className="mt-4 font-semibold text-primary">— Ramendra</h4>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <p className='text-secondary'>"The learning environment here is amazing!"</p>
            <h4 className="mt-4 font-semibold text-primary">— Jenifa</h4>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Testimonials;