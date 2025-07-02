
import React from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="/lovable-uploads/31432c47-1d9a-4481-9c6d-38623fb1de51.png" 
              alt="Blue Lines Digital Marketing" 
              className="h-12 w-12 mb-4"
            />
            <h3 className="text-xl font-bold mb-4">Blue Lines Digital Marketing</h3>
            <p className="text-gray-300 mb-4">
              Empowering businesses with professional online presence and digital marketing solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Web Development</li>
              <li>Visual Business Number</li>
              <li>IVR Systems</li>
              <li>SEO Optimization</li>
              <li>Social Media Marketing</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-teal-400" />
                <span className="text-gray-300">+254 700 000 000</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-teal-400" />
                <span className="text-gray-300">info@bluelinesdigital.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-teal-400" />
                <span className="text-gray-300">WhatsApp Support</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Blue Lines Digital Marketing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
