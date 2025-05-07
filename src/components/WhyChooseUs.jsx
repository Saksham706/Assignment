import React from 'react';

const reasons = [
  { icon: '🛡️', text: 'Trusted by 1000+ users' },
  { icon: '⚡', text: 'Instant Quotes' },
  { icon: '💸', text: 'Secure Payments' },
  { icon: '📞', text: '24/7 Support' },
];

const WhyChooseUs = () => (
  <section className="py-12">
    <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
      {reasons.map((reason, idx) => (
        <div key={idx} className="p-4 border rounded shadow hover:shadow-md">
          <div className="text-3xl mb-2">{reason.icon}</div>
          <p>{reason.text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default WhyChooseUs;
