import React from 'react';

const steps = [
  { title: 'Upload License', icon: '📤' },
  { title: 'Get Valuation', icon: '💰' },
  { title: 'Get Paid', icon: '🏦' },
];

const HowItWorks = () => (
  <section className="py-12">
    <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
      {steps.map((step, idx) => (
        <div key={idx} className="p-6 border rounded shadow hover:shadow-md">
          <div className="text-4xl mb-4">{step.icon}</div>
          <h3 className="text-xl font-semibold">{step.title}</h3>
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorks;