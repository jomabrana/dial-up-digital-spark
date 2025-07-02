
import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in your digital marketing services. Can we discuss my project?");
    window.open(`https://wa.me/254700000000?text=${message}`, '_blank');
  };

  const makeCall = () => {
    window.open('tel:+254700000000', '_self');
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Get Your Quote
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Ready to launch your business online? Let's discuss your project.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                    placeholder="Tell us about your project, goals, and requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white py-4 rounded-lg font-semibold hover:from-teal-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Get In Touch
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Ready to take your business to the next level? Contact us today for a free consultation and custom quote.
                </p>
              </div>

              {/* Quick Contact Options */}
              <div className="space-y-4">
                <button
                  onClick={openWhatsApp}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-3"
                >
                  <MessageCircle className="h-6 w-6" />
                  <span>WhatsApp Us</span>
                </button>

                <button
                  onClick={makeCall}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-3"
                >
                  <Phone className="h-6 w-6" />
                  <span>Call Now: +254 700 000 000</span>
                </button>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Mail className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                    <span className="text-gray-900 dark:text-white font-semibold">Email</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">info@bluelinesdigital.com</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg p-6 text-white">
                <h4 className="font-bold text-lg mb-2">Quick Response Promise</h4>
                <p className="text-teal-100">We respond to all inquiries within 2 hours during business hours.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
