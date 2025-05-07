import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', type: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message submitted!');
  };

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto grid gap-4">
        <input name="name" type="text" placeholder="Name" required onChange={handleChange} className="p-2 border rounded" />
        <input name="email" type="email" placeholder="Email" required onChange={handleChange} className="p-2 border rounded" />
        <input name="company" type="text" placeholder="Company" onChange={handleChange} className="p-2 border rounded" />
        <select name="type" required onChange={handleChange} className="p-2 border rounded">
          <option value="">Select License Type</option>
          <option>Software Suite</option>
          <option>Antivirus</option>
          <option>Developer Tools</option>
        </select>
        <textarea name="message" placeholder="Message" required rows="4" onChange={handleChange} className="p-2 border rounded"></textarea>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;