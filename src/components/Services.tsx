
import React from 'react';
import { Globe, Phone, Menu, Search, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe className="h-12 w-12" />,
      title: "Web Development",
      description: "Custom, responsive websites that represent your brand professionally and convert visitors into customers.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile-First"]
    },
    {
      icon: <Phone className="h-12 w-12" />,
      title: "Visual Business Number",
      description: "Professional phone numbers that enhance your business credibility and make you easily reachable.",
      features: ["Professional Number", "Call Forwarding", "Business Identity", "Customer Trust"]
    },
    {
      icon: <Menu className="h-12 w-12" />,
      title: "IVR System",
      description: "Interactive Voice Response systems that professionally handle customer calls and route them efficiently.",
      features: ["Custom Greetings", "Call Routing", "24/7 Availability", "Professional Image"]
    },
    {
      icon: <Search className="h-12 w-12" />,
      title: "SEO Optimization",
      description: "Get found on Google with our comprehensive SEO strategies that drive organic traffic to your business.",
      features: ["Keyword Research", "On-Page SEO", "Local SEO", "Analytics & Reporting"]
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Social Media Marketing",
      description: "Build your brand presence across social platforms and engage with your target audience effectively.",
      features: ["Content Strategy", "Platform Management", "Audience Engagement", "Brand Building"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital solutions that work together to establish your professional online presence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-xl mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-teal-600 hover:to-blue-700 transition-all duration-200">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
