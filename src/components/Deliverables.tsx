
import React from 'react';
import { Check, Clock, DollarSign } from 'lucide-react';

const Deliverables = () => {
  const deliverables = [
    "Custom Website Design & Development",
    "Visual Business Number Setup",
    "IVR Call Menu Configuration",
    "Click-to-Call Integration",
    "Google Business Profile Setup",
    "Brand-Aligned Design System",
    "Mobile Responsive Design",
    "SEO Foundation Setup",
    "Social Media Integration",
    "Analytics & Tracking Setup"
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              What You Get
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Complete digital transformation package for your business
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Deliverables List */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Your Complete Package
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {deliverables.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Timeline & Pricing */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl p-8 text-white">
                <div className="flex items-center mb-4">
                  <Clock className="h-8 w-8 mr-3" />
                  <h3 className="text-2xl font-bold">Timeline</h3>
                </div>
                <p className="text-3xl font-bold mb-2">7-10 Days</p>
                <p className="text-teal-100">Complete delivery from start to finish</p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <DollarSign className="h-8 w-8 mr-3 text-teal-600 dark:text-teal-400" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Investment</h3>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    Ksh 35,000 - 45,000
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">Complete package pricing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deliverables;
