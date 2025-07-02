
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            From Visibility to Voice –
            <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent block mt-2">
              We Launch Your Business Online & On Call
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Helping startups and growing businesses establish or upgrade their online presence with comprehensive digital marketing solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-teal-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get a Quote
            </button>
            <div className="text-gray-600 dark:text-gray-400">
              <span className="block text-sm">Starting from</span>
              <span className="text-2xl font-bold text-teal-600 dark:text-teal-400">Ksh 35,000</span>
            </div>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 text-gray-400 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
