
import React from 'react';
import { Check, Clock, DollarSign } from 'lucide-react';

const Deliverables = () => {
  const deliverables = [
    {
      title: "Custom Website",
      description: "With domain, hosting, and contact integration"
    },
    {
      title: "Visual Number Setup",
      description: "Branded number with activation"
    },
    {
      title: "IVR Setup",
      description: "Voice recording, call menu, music"
    },
    {
      title: "Click-to-Call Integration",
      description: "On website and mobile site"
    },
    {
      title: "Google Business Profile Setup",
      description: "Number + website appear on Google"
    },
    {
      title: "Brand-Aligned Design",
      description: "Everything follows one brand identity"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Project Deliverables
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Complete digital presence buildout package for your business
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Deliverables List */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  What You Get
                </h3>
                <div className="space-y-6">
                  {deliverables.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center mt-1">
                        <Check className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Timeline & Pricing */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl p-8 text-white shadow-lg">
                <div className="flex items-center mb-4">
                  <Clock className="h-8 w-8 mr-3" />
                  <h3 className="text-2xl font-bold">Timeline</h3>
                </div>
                <p className="text-3xl font-bold mb-2">7-10 Days</p>
                <p className="text-teal-100">Business days from start to completion</p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <DollarSign className="h-8 w-8 mr-3 text-teal-600 dark:text-teal-400" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Investment</h3>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    Ksh 35,000 - 45,000
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">Depending on design complexity and pages</p>
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
