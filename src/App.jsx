import React from 'react';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <div className="bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <HeroSection />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
      </div>
      <ChatWidget />
    </div>
  );
}

export default App;
