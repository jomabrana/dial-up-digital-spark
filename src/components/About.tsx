
import React from 'react';
import { Target, Zap, Shield, TrendingUp } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Visibility",
      description: "Website gives you online visibility and professional presence"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Credibility", 
      description: "Business number gives you credibility and trust with customers"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Professional Communication",
      description: "IVR gives you professional communication experience"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Trust = Conversion",
      description: "All touchpoints match your brand for trust and conversion"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Why This Project Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            We help startups and businesses launch or revamp their digital presence with a professional website, 
            trusted contact system, and branded identity that <span className="text-teal-600 dark:text-teal-400 font-semibold">builds credibility, drives conversions, and supports growth</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
