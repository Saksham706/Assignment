import React from 'react';

const testimonials = [
  {
    name: 'John D.',
    role: 'IT Manager',
    company: 'Acme Inc.',
    feedback: 'SoftSell helped us monetize unused software. Incredibly simple!',
  },
  {
    name: 'Sarah K.',
    role: 'CTO',
    company: 'ByteCorp',
    feedback: 'Seamless and fast process. Highly recommended!',
  },
];

const Testimonials = () => (
  <section className="py-12">
    <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {testimonials.map((t, idx) => (
        <div key={idx} className="p-6 border rounded shadow hover:shadow-md">
          <p className="mb-2">“{t.feedback}”</p>
          <p className="text-sm text-gray-600">- {t.name}, {t.role} at {t.company}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;